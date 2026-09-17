import React from "react";
import {RouterProvider} from "react-router";
import {router} from "./router";

export const App = () => {
    return (
        <React.Fragment>
            <RouterProvider router={router} />
        </React.Fragment>
    );
};
