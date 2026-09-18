import CycloneDesktopImage from "./asset/cyclone-desktop.png";
import CycloneMobileImage from "./asset/cyclone-mobile.png";
import MusicAsset from "./asset/music.mp3";
import {BottomInfoBar} from "./component/BottomInfoBar";
import {DesktopLyricsPanel} from "./component/DesktopLyricsPanel";
import {FiveElementsWheel} from "./component/FiveElementsWheel";
import {MobileTopBar} from "./component/MobileTopBar";
import {VerticalTitle} from "./component/VerticalTitle";
import {useBackgroundMusic} from "./hook/useBackgroundMusic";
import {useFiveElementsWheel} from "./hook/useFiveElementsWheel";
import type {CycloneCssVars, FiveElement} from "./type";
import "./index.css";

export const HomePage = () => {
    const {audioRef, isPlaying, lyricsActive, toggle, fadeOut} = useBackgroundMusic();
    const {rotation, glowingId, selectElement, handleSpinEnd} = useFiveElementsWheel();
    const cycloneStyle: CycloneCssVars = {
        "--cyclone-desktop": `url("${CycloneDesktopImage}")`,
        "--cyclone-mobile": `url("${CycloneMobileImage}")`,
    };

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
                        <FiveElementsWheel rotation={rotation} glowingId={glowingId} onSelect={onSelectElement} onSpinEnd={handleSpinEnd} />
                        <BottomInfoBar />
                    </div>
                </main>
            </div>
            <audio ref={audioRef} src={MusicAsset} preload="auto" loop />
        </div>
    );
};
