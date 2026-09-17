import {createBrowserRouter} from "react-router";
import {HomePage} from "./page/Home";
import {NotFoundPage} from "./page/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {index: true, Component: HomePage},
            // {path: "about", Component: AboutPage},
            // {path: "services", Component: ServicesPage},
            // {path: "contact", Component: ContactPage},
            {path: "*", Component: NotFoundPage},
        ],
    },
]);
