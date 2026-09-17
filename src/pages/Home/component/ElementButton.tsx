import React from "react";
import classNames from "classnames";
import type {ElementId, FiveElement} from "../type";

interface Props {
    element: FiveElement;
    rotation: number;
    isGlowing: boolean;
    onSelect: (element: FiveElement) => void;
}

const POSITION_CLASS: Record<ElementId, string> = {
    wood: "top-[calc(50%-115px)] left-1/2 min-[601px]:top-[calc(50%-200px)] min-[993px]:top-[calc(50%-300px)]",
    fire: "top-[calc(50%-35px)] left-[calc(50%+109px)] min-[601px]:top-[calc(50%-61.8px)] min-[601px]:left-[calc(50%+190.2px)] min-[993px]:top-[calc(50%-92.7px)] min-[993px]:left-[calc(50%+285.3px)]",
    earth: "top-[calc(50%+93px)] left-[calc(50%+67px)] min-[601px]:top-[calc(50%+161.8px)] min-[601px]:left-[calc(50%+117.6px)] min-[993px]:top-[calc(50%+242.7px)] min-[993px]:left-[calc(50%+176.3px)]",
    metal: "top-[calc(50%+93px)] left-[calc(50%-67px)] min-[601px]:top-[calc(50%+161.8px)] min-[601px]:left-[calc(50%-117.6px)] min-[993px]:top-[calc(50%+242.7px)] min-[993px]:left-[calc(50%-176.3px)]",
    water: "top-[calc(50%-35px)] left-[calc(50%-109px)] min-[601px]:top-[calc(50%-61.8px)] min-[601px]:left-[calc(50%-190.2px)] min-[993px]:top-[calc(50%-92.7px)] min-[993px]:left-[calc(50%-285.3px)]",
};

const GLOW_ANIMATE_CLASS: Record<ElementId, string> = {
    wood: "animate-wood-glow",
    fire: "animate-fire-glow",
    earth: "animate-earth-glow",
    metal: "animate-metal-glow",
    water: "animate-water-glow",
};

const HOVER_GLOW_CLASS: Record<ElementId, string> = {
    wood: "group-hover/el:drop-shadow-[0_0_20px_rgba(76,175,80,0.8)]",
    fire: "group-hover/el:drop-shadow-[0_0_20px_rgba(244,67,54,0.8)]",
    earth: "group-hover/el:drop-shadow-[0_0_20px_rgba(212,163,115,0.8)]",
    metal: "group-hover/el:drop-shadow-[0_0_20px_rgba(255,215,0,0.8)]",
    water: "group-hover/el:drop-shadow-[0_0_20px_rgba(33,150,243,0.8)]",
};

const SIZE_CLASS = "size-20 min-[601px]:size-42.5 min-[993px]:size-60";

const BTN_IMG_CLASS = "absolute inset-0 size-full object-cover transition-all duration-400 ease-in-out [image-rendering:-webkit-optimize-contrast]";

export const ElementButton = React.memo((props: Props) => {
    return (
        <button
            type="button"
            className={classNames(
                "group/el absolute z-10 flex -translate-1/2 cursor-pointer flex-col items-center justify-center rounded-full border-none bg-transparent p-0 no-underline hover:scale-[1.08]",
                SIZE_CLASS,
                POSITION_CLASS[props.element.id]
            )}
            onClick={() => {
                props.onSelect(props.element);
            }}
        >
            <div className="flex size-full flex-col items-center justify-center transition-transform duration-1000 ease-in-out" style={{transform: `rotate(${-props.rotation}deg)`}}>
                <div
                    className={classNames("relative overflow-visible transition-all duration-300 ease-in-out", SIZE_CLASS, {
                        [GLOW_ANIMATE_CLASS[props.element.id]]: props.isGlowing,
                    })}
                >
                    <img src={props.element.darkSrc} className={classNames(BTN_IMG_CLASS, "drop-shadow-[0_0_1px_rgba(0,0,0,0.15)] group-hover/el:opacity-0")} alt={`${props.element.label}-暗`} />
                    <img
                        src={props.element.activeSrc}
                        className={classNames(BTN_IMG_CLASS, "opacity-0 group-hover/el:opacity-100", HOVER_GLOW_CLASS[props.element.id])}
                        alt={`${props.element.label}-金`}
                    />
                </div>
            </div>
        </button>
    );
});
