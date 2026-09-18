import React from "react";
import {Outlet} from "react-router";
import {Seo} from "../seo/Seo";

export const RootLayout = () => {
    return (
        <React.Fragment>
            <Seo />
            <Outlet />
        </React.Fragment>
    );
};
