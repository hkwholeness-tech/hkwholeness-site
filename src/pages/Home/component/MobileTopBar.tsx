import React from "react";
import classNames from "classnames";
import {LYRICS_LINE_1, LYRICS_LINE_2, PAGE_HEADING} from "../constant";
import {MusicToggleButton} from "./MusicToggleButton";

interface Props {
    isPlaying: boolean;
    lyricsActive: boolean;
    onToggle: () => void;
}

const MOBILE_LYRICS_CLASS = classNames(
    "font-calligraphy text-[14.5px] font-bold tracking-[0.5px] whitespace-nowrap text-[#111] opacity-0",
    "[text-shadow:0_0_8px_rgba(255,215,0,1),0_0_15px_rgba(255,215,0,0.8),0_0_25px_rgba(255,255,255,0.8)]",
    "group-data-[active=true]/lyrics:animate-lyrics-reveal-h"
);

export const MobileTopBar = React.memo((props: Props) => {
    return (
        <div className="group/lyrics relative z-20 mb-0.5 mt-4.5 flex w-full shrink-0 flex-col items-center gap-1.5 px-1.25 min-[851px]:hidden" data-active={props.lyricsActive}>
            <div className="font-calligraphy mb-2 text-center text-[25px] font-black tracking-[2px] whitespace-nowrap text-[#111] [text-shadow:0_0_10px_rgba(255,255,255,0.9),0_0_20px_rgba(255,215,0,0.5)]">
                {PAGE_HEADING}
            </div>
            <div className="flex w-full items-center justify-center gap-3">
                <MusicToggleButton isPlaying={props.isPlaying} variant="mobile" onToggle={props.onToggle} />
                <div>
                    <div className={MOBILE_LYRICS_CLASS}>{LYRICS_LINE_2}</div>
                    <div className={classNames(MOBILE_LYRICS_CLASS, "ml-[1.2em]")}>{LYRICS_LINE_1}</div>
                </div>
            </div>
        </div>
    );
});
