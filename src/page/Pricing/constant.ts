import Cert1Image from "./asset/cert1-nutrition-master.jpg";
import Cert2Image from "./asset/cert2-food-nutrition-science.jpg";
import Cert3Image from "./asset/cert3-natural-medicine.jpg";
import Cert4Image from "./asset/cert4-huatuo-doctor.jpg";
import Cert5Image from "./asset/cert5-tui-na-association.jpg";
import IllustrationImage from "./asset/pricing-illustration.png";
import MetalImage from "./asset/metal.png";
import type {Certificate, CertificateImage, PriceRow} from "./type";

export const WATERMARK_SRC = MetalImage;

export const ILLUSTRATION_SRC = IllustrationImage;

export const PRICE_ROWS: PriceRow[] = [
    {item: "檢查費", fee: "$300", note: "包括：目測及觸診"},
    {item: "X-Ray 照片", fee: "$380", note: "上半身 / 下半身"},
    {item: "氣針療程", fee: "$1,000", suffix: "/次", note: "每次治療 9 針"},
];

export const CERTIFICATES: Certificate[] = [
    {
        num: "[1]",
        regCode: "(Nutrition Society UK: 00802894)",
        title: "英國營養學碩士",
        after: "The University of Sheffield — Master of Medical Science in Human Nutrition",
    },
    {
        num: "[2]",
        title: "食物及營養科學學士",
        after: "South Bank University London — Bachelor of Science",
    },
    {
        num: "[3]",
        regCode: "(Reg. No: 1269, DNM)",
        title: "世界自然療法醫生協會執業委員",
        after: "World Organization of Natural Medicine — Doctor of Natural Medicine",
    },
    {
        num: "[4]",
        title: "中醫醫學博士(華陀中醫學院)",
        after: "International Institute of Huatuo Traditional Chinese Medicine",
    },
    {
        num: "[5]",
        title: "中醫物理治療文憑",
        after: "北京中醫藥大學",
    },
    {
        num: "[6]",
        title: "國家認可高級按摩師",
        after: "國家勞動局",
    },
    {
        num: "[7]",
        title: "香港推拿理療專業人員總會",
        after: "永久會員",
    },
];

export const CERTIFICATE_IMAGES: CertificateImage[] = [
    {
        src: Cert1Image,
        alt: "[1] 英國營養學碩士",
        label: "[1] 英國營養學碩士",
        code: "(UK Reg: 00802894)",
    },
    {
        src: Cert2Image,
        alt: "[2] 食物及營養科學學士",
        label: "[2] 食物及營養科學學士",
    },
    {
        src: Cert3Image,
        alt: "[3] 世界自然療法醫生協會執業委員",
        label: "[3] 世界自然療法醫生協會",
        code: "(Reg. No: 1269, DNM)",
    },
    {
        src: Cert4Image,
        alt: "[4] 中醫醫學博士(華陀中醫學院)",
        label: "[4] 中醫醫學博士(華陀中醫學院)",
    },
    {
        src: Cert5Image,
        alt: "[5] 香港推拿理療專業人員總會永久會員",
        label: "[5] 香港推拿理療專業人員總會",
    },
];
