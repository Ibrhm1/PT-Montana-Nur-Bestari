import { Mail, MapPinIcon, Phone } from "lucide-react";
import { ElementType } from "react";

type ContactInfoType = {
  icon: ElementType;
  info: string;
  href?: string;
};

export const LIST_CONTACT_CONSTANT: ContactInfoType[] = [
  {
    icon: MapPinIcon,
    info: "Bekasi, West Java, Indonesia",
    href: "",
  },
  {
    icon: Phone,
    info: "+62 859 5809 6622",
    href: "https://wa.me/6287881550169",
  },
  {
    icon: Mail,
    info: "montananurbestari@gmail.com",
    href: "mailto:montananurbestari@gmail.com",
  },
];
