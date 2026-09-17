import React from "react";
import {FIVE_ELEMENTS} from "../constant";
import type {ElementId, FiveElement} from "../type";
import {CenterPortrait} from "./CenterPortrait";
import {ElementButton} from "./ElementButton";

interface Props {
    rotation: number;
    glowingId: ElementId | null;
    onSelect: (element: FiveElement) => void;
}

export const FiveElementsWheel = React.memo((props: Props) => {
    return (
        <div className="relative mx-auto my-0 flex size-80 items-center justify-center min-[601px]:my-1.25 min-[601px]:size-155 min-[993px]:size-220">
            <CenterPortrait />
            <div className="absolute flex size-full items-center justify-center transition-transform duration-1000 ease-in-out" style={{transform: `rotate(${props.rotation}deg)`}}>
                {FIVE_ELEMENTS.map(element => (
                    <ElementButton key={element.id} element={element} rotation={props.rotation} isGlowing={props.glowingId === element.id} onSelect={props.onSelect} />
                ))}
            </div>
        </div>
    );
});
