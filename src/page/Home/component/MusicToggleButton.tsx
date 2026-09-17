import React from "react";
import classNames from "classnames";
import {PLAY_ACTIVE_SRC, PLAY_SRC} from "../constant";

interface Props {
    isPlaying: boolean;
    variant: "desktop" | "mobile";
    onToggle: () => void;
}

export const MusicToggleButton = React.memo((props: Props) => {
    const isDesktop = props.variant === "desktop";

    return (
        <button
            id={isDesktop ? "musicToggleBtn" : "mobileMusicToggleBtn"}
            type="button"
            data-playing={props.isPlaying}
            className={classNames("home-music", isDesktop ? "home-music--desktop" : "home-music--mobile")}
            title="點擊切換播放/暫停"
            onClick={props.onToggle}
        >
            <div className="home-music__frame">
                <img src={PLAY_SRC} className="home-music__img home-music__img--idle" alt="聆聽-暗" />
                <img src={PLAY_ACTIVE_SRC} className="home-music__img home-music__img--glow" alt="聆聽-金" />
            </div>
        </button>
    );
});
