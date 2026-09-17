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
        <div className="home-wheel">
            <CenterPortrait />
            <div className="home-wheel__spin" style={{transform: `rotate(${props.rotation}deg)`}}>
                {FIVE_ELEMENTS.map(element => (
                    <ElementButton key={element.id} element={element} rotation={props.rotation} isGlowing={props.glowingId === element.id} onSelect={props.onSelect} />
                ))}
            </div>
        </div>
    );
});
