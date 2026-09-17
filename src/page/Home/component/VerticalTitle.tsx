import React from "react";
import {PAGE_HEADING} from "../constant";

export const VerticalTitle = React.memo(() => {
    return <h1 className="home-title">{PAGE_HEADING}</h1>;
});
