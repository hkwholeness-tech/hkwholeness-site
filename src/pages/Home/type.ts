import type {CSSProperties} from "react";

export type ElementId = "wood" | "fire" | "earth" | "metal" | "water";

export type CycloneCssVars = CSSProperties & {
    "--cyclone-desktop": string;
    "--cyclone-mobile": string;
};

export interface FiveElement {
    id: ElementId;
    angle: number;
    href: string;
    label: string;
    darkSrc: string;
    activeSrc: string;
}
