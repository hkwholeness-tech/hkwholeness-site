import AppointmentActiveImage from "./asset/appointment-active.webp";
import AppointmentImage from "./asset/appointment.webp";
import DoctorImage from "./asset/doctor.webp";
import EarthActiveImage from "./asset/earth-active.webp";
import EarthImage from "./asset/earth.webp";
import FireActiveImage from "./asset/fire-active.webp";
import FireImage from "./asset/fire.webp";
import MetalActiveImage from "./asset/metal-active.webp";
import MetalImage from "./asset/metal.webp";
import PlayActiveImage from "./asset/play-active.webp";
import PlayImage from "./asset/play.webp";
import WaterActiveImage from "./asset/water-active.webp";
import WaterImage from "./asset/water.webp";
import WoodActiveImage from "./asset/wood-active.webp";
import WoodImage from "./asset/wood.webp";
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
        href: "/theory",
        label: "木",
        darkSrc: WoodImage,
        activeSrc: WoodActiveImage,
    },
    {
        id: "fire",
        angle: 72,
        href: "/spirit",
        label: "火",
        darkSrc: FireImage,
        activeSrc: FireActiveImage,
    },
    {
        id: "earth",
        angle: 144,
        href: "/contact",
        label: "土",
        darkSrc: EarthImage,
        activeSrc: EarthActiveImage,
    },
    {
        id: "metal",
        angle: 216,
        href: "/pricing",
        label: "金",
        darkSrc: MetalImage,
        activeSrc: MetalActiveImage,
    },
    {
        id: "water",
        angle: 288,
        href: "/charity",
        label: "水",
        darkSrc: WaterImage,
        activeSrc: WaterActiveImage,
    },
];
