import React from "react";
import {PAGE_HEADING} from "../constant";

export const VerticalTitle = React.memo(() => {
    return (
        <h1 className="font-calligraphy absolute top-1/2 right-8.75 m-0 hidden -translate-y-1/2 border-l-[3px] border-l-[rgba(255,220,120,0.8)] px-0 py-3 text-[44px] leading-[1.2] font-[1000] tracking-[8px] whitespace-nowrap text-[#1a130f] [writing-mode:vertical-rl] [text-orientation:upright] [text-shadow:0_0_4px_rgba(255,255,255,1),0_0_10px_rgba(255,215,0,0.9),0_0_20px_rgba(255,180,50,0.7),0_2px_4px_rgba(0,0,0,0.8)] min-[1401px]:block">
            {PAGE_HEADING}
        </h1>
    );
});
