import AppointmentActiveImage from "./asset/appointment-active.png";
import AppointmentImage from "./asset/appointment.png";
import DoctorImage from "./asset/doctor.jpg";
import EarthActiveImage from "./asset/earth-active.png";
import EarthImage from "./asset/earth.png";
import FireActiveImage from "./asset/fire-active.png";
import FireImage from "./asset/fire.png";
import MetalActiveImage from "./asset/metal-active.png";
import MetalImage from "./asset/metal.png";
import PlayActiveImage from "./asset/play-active.png";
import PlayImage from "./asset/play.png";
import WaterActiveImage from "./asset/water-active.png";
import WaterImage from "./asset/water.png";
import WoodActiveImage from "./asset/wood-active.png";
import WoodImage from "./asset/wood.png";
import type {FiveElement} from "./type";

export const PAGE_HEADING = "善用五行，破解困局，重建健康";

export const LYRICS_LINE_1 = "能量隨心發，破困解局人。";
export const LYRICS_LINE_2 = "我手即我心，我心可落針，";

export const ADDRESS_LINE_1 = "地址：荔枝角長沙灣青山道 489-491 號";
export const ADDRESS_LINE_2 = "香港工業中心 A 座 904 室";

export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=85264999199";

export const PHONE_LINE = "📞 電話：6499 9199";

export const PLAY_SRC = PlayImage;
export const PLAY_ACTIVE_SRC = PlayActiveImage;
export const DOCTOR_SRC = DoctorImage;
export const APPOINTMENT_SRC = AppointmentImage;
export const APPOINTMENT_ACTIVE_SRC = AppointmentActiveImage;

export const FIVE_ELEMENTS: FiveElement[] = [
    {
        id: "wood",
        angle: 0,
        href: "http://www.hkwholeness.com/木-全治氣針治療理論/",
        label: "木",
        darkSrc: WoodImage,
        activeSrc: WoodActiveImage,
    },
    {
        id: "fire",
        angle: 72,
        href: "http://www.hkwholeness.com/火-善用五行破解人生逆境大論/",
        label: "火",
        darkSrc: FireImage,
        activeSrc: FireActiveImage,
    },
    {
        id: "earth",
        angle: 144,
        href: "http://www.hkwholeness.com/土-真實見證・聯絡我們/",
        label: "土",
        darkSrc: EarthImage,
        activeSrc: EarthActiveImage,
    },
    {
        id: "metal",
        angle: 216,
        href: "http://www.hkwholeness.com/金-收費標準・專業認證/",
        label: "金",
        darkSrc: MetalImage,
        activeSrc: MetalActiveImage,
    },
    {
        id: "water",
        angle: 288,
        href: "http://www.hkwholeness.com/水-治療教學・慈善施醫/",
        label: "水",
        darkSrc: WaterImage,
        activeSrc: WaterActiveImage,
    },
];
