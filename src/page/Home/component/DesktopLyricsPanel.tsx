import React from "react";
import {LYRICS_LINE_1, LYRICS_LINE_2} from "../constant";
import {MusicToggleButton} from "./MusicToggleButton";

interface Props {
    isPlaying: boolean;
    lyricsActive: boolean;
    onToggle: () => void;
}

export const DesktopLyricsPanel = React.memo((props: Props) => {
    return (
        <div className="home-lyrics" data-active={props.lyricsActive}>
            <MusicToggleButton isPlaying={props.isPlaying} variant="desktop" onToggle={props.onToggle} />
            <div className="home-lyrics__cols">
                <span className="home-lyrics__col home-lyrics__col--1">{LYRICS_LINE_1}</span>
                <span className="home-lyrics__col home-lyrics__col--2">{LYRICS_LINE_2}</span>
            </div>
        </div>
    );
});
