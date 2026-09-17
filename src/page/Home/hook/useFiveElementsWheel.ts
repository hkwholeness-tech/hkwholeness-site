import React from "react";
import type {ElementId, FiveElement} from "../type";

export function useFiveElementsWheel() {
    const navigatingRef = React.useRef(false);
    const targetRef = React.useRef<FiveElement | null>(null);
    const [rotation, setRotation] = React.useState(0);
    const [glowingId, setGlowingId] = React.useState<ElementId | null>(null);

    React.useEffect(() => {
        const handlePageShow = () => {
            navigatingRef.current = false;
            targetRef.current = null;
            setGlowingId(null);
        };

        window.addEventListener("pageshow", handlePageShow);
        return () => {
            window.removeEventListener("pageshow", handlePageShow);
        };
    }, []);

    const selectElement = (element: FiveElement) => {
        if (navigatingRef.current) {
            return;
        }
        const rotationNeeded = (360 - element.angle) % 360;
        if (rotationNeeded === rotation) {
            window.location.href = element.href;
            return;
        }
        navigatingRef.current = true;
        targetRef.current = element;
        setGlowingId(null);
        setRotation(rotationNeeded);
    };

    const handleSpinEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
        if (event.target !== event.currentTarget || event.propertyName !== "transform") {
            return;
        }
        const element = targetRef.current;
        if (element) {
            setGlowingId(element.id);
        }
    };

    const handleGlowEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
        if (event.target !== event.currentTarget) {
            return;
        }
        const element = targetRef.current;
        if (!element) {
            return;
        }
        targetRef.current = null;
        navigatingRef.current = false;
        window.location.href = element.href;
    };

    return {rotation, glowingId, selectElement, handleSpinEnd, handleGlowEnd};
}
