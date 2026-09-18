import {FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaWhatsapp} from "react-icons/fa";
import type {IconType} from "react-icons";

export interface ContactLink {
    id: string;
    label: string;
    href: string;
    icon: IconType;
    newTab: boolean;
}

export const CONTACT_LINKS: ContactLink[] = [
    {id: "phone", label: "立即致電全治", href: "tel:27801270", icon: FaPhoneAlt, newTab: false},
    {id: "whatsapp", label: "全治 WhatsApp", href: "https://api.whatsapp.com/send?phone=85264999199", icon: FaWhatsapp, newTab: true},
    {id: "facebook", label: "全治 Facebook Page", href: "https://www.facebook.com/hkwholen/", icon: FaFacebookF, newTab: true},
    {id: "instagram", label: "全治 Instagram", href: "https://www.instagram.com/hk_wholeness/", icon: FaInstagram, newTab: true},
    {id: "email", label: "全治 Email", href: "mailto:hkwholeness@gmail.com", icon: FaEnvelope, newTab: false},
];
