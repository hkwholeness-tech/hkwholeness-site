import Case1After from "./asset/case1-after.jpg";
import Case1After2nd from "./asset/case1-after-2nd.jpg";
import Case1Before from "./asset/case1-before.jpg";
import Case2After from "./asset/case2-after.jpg";
import Case2Before from "./asset/case2-before.jpg";
import Case3After from "./asset/case3-after.jpg";
import Case3Before from "./asset/case3-before.jpg";
import Case4After from "./asset/case4-after.jpg";
import Case4Before from "./asset/case4-before.jpg";
import Case5After from "./asset/case5-after.jpg";
import Case5Before from "./asset/case5-before.jpg";
import Case6After from "./asset/case6-after.jpg";
import Case6Before from "./asset/case6-before.jpg";
import Case7After from "./asset/case7-after.jpg";
import Case7Before from "./asset/case7-before.jpg";
import Case8After from "./asset/case8-after.jpg";
import Case8Before from "./asset/case8-before.jpg";
import EarthImage from "./asset/earth.webp";
import type {ScheduleRow, VideoCase, XrayCase} from "./type";

export const WATERMARK_SRC = EarthImage;

export const MAP_EMBED_SRC =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.490715978716!2d114.1441551!3d22.3375561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404075501761eb7%3A0x55ad668dd7084f54!2z44CSNDg5LTQ5MSDpnZLmsIHpgZM!5e0!3m2!1szh-TW!2shk!4v1710000000000!5m2!1szh-TW!2shk";

export const WHATSAPP_URL = "https://wa.me/85264999199";

export const EMAIL = "hkwholeness@gmail.com";

export const SCHEDULE: ScheduleRow[] = [
    {day: "星期一", morning: "11:00 – 14:00", afternoon: "16:00 – 20:30"},
    {day: "星期二", morning: "11:00 – 14:00", afternoon: "16:00 – 20:30"},
    {day: "星期三"},
    {day: "星期四", morning: "11:00 – 14:00", afternoon: "16:00 – 20:30"},
    {day: "星期五", afternoon: "16:00 – 20:30"},
    {day: "星期六", morning: "11:00 – 14:00", afternoon: "16:00 – 18:30"},
];

export const REMOTE_CASES: VideoCase[] = [
    {
        tag: "遙距治癒",
        title: "港人日本旅遊，頸痛到嘔",
        videoId: "brTqwU4H5bA",
        details: [
            {label: "相關病症", value: "因頸椎錯位，阻礙供血，導致痛到嘔"},
            {label: "客戶姓名", value: "鄭小姐大嫂"},
            {label: "職業", value: "文員"},
        ],
        date: "31/3/2025",
    },
    {
        tag: "緊急調理",
        title: "因服藥過量進院，導致走路不穩",
        videoId: "87xUd6tQlCc",
        details: [
            {label: "相關病症", value: "因過度服藥，導致發聲問題及走路不穩"},
            {label: "客戶姓名", value: "徐小姐媽媽"},
            {label: "職業", value: "家庭主婦"},
        ],
        date: "7/7/2025",
    },
    {
        tag: "海外遙距",
        title: "英國心臟病手術後中風，失去意識",
        videoId: "3NsdOjRUpnc",
        details: [
            {label: "相關病症", value: "英國病人手術後失去意識，甦醒後失去自主活動能力"},
            {label: "客戶姓名", value: "Mable 女婿"},
        ],
        date: "20/8/2025",
    },
];

export const SPINE_CASES: VideoCase[] = [
    {
        tag: "脊椎矯正",
        title: "7旬女士飽受腳痛困擾，行路需用拐杖",
        videoId: "yu7Icpheav0",
        details: [
            {label: "相關病症", value: "中西醫治療無果，行路不便，神經線痛"},
            {label: "改善狀況", value: "氣針治療數次後，已可不用拐杖自主行走"},
        ],
    },
    {
        tag: "散瘀調理",
        title: "老人跌親後撞到後尾枕，氣針散瘀",
        videoId: "iVTAxLrNqKA",
        details: [
            {label: "相關病症", value: "跌倒撞傷頭部後尾枕，腫痛不適"},
            {label: "改善狀況", value: "經數次氣針治療促進血氣流通，快速散瘀止痛"},
        ],
    },
    {
        tag: "兒童復位",
        title: "4歲女童跌親後走路不穩、無法平衡",
        videoId: "aj1NMG4r4Xs",
        details: [
            {label: "相關病症", value: "跌倒後無法正常行走，容易跌倒"},
            {label: "改善狀況", value: "一次治療即見效，數次療程後完全恢復平衡"},
        ],
    },
    {
        tag: "名師見證",
        title: "星級歌唱學府創辦人用氣針治療2次即刻見效",
        videoId: "5iE55DCfjTI",
        details: [
            {label: "相關病症", value: "多年舊患不適"},
            {label: "改善狀況", value: "體驗氣流帶動，放鬆頭頸，對教學與講座發揮有極大幫助"},
        ],
    },
    {
        tag: "真實個案",
        title: "好轉個案分享 — Mr Yu",
        videoId: "WY5ufoLiyMQ",
        details: [{label: "經驗分享", value: "親身體驗全治護脊療程後的顯著改善歷程"}],
    },
    {
        tag: "脊椎矯正",
        title: "好轉個案分享 — 脊椎矯正與調理歷程",
        videoId: "s9UlHLoRwl8",
        details: [{label: "經驗分享", value: "親身體驗脊椎矯正療程，改善長期體態與疼痛問題"}],
    },
];

export const XRAY_CASES: XrayCase[] = [
    {
        badge: "Case 1",
        patient: "陳小姐 (45歲)",
        summary: "頸部活動不自如，特別是向後仰時最辛苦，容易頭痛，每次維持數日。",
        stages: [
            {
                image: Case1Before,
                label: "治療前：",
                desc: "頸椎1至7節均呈現過直，頸椎下段出現雙重錯位，肌肉處於緊張狀態。",
            },
            {
                image: Case1After,
                label: "治療後：",
                desc: "頸椎出現初步改善，頸椎弧度與頸椎下段錯位完全消失，患者頭痛亦消失，頸椎隨意作後仰活動。",
            },
            {
                image: Case1After2nd,
                label: "第二療程後：",
                desc: "頸椎弧度已基本恢復正常狀態，患者再不感到頸部不適，並開始接受腰椎的治療。(患者初期是同時有頸椎及腰椎問題)。",
            },
        ],
    },
    {
        badge: "Case 2",
        patient: "黃女士(41歲)",
        summary: "起床後經常出現雙手麻痺無力情況，經過一般跌打敷藥多次後，依然無效。",
        stages: [
            {image: Case2Before, label: "治療前：", desc: "頸部喪失先天弧度。"},
            {
                image: Case2After,
                label: "治療後：",
                desc: "經16次治療後，頸部明顯恢復先天弧度，雖然仍未完全康復，但手痺的情況已消失。",
            },
        ],
    },
    {
        badge: "Case 3",
        patient: "羅小姐(27歲)",
        summary: "長期頭痛影響睡眠，頸部的肌肉僵硬，引致羅小姐經常疲倦不堪。",
        stages: [
            {
                image: Case3Before,
                label: "治療前：",
                desc: "頸椎第1節跟頭顱的連接位出現左右不平衡，右邊正常，左邊嚴重縮窄，有骨關節粘合傾向，同時第2節頸椎出現右轉錯位。",
            },
            {
                image: Case3After,
                label: "治療後：",
                desc: "在治療9次後，羅小姐關節問題完全改善，頭痛及失眠的情況明顯減輕。但是因為仍然有其他關節問題，導致肌肉僵硬，所以仍需作進一步治療。",
            },
        ],
    },
    {
        badge: "Case 4",
        patient: "鄺小朋友(8歲)",
        summary: "因頭部不適，影響讀書集中力，並且容易疲倦及作病，觸診時頸部有嚴重壓痛，不能受壓。",
        stages: [
            {
                image: Case4Before,
                label: "治療前：",
                desc: "頸椎變直，加上頸椎上段第2及第3節出現前後滑脫，極可能迫壓到脊柱神經，若情況了發展下去，可能引致全身癱瘓。",
            },
            {
                image: Case4After,
                label: "治療後：",
                desc: "幸好患者年幼，筋骨柔軟，治療進度理想，頸椎恢復基本弧度，並且頸椎的前後滑脫亦有改善，這改變在西醫角度是全無可能。",
            },
        ],
    },
    {
        badge: "Case 5",
        patient: "吳小姐( 41歲)",
        summary: "因長時間的文書工作關係，頸及兩邊肩膊劇痛, 頸部後仰時特別辛苦。",
        stages: [
            {
                image: Case5Before,
                label: "治療前：",
                desc: "頸椎呈現僵直，中段頸椎呈反弧度，頸及肩膀肌肉十分僵硬。",
            },
            {
                image: Case5After,
                label: "治療後：",
                desc: "頸椎弧度明顯改善，反弧部位正常化，頸肩肌肉較柔軟，患處痛楚大幅減輕。",
            },
        ],
    },
    {
        badge: "Case 6",
        patient: "陳小姐( 31歲)",
        summary: "主訴頸痛及肌肉僵硬，但患者對按壓痛楚的神經感覺遲鈍。",
        stages: [
            {
                image: Case6Before,
                label: "治療前：",
                desc: "雖然主訴是頸部，但胸椎有較嚴重右側彎及胸椎過正，直接導致頸椎異常，引致頸痛。",
            },
            {
                image: Case6After,
                label: "治療後：",
                desc: "中上段胸椎側彎明顯改善，頸痛大幅減少, 患者對按壓重新有痛楚感，神經重新活躍，但仍雖接受鞏固胸椎治療。",
            },
        ],
    },
    {
        badge: "Case 7",
        patient: "Brandon(28歲)",
        summary: "主訴頸肩及上背疼痛僵硬，曾在美國接受多年脊椎神經科醫生治療，但效果並不顯著。",
        stages: [
            {
                image: Case7Before,
                label: "治療前：",
                desc: "右邊頸椎1及2關節間隙明顯收窄及軟組織黏連，導致頸動脈供血致腦部受阻及頸部活動幅度下降，並且兩肩肌肉僵硬。",
            },
            {
                image: Case7After,
                label: "治療後：",
                desc: "在接受一個星期的密集治療後(因患者只短暫停留香港一個星期)，頸椎1及2關節間隙明顯增加，深層軟組織黏連已鬆開，活動幅度及肌肉僵硬大幅改善。患者在一年後覆診時仍然保持理想狀態。",
            },
        ],
    },
    {
        badge: "Case 8",
        patient: "陳女士(34歲)",
        summary: "體格強壯，但患有腰痛多年，並於一次運動創傷後，整個身體向右傾斜，以致走路失衡，並產生反覆劇痛。",
        stages: [
            {
                image: Case8Before,
                label: "治療前：",
                desc: "X-Ray 診斷腰椎呈現中度至重度的脊椎側彎，盤骨向前旋轉錯位，嚴重影響走路能力。",
            },
            {
                image: Case8After,
                label: "治療後：",
                desc: "經過8次治療後，脊柱側彎的情況有明顯改善，盤骨恢復平衡的位置，基本上可以判斷為完全康復，但仍建議每月1次的鞏固治療。",
            },
        ],
    },
];
