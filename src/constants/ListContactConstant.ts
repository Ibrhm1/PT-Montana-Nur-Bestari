import { Mail, MapPinIcon, Phone } from "lucide-react";
import { ElementType } from "react";

type ContactInfoType = {
  icon: ElementType;
  info: string;
  value?: string;
};

export const LIST_CONTACT_CONSTANT: ContactInfoType[] = [
  {
    icon: MapPinIcon,
    info: "Bekasi, West Java, Indonesia",
  },
  {
    icon: Phone,
    info: "+62 859 5809 6622",
    value: "6287881550169",
  },
  {
    icon: Mail,
    info: "montananurbestari@gmail.com",
  },
];
