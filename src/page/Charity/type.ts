import type {CSSProperties} from "react";

export type CharityCssVars = CSSProperties & {
    "--charity-watermark": string;
};

export type RichSegment = string | {strong: string};

export interface TeachingCard {
    image: string;
    alt: string;
    tag: string;
    title: string;
    desc: RichSegment[];
}

export interface ClinicSession {
    image: string;
    alt: string;
    date: string;
    location: string;
}

export interface TianyiRow {
    item: string;
    fee: string;
    note: string;
}
