import Image from "next/image";
import Link from "next/link";
import { LIST_CONTACT_CONSTANT } from "~/constants/ListContactConstant";
import { LIST_IMAGE_CONSTANT } from "~/constants/ListImageConstant";
import listProducts from "~/data/products.json";
import { Separator } from "../ui/separator";

export default function Footer() {
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
              width={60}
              height={60}
              className="aspect-square rounded-xl object-cover"
            />

            <h1 className="text-lg lg:text-xl">PT Montana Nur Bestari</h1>
          </div>

          <p className="max-w-3xl text-sm text-gray-500 transition-colors duration-300 hover:text-white active:text-white lg:text-base">
            We are specializes in the sustainable sourcing and supply of premium
            quality banana leaves, offering natural and eco friendly solution
            for the food and packaging industries.
          </p>
        </div>

        <div className="space-y-3" aria-label="list-products">
          <h1 className="text-lg lg:text-xl">Products</h1>

          <div className="space-y-2">
            {Array.isArray(listProducts) &&
              listProducts.map((product) => (
                <p
                  key={product.product_id}
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-white active:text-white lg:text-base"
                >
                  {product.name_product}
                </p>
              ))}
          </div>
        </div>

        <div className="space-y-3" aria-label="contact-info">
          <h1 className="text-lg lg:text-xl">Contact</h1>

          <div className="space-y-2">
            {Array.isArray(LIST_CONTACT_CONSTANT) &&
              LIST_CONTACT_CONSTANT.map((contact, index) => (
                <div
                  data-slot="contact-info"
                  key={index}
                  className="flex items-center gap-2 text-gray-500 transition-colors duration-300 hover:text-white active:text-white"
                >
                  <contact.icon size={16} />

                  <Link
                    href={contact?.href || " "}
                    target="_blank"
                    className="text-sm lg:text-base"
                  >
                    {contact.info}
                  </Link>
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
