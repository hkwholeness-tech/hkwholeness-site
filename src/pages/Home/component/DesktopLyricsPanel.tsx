import React from "react";
import classNames from "classnames";
import {LYRICS_LINE_1, LYRICS_LINE_2} from "../constant";
import {MusicToggleButton} from "./MusicToggleButton";

interface Props {
    isPlaying: boolean;
    lyricsActive: boolean;
    onToggle: () => void;
}

const LYRICS_COL_CLASS = classNames(
    "font-calligraphy [writing-mode:vertical-rl] [text-orientation:upright] text-[36px] font-bold tracking-[6px]",
    "whitespace-nowrap leading-[1.3] opacity-0 text-[#241b14]!",
    "[text-shadow:0_0_4px_rgba(255,230,150,0.9),0_0_10px_rgba(255,215,0,0.7),0_0_18px_rgba(255,180,50,0.4),0_2px_6px_rgba(44,37,30,0.3)]",
    "group-data-[active=true]/lyrics:animate-lyrics-reveal-v"
);

export const DesktopLyricsPanel = React.memo((props: Props) => {
    return (
        <div
            className="group/lyrics absolute top-1/2 left-8.75 z-10 hidden -translate-y-1/2 flex-col items-center gap-3.75 border-none bg-transparent p-0 shadow-none min-[1401px]:flex"
            data-active={props.lyricsActive}
        >
            <MusicToggleButton isPlaying={props.isPlaying} variant="desktop" onToggle={props.onToggle} />
            <div className="flex flex-row items-start gap-4">
                <span className={classNames(LYRICS_COL_CLASS, "mt-[2.2em]")}>{LYRICS_LINE_1}</span>
                <span className={classNames(LYRICS_COL_CLASS, "-translate-y-2.5")}>{LYRICS_LINE_2}</span>
            </div>
        </div>
    );
});
