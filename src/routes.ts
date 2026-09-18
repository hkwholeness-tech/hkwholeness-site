import {redirect} from "react-router";
import type {RouteObject} from "react-router";
import {RootLayout} from "./component/RootLayout";
import {SiteLayout} from "./component/SiteLayout";
import {CharityPage} from "./page/Charity";
import {ContactPage} from "./page/Contact";
import {HomePage} from "./page/Home";
import {PricingPage} from "./page/Pricing";
import {SpiritPage} from "./page/Spirit";
import {TheoryPage} from "./page/Theory";

export const routes: RouteObject[] = [
    {
        path: "/",
        Component: RootLayout,
        children: [
            {index: true, Component: HomePage},
            {
                Component: SiteLayout,
                children: [
                    {path: "theory", Component: TheoryPage},
                    {path: "spirit", Component: SpiritPage},
                    {path: "contact", Component: ContactPage},
                    {path: "charity", Component: CharityPage},
                    {path: "pricing", Component: PricingPage},
                ],
            },
            {path: "*", loader: () => redirect("/")},
        ],
    },
];
