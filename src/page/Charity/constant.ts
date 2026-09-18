import Clinic0531Image from "./asset/clinic-2025-05-31.webp";
import Clinic0809Image from "./asset/clinic-2026-08-09.webp";
import Clinic0823Image from "./asset/clinic-2026-08-23.webp";
import ClinicMapImage from "./asset/clinic-map.webp";
import ClinicVideo1 from "./asset/clinic-video-1.mp4";
import ClinicVideo2 from "./asset/clinic-video-2.mp4";
import TeachingCaritasImage from "./asset/teaching-caritas.webp";
import TeachingUnionImage from "./asset/teaching-union.webp";
import TianyiImage from "./asset/tianyi-illustration.webp";
import WaterImage from "./asset/water.webp";
import type {ClinicSession, TeachingCard, TianyiRow} from "./type";

export const WATERMARK_SRC = WaterImage;

export const TEACHING_CARDS: TeachingCard[] = [
    {
        image: TeachingUnionImage,
        alt: "工聯會教學",
        tag: "專業課程",
        title: "香港工會聯合會（工聯會）專題教學",
        desc: ["定期獲邀於工聯會開辦脊椎保健、氣針經絡與痛症預防等實用課程，結合理論與現場示範，推廣自主健康管理概念。"],
    },
    {
        image: TeachingCaritasImage,
        alt: "明愛教學",
        tag: "社區工作坊",
        title: "明愛長者與照顧者保健工作坊",
        desc: [
            "專為長者與照顧者設計，涵蓋",
            {strong: "扶抱不傷腰力學"},
            "、",
            {strong: "穴位按壓（如合谷、足三里）"},
            "及",
            {strong: "椅子/牆壁自助運動"},
            "等實用技巧，並透過情景模擬實習與動作指導，全面提升居家痛症管理與照護安全。",
        ],
    },
];

export const CLINIC_SESSIONS: ClinicSession[] = [
    {
        image: Clinic0531Image,
        alt: "5月31日義診",
        date: "5月31日 (日)",
        location: "荔枝角長沙灣道匯豐銀行外",
    },
    {
        image: Clinic0809Image,
        alt: "8月9日義診",
        date: "8月9日 (日)",
        location: "幸福老人院",
    },
    {
        image: Clinic0823Image,
        alt: "8月23日義診",
        date: "8月23日 (日)",
        location: "荔枝角長沙灣道匯豐銀行外",
    },
];

export const CLINIC_MAP_SRC = ClinicMapImage;

export const CLINIC_VIDEOS = [ClinicVideo1, ClinicVideo2];

export const TIANYI_IMAGE_SRC = TianyiImage;

export const TIANYI_ROWS: TianyiRow[] = [
    {item: "檢查費", fee: "$0", note: "僅提供目測經絡堵塞檢查"},
    {item: "氣針治療", fee: "$500", note: "首針免費，其後每針 $100（基本療程：6 針起）"},
];
