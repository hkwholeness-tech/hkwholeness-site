import routesData from "./routes.json";

export interface RouteMeta {
    path: string;
    title: string;
    description: string;
    keywords: string;
    changefreq: string;
    priority: number;
}

export interface SiteMeta {
    siteName: string;
    siteUrl: string;
    ogImage: string;
    phone: string;
    email: string;
    addressStreet: string;
    addressLocality: string;
    addressCountry: string;
}

const envSiteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.trim();

export const SITE: SiteMeta = {
    ...routesData.site,
    siteUrl: envSiteUrl ? envSiteUrl.replace(/\/+$/, "") : routesData.site.siteUrl,
};

export const ROUTE_META: RouteMeta[] = routesData.routes;

export const DEFAULT_META: RouteMeta = ROUTE_META[0];

export function normalizePath(pathname: string): string {
    if (pathname.length > 1 && pathname.endsWith("/")) {
        return pathname.replace(/\/+$/, "");
    }
    return pathname;
}

export function findRouteMeta(pathname: string): RouteMeta | undefined {
    const normalized = normalizePath(pathname);
    return ROUTE_META.find(route => route.path === normalized);
}

export function getRouteMeta(pathname: string): RouteMeta {
    return findRouteMeta(pathname) ?? DEFAULT_META;
}

export function buildCanonical(meta: RouteMeta): string {
    return meta.path === "/" ? `${SITE.siteUrl}/` : `${SITE.siteUrl}${meta.path}`;
}
