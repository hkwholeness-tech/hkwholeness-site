import React from "react";
import classNames from "classnames";
import {PLAY_ACTIVE_SRC, PLAY_SRC} from "../constant";

interface Props {
    isPlaying: boolean;
    variant: "desktop" | "mobile";
    onToggle: () => void;
}

const STONE_IMG_CLASS = "absolute inset-0 size-full object-cover transition-opacity duration-400 ease-in-out [image-rendering:-webkit-optimize-contrast]";

const DESKTOP_BTN_CLASS = classNames(
    "group/stone relative size-22.5 cursor-pointer border-none bg-transparent p-0",
    "outline-none [-webkit-tap-highlight-color:transparent] transition-transform duration-300 ease-in-out hover:scale-[1.06]",
    "focus:outline-none active:outline-none"
);

const MOBILE_BTN_CLASS = classNames(
    "group/stone relative size-14.5 shrink-0 cursor-pointer appearance-none overflow-visible rounded-full border-none bg-transparent p-0",
    "outline-none [-webkit-tap-highlight-color:transparent] transition-[box-shadow,transform] duration-300 ease-in-out",
    "focus:bg-transparent focus:shadow-none focus:outline-none active:bg-transparent active:shadow-none active:outline-none",
    "data-[playing=true]:shadow-[0_0_18px_5px_rgba(255,215,0,0.7)]"
);

export const MusicToggleButton = React.memo((props: Props) => {
    const isDesktop = props.variant === "desktop";

    return (
        <button
            id={isDesktop ? "musicToggleBtn" : "mobileMusicToggleBtn"}
            type="button"
            data-playing={props.isPlaying}
            className={classNames(isDesktop ? DESKTOP_BTN_CLASS : MOBILE_BTN_CLASS)}
            title="點擊切換播放/暫停"
            onClick={props.onToggle}
        >
            <div className="relative size-full">
                <img src={PLAY_SRC} className={classNames(STONE_IMG_CLASS, "drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] group-data-[playing=true]/stone:opacity-0")} alt="聆聽-暗" />
                <img
                    src={PLAY_ACTIVE_SRC}
                    className={classNames(STONE_IMG_CLASS, "opacity-0 group-data-[playing=true]/stone:opacity-100 group-data-[playing=true]/stone:drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]")}
                    alt="聆聽-金"
                />
            </div>
        </button>
    );
});
