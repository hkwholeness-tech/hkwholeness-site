import {mkdir, readFile, writeFile} from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";

const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

const config = JSON.parse(await readFile(path.join(root, "src/seo/routes.json"), "utf8"));
const {site, routes} = config;

const template = await readFile(path.join(root, "dist/index.html"), "utf8");
const {render} = await import(new URL("../dist-ssr/entry-server.js", import.meta.url));

const lastmod = new Date().toISOString().slice(0, 10);

function escapeHtml(value) {
    return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function canonicalFor(meta) {
    return meta.path === "/" ? `${site.siteUrl}/` : `${site.siteUrl}${meta.path}`;
}

function buildHead(meta) {
    const canonical = canonicalFor(meta);
    const image = `${site.siteUrl}${site.ogImage}`;
    return [
        `<title>${escapeHtml(meta.title)}</title>`,
        `<meta name="description" content="${escapeHtml(meta.description)}" />`,
        `<meta name="keywords" content="${escapeHtml(meta.keywords)}" />`,
        `<meta name="robots" content="index,follow" />`,
        `<link rel="canonical" href="${canonical}" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:site_name" content="${escapeHtml(site.siteName)}" />`,
        `<meta property="og:locale" content="zh_HK" />`,
        `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
        `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
        `<meta property="og:url" content="${canonical}" />`,
        `<meta property="og:image" content="${image}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
        `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
        `<meta name="twitter:image" content="${image}" />`,
    ].join("\n        ");
}

function buildJsonLd() {
    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        name: site.siteName,
        url: site.siteUrl,
        image: `${site.siteUrl}${site.ogImage}`,
        telephone: site.phone,
        email: site.email,
        address: {
            "@type": "PostalAddress",
            streetAddress: site.addressStreet,
            addressLocality: site.addressLocality,
            addressCountry: site.addressCountry,
        },
        areaServed: "香港",
        priceRange: "$$",
    });
}

function inject(templateHtml, meta, bodyHtml) {
    return templateHtml
        .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
        .replace("<!--seo-head-->", `${buildHead(meta)}\n        <script type="application/ld+json">${buildJsonLd()}</script>`)
        .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
}

for (const meta of routes) {
    const {html, status, redirect} = await render(meta.path);
    if (redirect) {
        throw new Error(`Unexpected redirect for ${meta.path} -> ${redirect}`);
    }
    if (status !== 200) {
        throw new Error(`Prerender failed for ${meta.path} (status ${status})`);
    }

    const output = inject(template, meta, html);
    const outDir = meta.path === "/" ? path.join(root, "dist") : path.join(root, "dist", meta.path.replace(/^\//, ""));
    await mkdir(outDir, {recursive: true});
    await writeFile(path.join(outDir, "index.html"), output);
    console.log(`prerendered ${meta.path}`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
    .map(
        meta => `    <url>
        <loc>${canonicalFor(meta)}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${meta.changefreq}</changefreq>
        <priority>${meta.priority.toFixed(1)}</priority>
    </url>`
    )
    .join("\n")}
</urlset>
`;
await writeFile(path.join(root, "dist/sitemap.xml"), sitemap);
console.log("generated sitemap.xml");

const robots = `User-agent: *
Allow: /

Sitemap: ${site.siteUrl}/sitemap.xml
`;
await writeFile(path.join(root, "dist/robots.txt"), robots);
console.log("generated robots.txt");
