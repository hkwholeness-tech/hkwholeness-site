import React from "react";
import classNames from "classnames";
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

const INNER_CARD_CLASS = classNames(
    "relative z-1 flex flex-col items-center overflow-hidden",
    "border border-[rgba(218,208,192,0.6)] bg-[rgba(253,252,249,0.92)] shadow-[0_16px_40px_rgba(44,37,30,0.08)] backdrop-blur-md",
    "w-[120vw] max-w-[100vw] min-h-[55vh] flex-1 justify-start rounded-none px-0 py-0.5",
    "mx-[calc(-50vw+50%)]",
    "bg-(image:--cyclone-mobile) bg-size-[105%] bg-position-[center_60%] bg-no-repeat",
    "before:pointer-events-none before:absolute before:top-0 before:left-0 before:z-[-1] before:hidden before:h-full before:w-[110%] before:bg-(image:--cyclone-desktop) before:bg-cover before:bg-center before:bg-no-repeat before:opacity-75 before:content-['']",
    "min-[851px]:mx-0 min-[851px]:w-full min-[851px]:max-w-280 min-[851px]:min-h-0 min-[851px]:flex-none min-[851px]:justify-center min-[851px]:rounded-[28px] min-[851px]:px-3.75 min-[851px]:pt-5 min-[851px]:pb-10 min-[851px]:bg-none min-[851px]:before:block",
    "min-[1401px]:px-8 min-[1401px]:pb-16"
);

export const HomePage = () => {
    const {audioRef, isPlaying, lyricsActive, toggle, fadeOut} = useBackgroundMusic();
    const {rotation, glowingId, selectElement} = useFiveElementsWheel();
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
        <div className="m-0 flex min-h-screen flex-col overflow-x-hidden bg-[#f5f2eb] p-0 font-body text-[#2c251e]">
            <div className="relative flex w-full flex-1 flex-col justify-center min-[851px]:flex-row">
                <main className="box-border flex w-full flex-1 flex-col items-center justify-center p-0 min-[851px]:flex-row min-[851px]:p-2.5">
                    <div className={INNER_CARD_CLASS} style={cycloneStyle}>
                        <DesktopLyricsPanel isPlaying={isPlaying} lyricsActive={lyricsActive} onToggle={toggle} />
                        <VerticalTitle />
                        <MobileTopBar isPlaying={isPlaying} lyricsActive={lyricsActive} onToggle={toggle} />
                        <FiveElementsWheel rotation={rotation} glowingId={glowingId} onSelect={onSelectElement} />
                        <BottomInfoBar />
                    </div>
                </main>
            </div>
            <audio ref={audioRef} src={musicSrc} preload="auto" loop />
        </div>
    );
};
