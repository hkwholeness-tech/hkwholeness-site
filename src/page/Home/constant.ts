import appointmentActiveSrc from "./asset/appointment-active.png";
import appointmentSrc from "./asset/appointment.png";
import doctorSrc from "./asset/doctor.jpg";
import earthActiveSrc from "./asset/earth-active.png";
import earthSrc from "./asset/earth.png";
import fireActiveSrc from "./asset/fire-active.png";
import fireSrc from "./asset/fire.png";
import metalActiveSrc from "./asset/metal-active.png";
import metalSrc from "./asset/metal.png";
import playActiveSrc from "./asset/play-active.png";
import playSrc from "./asset/play.png";
import waterActiveSrc from "./asset/water-active.png";
import waterSrc from "./asset/water.png";
import woodActiveSrc from "./asset/wood-active.png";
import woodSrc from "./asset/wood.png";
import type {FiveElement} from "./type";

export const PAGE_TITLE = "能量破局 - 五行調理";

export const PAGE_HEADING = "善用五行，破解困局，重建健康";

export const LYRICS_LINE_1 = "能量隨心發，破困解局人。";

export const LYRICS_LINE_2 = "我手即我心，我心可落針，";

export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=85264999199";

export const ADDRESS_LINE_1 = "地址：荔枝角長沙灣青山道 489-491 號";

export const ADDRESS_LINE_2 = "香港工業中心 A 座 904 室";

export const PHONE_LINE = "📞 電話：6499 9199";

export const PLAY_SRC = playSrc;

export const PLAY_ACTIVE_SRC = playActiveSrc;

export const DOCTOR_SRC = doctorSrc;

export const APPOINTMENT_SRC = appointmentSrc;

export const APPOINTMENT_ACTIVE_SRC = appointmentActiveSrc;

export const FIVE_ELEMENTS: FiveElement[] = [
    {
        id: "wood",
        angle: 0,
        href: "http://www.hkwholeness.com/木-全治氣針治療理論/",
        label: "木",
        darkSrc: woodSrc,
        activeSrc: woodActiveSrc,
    },
    {
        id: "fire",
        angle: 72,
        href: "http://www.hkwholeness.com/火-善用五行破解人生逆境大論/",
        label: "火",
        darkSrc: fireSrc,
        activeSrc: fireActiveSrc,
    },
    {
        id: "earth",
        angle: 144,
        href: "http://www.hkwholeness.com/土-真實見證・聯絡我們/",
        label: "土",
        darkSrc: earthSrc,
        activeSrc: earthActiveSrc,
    },
    {
        id: "metal",
        angle: 216,
        href: "http://www.hkwholeness.com/金-收費標準・專業認證/",
        label: "金",
        darkSrc: metalSrc,
        activeSrc: metalActiveSrc,
    },
    {
        id: "water",
        angle: 288,
        href: "http://www.hkwholeness.com/水-治療教學・慈善施醫/",
        label: "水",
        darkSrc: waterSrc,
        activeSrc: waterActiveSrc,
    },
];
