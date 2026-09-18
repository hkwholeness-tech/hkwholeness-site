import {createBrowserRouter} from "react-router";
import {SiteLayout} from "./component/SiteLayout";
import {HomePage} from "./page/Home";
import {NotFoundPage} from "./page/NotFound";
import {TheoryPage} from "./page/Theory";

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {index: true, Component: HomePage},
            {
                Component: SiteLayout,
                children: [
                    {path: "theory", Component: TheoryPage},
                    // {path: "about", Component: AboutPage},
                    // {path: "services", Component: ServicesPage},
                    // {path: "contact", Component: ContactPage},
                ],
            },
            {path: "*", Component: NotFoundPage},
        ],
    },
]);
