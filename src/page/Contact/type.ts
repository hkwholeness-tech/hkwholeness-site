import type {CSSProperties} from "react";

export type ContactCssVars = CSSProperties & {
    "--contact-watermark": string;
};

export interface ScheduleRow {
    day: string;
    morning?: string;
    afternoon?: string;
}

export interface DetailItem {
    label: string;
    value: string;
}

export interface VideoCase {
    tag: string;
    title: string;
    videoId: string;
    details: DetailItem[];
    date?: string;
}

export interface XrayStage {
    image: string;
    label: string;
    desc: string;
}

export interface XrayCase {
    badge: string;
    patient: string;
    summary: string;
    stages: XrayStage[];
}
