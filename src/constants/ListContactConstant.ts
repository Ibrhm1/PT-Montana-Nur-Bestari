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
<<<<<<< HEAD
    info: "",
    href: "",
  },
  {
    icon: Mail,
    info: "",
    href: "",
=======
    info: "+62 859 5809 6623",
    href: "https://wa.me/6285958096623",
  },
  {
    icon: Mail,
    info: "montananurbestari@gmail.com",
    href: "mailto:montananurbestari@gmail.com",
>>>>>>> 388f317ad9400cb7eb786188c4f19dd1ea27164c
  },
];
