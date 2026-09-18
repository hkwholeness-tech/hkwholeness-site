import React from "react";
import {useLocation} from "react-router";
import {buildCanonical, DEFAULT_META, findRouteMeta, SITE} from "./config";

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
    let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
    if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
    }
    element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
    let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
    }
    element.setAttribute("href", href);
}

export const Seo = () => {
    const {pathname} = useLocation();

    React.useEffect(() => {
        const matched = findRouteMeta(pathname);
        const meta = matched ?? DEFAULT_META;
        const canonical = buildCanonical(meta);
        const image = `${SITE.siteUrl}${SITE.ogImage}`;

        document.title = meta.title;

        upsertMeta("name", "description", meta.description);
        upsertMeta("name", "keywords", meta.keywords);
        upsertMeta("name", "robots", matched ? "index,follow" : "noindex,follow");

        upsertMeta("property", "og:type", "website");
        upsertMeta("property", "og:site_name", SITE.siteName);
        upsertMeta("property", "og:locale", "zh_HK");
        upsertMeta("property", "og:title", meta.title);
        upsertMeta("property", "og:description", meta.description);
        upsertMeta("property", "og:url", canonical);
        upsertMeta("property", "og:image", image);

        upsertMeta("name", "twitter:card", "summary_large_image");
        upsertMeta("name", "twitter:title", meta.title);
        upsertMeta("name", "twitter:description", meta.description);
        upsertMeta("name", "twitter:image", image);

        upsertLink("canonical", canonical);
    }, [pathname]);

    return null;
};
