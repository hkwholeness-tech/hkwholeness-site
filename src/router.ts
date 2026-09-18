import {createBrowserRouter} from "react-router";
import {SiteLayout} from "./component/SiteLayout";
import {CharityPage} from "./page/Charity";
import {ContactPage} from "./page/Contact";
import {HomePage} from "./page/Home";
import {NotFoundPage} from "./page/NotFound";
import {PricingPage} from "./page/Pricing";
import {SpiritPage} from "./page/Spirit";
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
                    {path: "spirit", Component: SpiritPage},
                    {path: "contact", Component: ContactPage},
                    {path: "charity", Component: CharityPage},
                    {path: "pricing", Component: PricingPage},
                    // {path: "about", Component: AboutPage},
                    // {path: "services", Component: ServicesPage},
                ],
            },
            {path: "*", Component: NotFoundPage},
        ],
    },
]);
