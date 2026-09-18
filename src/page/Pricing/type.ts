import type {CSSProperties} from "react";

export type PricingCssVars = CSSProperties & {
    "--pricing-watermark": string;
    "--pricing-illustration": string;
};

export interface PriceRow {
    item: string;
    fee: string;
    suffix?: string;
    note: string;
}

export interface Certificate {
    num: string;
    regCode?: string;
    title: string;
    after: string;
}

export interface CertificateImage {
    src: string;
    alt: string;
    label: string;
    code?: string;
}
