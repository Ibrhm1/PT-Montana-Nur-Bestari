import { Mail, MapPinIcon, Phone } from "lucide-react";
import { ElementType } from "react";

type ContactInfoType = {
  icon: ElementType;
  info: string;
  href?: string;
  detailInfo?: string[];
};

export const LIST_CONTACT_CONSTANT: ContactInfoType[] = [
  {
    icon: MapPinIcon,
    info: "Bekasi, West Java, Indonesia",
    detailInfo: [
      "Pondok Ungu Permai Sektor 5, Blok 5 No.5",
      "Bahagia, Babelan - Bekasi",
      "West Java - Indonesia",
    ],
  },
  {
    icon: Phone,
    info: "",
    href: "",
  },
  {
    icon: Mail,
    info: "",
    href: "",
  },
];
