import React from "react";
import cycloneDesktopSrc from "./asset/cyclone-desktop.png";
import cycloneMobileSrc from "./asset/cyclone-mobile.png";
import musicSrc from "./asset/music.mp3";
import {BottomInfoBar} from "./component/BottomInfoBar";
import {DesktopLyricsPanel} from "./component/DesktopLyricsPanel";
import {FiveElementsWheel} from "./component/FiveElementsWheel";
import {MobileTopBar} from "./component/MobileTopBar";
import {VerticalTitle} from "./component/VerticalTitle";
import {PAGE_TITLE} from "./constant";
import {useBackgroundMusic} from "./hook/useBackgroundMusic";
import {useFiveElementsWheel} from "./hook/useFiveElementsWheel";
import type {CycloneCssVars, FiveElement} from "./type";
import "./index.css";

export const HomePage = () => {
    const {audioRef, isPlaying, lyricsActive, toggle, fadeOut} = useBackgroundMusic();
    const {rotation, glowingId, selectElement, handleSpinEnd, handleGlowEnd} = useFiveElementsWheel();
    const cycloneStyle: CycloneCssVars = {
        "--cyclone-desktop": `url("${cycloneDesktopSrc}")`,
        "--cyclone-mobile": `url("${cycloneMobileSrc}")`,
    };

    React.useEffect(() => {
        document.title = PAGE_TITLE;
    }, []);

    const onSelectElement = (element: FiveElement) => {
        fadeOut();
        selectElement(element);
    };

    return (
        <div className="home-page">
            <div className="home-page__shell">
                <main className="home-page__main">
                    <div className="home-page__card" style={cycloneStyle}>
                        <DesktopLyricsPanel isPlaying={isPlaying} lyricsActive={lyricsActive} onToggle={toggle} />
                        <VerticalTitle />
                        <MobileTopBar isPlaying={isPlaying} lyricsActive={lyricsActive} onToggle={toggle} />
                        <FiveElementsWheel rotation={rotation} glowingId={glowingId} onSelect={onSelectElement} onSpinEnd={handleSpinEnd} onGlowEnd={handleGlowEnd} />
                        <BottomInfoBar />
                    </div>
                </main>
            </div>
            <audio ref={audioRef} src={musicSrc} preload="auto" loop />
        </div>
    );
};
