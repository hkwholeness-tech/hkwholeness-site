import React from "react";
import type {ElementId, FiveElement} from "../type";

export function useFiveElementsWheel() {
    const navigatingRef = React.useRef(false);
    const timersRef = React.useRef<number[]>([]);
    const [rotation, setRotation] = React.useState(0);
    const [glowingId, setGlowingId] = React.useState<ElementId | null>(null);

    React.useEffect(() => {
        const timers = timersRef.current;
        return () => {
            timers.forEach(id => {
                window.clearTimeout(id);
            });
        };
    }, []);

    function selectElement(element: FiveElement) {
        if (navigatingRef.current) {
            return;
        }
        navigatingRef.current = true;
        const rotationNeeded = (360 - element.angle) % 360;
        setGlowingId(null);
        setRotation(rotationNeeded);
        const glowTimer = window.setTimeout(() => {
            setGlowingId(element.id);
            const navTimer = window.setTimeout(() => {
                window.location.href = element.href;
            }, 800);
            timersRef.current.push(navTimer);
        }, 1000);
        timersRef.current.push(glowTimer);
    }

    return {rotation, glowingId, selectElement};
}
