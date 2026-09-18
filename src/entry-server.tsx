import {renderToString} from "react-dom/server";
import {createStaticHandler, createStaticRouter, StaticRouterProvider} from "react-router";
import {routes} from "./routes";

export interface RenderResult {
    status: number;
    html: string;
    redirect: string | null;
}

export async function render(url: string): Promise<RenderResult> {
    const handler = createStaticHandler(routes);
    const request = new Request(new URL(url, "http://localhost"));
    const context = await handler.query(request);

    if (context instanceof Response) {
        return {status: context.status, html: "", redirect: context.headers.get("Location")};
    }

    const router = createStaticRouter(handler.dataRoutes, context);
    const html = renderToString(<StaticRouterProvider router={router} context={context} />);

    return {status: context.statusCode ?? 200, html, redirect: null};
}
