export type ElementId = "wood" | "fire" | "earth" | "metal" | "water";

export interface FiveElement {
    id: ElementId;
    angle: number;
    href: string;
    label: string;
    darkSrc: string;
    activeSrc: string;
}
