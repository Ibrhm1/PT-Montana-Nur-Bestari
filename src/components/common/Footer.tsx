import { Mail, MapPinIcon, Phone } from "lucide-react";
import Image from "next/image";
import { ElementType } from "react";
import { LIST_IMAGE_CONSTANT } from "~/constants/ListImageConstant";
import { Separator } from "../ui/separator";

type ContactInfoType = {
  icon: ElementType;
  info: string;
};

type ListProductsType = string[];

export default function Footer() {
  const listProducts: ListProductsType = [
    "Product A",
    "Product B",
    "Product C",
    "Product D",
  ];

  const contactInfo: ContactInfoType[] = [
    {
      icon: MapPinIcon,
      info: "Bekasi, West Java, Indonesia",
    },
    {
      icon: Phone,
      info: "+62 859 5809 6622",
    },
    {
      icon: Mail,
      info: "montananurbestari@gmail.com",
    },
  ];

  return (
    <footer
      className="bg-foreground px-2 py-10 text-white md:px-5 md:py-7 lg:px-10"
      aria-label="footer"
    >
      <section className="mb-10 flex flex-col gap-6 md:flex-row md:justify-between md:gap-10 md:space-y-0">
        <div className="space-y-3" aria-label="brand-info">
          <div className="flex items-center gap-2">
            <Image
              src={LIST_IMAGE_CONSTANT.logo.url}
              alt={LIST_IMAGE_CONSTANT.logo.name.split("-")[1]}
              width={50}  
              height={30}
              className="aspect-square object-cover"
            />
            <h1 className="text-lg lg:text-xl">PT Montana Nur Bestari</h1>
          </div>

          <p className="text-sm text-gray-500 transition-colors duration-300 hover:text-white active:text-white lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a
            neque reprehenderit voluptates officiis! Consequuntur!
          </p>
        </div>

        <div className="space-y-3" aria-label="list-products">
          <h1 className="text-lg lg:text-xl">Products</h1>

          <div className="space-y-2">
            {Array.isArray(listProducts) &&
              listProducts.map((product, index) => (
                <p
                  key={index}
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-white active:text-white lg:text-base"
                >
                  {product}
                </p>
              ))}
          </div>
        </div>

        <div className="space-y-3" aria-label="contact-info">
          <h1 className="text-lg lg:text-xl">Contact</h1>

          <div className="space-y-2">
            {Array.isArray(contactInfo) &&
              contactInfo.map((contact, index) => (
                <div
                  data-slot="contact-info"
                  key={index}
                  className="flex items-center gap-2 text-gray-500 transition-colors duration-300 hover:text-white active:text-white"
                >
                  <contact.icon size={16} />
                  <p id="text-contact" className="text-sm lg:text-base">
                    {contact.info}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <Separator orientation="horizontal" className="bg-gray-700" />

      <section>
        <p className="mt-5 text-center text-xs text-gray-500 lg:text-sm">
          &copy; {new Date().getFullYear()} PT Montana Nur Bestari. All rights
          reserved.
        </p>
      </section>
    </footer>
  );
}
