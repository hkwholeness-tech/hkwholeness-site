import React from "react";
import classNames from "classnames";
import type {FiveElement} from "../type";

interface Props {
    element: FiveElement;
    rotation: number;
    isGlowing: boolean;
    onSelect: (element: FiveElement) => void;
}

export const ElementButton = React.memo((props: Props) => {
    return (
        <button
            type="button"
            className={classNames("home-element", `home-element--${props.element.id}`)}
            onClick={() => {
                props.onSelect(props.element);
            }}
        >
            <div className="home-element__counter" style={{transform: `rotate(${-props.rotation}deg)`}}>
                <div className={classNames("home-element__stone", {"is-glowing": props.isGlowing})}>
                    <img src={props.element.darkSrc} className="home-element__img home-element__img--dark" alt={`${props.element.label}-暗`} />
                    <img src={props.element.activeSrc} className="home-element__img home-element__img--active" alt={`${props.element.label}-金`} />
                </div>
            </div>
        </button>
    );
});
