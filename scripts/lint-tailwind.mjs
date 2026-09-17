import {__unstable__loadDesignSystem} from "tailwindcss";
import fs from "node:fs";
import path from "node:path";
import {createRequire} from "node:module";
import {fileURLToPath} from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const require = createRequire(import.meta.url);
const cssPath = path.join(root, "src/index.css");
const fix = process.argv.includes("--fix");

const CANONICALIZE_OPTIONS = {
    rem: 16,
    collapse: true,
    logicalToPhysical: true,
};

function walk(dir, files = []) {
    for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
        if (entry.name === "node_modules" || entry.name === "dist") continue;
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(fullPath, files);
        else if (/\.(tsx|ts|jsx|js|html)$/.test(entry.name)) files.push(fullPath);
    }
    return files;
}

function extractStrings(source) {
    const results = [];
    let i = 0;
    while (i < source.length) {
        const ch = source[i];
        const next = source[i + 1];
        if (ch === "/" && next === "/") {
            i = source.indexOf("\n", i);
            if (i === -1) break;
            continue;
        }
        if (ch === "/" && next === "*") {
            const end = source.indexOf("*/", i + 2);
            i = end === -1 ? source.length : end + 2;
            continue;
        }
        if (ch === '"' || ch === "'") {
            const start = i;
            i += 1;
            let value = "";
            while (i < source.length) {
                const cur = source[i];
                if (cur === "\\") {
                    value += cur + (source[i + 1] ?? "");
                    i += 2;
                    continue;
                }
                if (cur === ch) break;
                value += cur;
                i += 1;
            }
            results.push({start, quote: ch, value});
            i += 1;
            continue;
        }
        i += 1;
    }
    return results;
}

function position(source, index) {
    let line = 1;
    let column = 1;
    for (let i = 0; i < index; i += 1) {
        if (source[i] === "\n") {
            line += 1;
            column = 1;
        } else {
            column += 1;
        }
    }
    return {line, column};
}

async function loadStylesheet(id, base) {
    const resolved = id === "tailwindcss" ? require.resolve("tailwindcss/index.css") : id.startsWith("tailwindcss/") ? require.resolve(id) : path.resolve(base, id);
    return {
        path: resolved,
        base: path.dirname(resolved),
        content: fs.readFileSync(resolved, "utf8"),
    };
}

const css = fs.readFileSync(cssPath, "utf8");
const designSystem = await __unstable__loadDesignSystem(css, {
    base: path.dirname(cssPath),
    loadStylesheet,
});

const files = walk(path.join(root, "src"));
let issueCount = 0;

for (const file of files) {
    const source = fs.readFileSync(file, "utf8");
    const strings = extractStrings(source);
    const replacements = [];

    for (const item of strings) {
        const list = item.value.split(/\s+/).filter(Boolean);
        if (list.length === 0) continue;
        const generated = designSystem.candidatesToCss(list);
        if (!generated.some(Boolean)) continue;

        const canonical = designSystem.canonicalizeCandidates(list, CANONICALIZE_OPTIONS);
        const from = list.join(" ");
        const to = canonical.join(" ");
        if (from === to) continue;

        const {line, column} = position(source, item.start);
        const rel = path.relative(root, file);
        console.log(`${rel}:${line}:${column}`);
        console.log(`  ${from}`);
        console.log(`  → ${to}`);
        console.log("");
        issueCount += 1;
        replacements.push({...item, next: to});
    }

    if (fix && replacements.length > 0) {
        let next = source;
        for (const item of replacements.toReversed()) {
            next = next.slice(0, item.start + 1) + item.next + next.slice(item.start + 1 + item.value.length);
        }
        fs.writeFileSync(file, next);
    }
}

if (issueCount === 0) {
    console.log("No Tailwind class issues.");
} else if (!fix) {
    console.error(`Found ${issueCount} Tailwind class issue${issueCount === 1 ? "" : "s"}.`);
    process.exit(1);
} else {
    console.log(`Fixed ${issueCount} Tailwind class issue${issueCount === 1 ? "" : "s"}.`);
}
