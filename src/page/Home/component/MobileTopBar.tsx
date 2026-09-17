import React from "react";
import {LYRICS_LINE_1, LYRICS_LINE_2, PAGE_HEADING} from "../constant";
import {MusicToggleButton} from "./MusicToggleButton";

interface Props {
    isPlaying: boolean;
    lyricsActive: boolean;
    onToggle: () => void;
}

export const MobileTopBar = React.memo((props: Props) => {
    return (
        <div className="home-mobile-bar" data-active={props.lyricsActive}>
            <div className="home-mobile-bar__title">{PAGE_HEADING}</div>
            <div className="home-mobile-bar__row">
                <MusicToggleButton isPlaying={props.isPlaying} variant="mobile" onToggle={props.onToggle} />
                <div>
                    <div className="home-mobile-bar__lyrics">{LYRICS_LINE_2}</div>
                    <div className="home-mobile-bar__lyrics home-mobile-bar__lyrics--shift">{LYRICS_LINE_1}</div>
                </div>
            </div>
        </div>
    );
});
