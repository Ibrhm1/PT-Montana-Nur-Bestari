import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import EmptyProduct from "~/components/common/EmptyProduct";
import { Button } from "~/components/ui/button";
import { NAVBAR_MENU_LISTS } from "~/constants/NavbarConstant";
import data from "~/data/products.json";

export default function FeaturedProduct() {
  return (
    <main className="px-2 py-10 md:px-5 lg:px-10">
      {Array.isArray(data) &&
        data.slice(0, 1).map((item) => (
          <section
            key={item.product_id}
            className="flex flex-col items-start justify-center md:flex-row md:gap-10"
          >
            <motion.div
              whileInView={{
                x: [-50, 0],
                opacity: [0, 1],
                transition: { duration: 0.5 },
              }}
              className="mx-auto md:m-0"
            >
              <Image
                src={item.image_product}
                alt={item.name_product}
                width={320}
                height={200}
                className="mx-auto rounded-xl"
                loading="lazy"
              />
            </motion.div>

            <div className="space-y-2 py-5 md:w-1/2 md:space-y-3 md:py-10 lg:space-y-4">
              <motion.p
                whileInView={{
                  y: [-20, 0],
                  opacity: [0, 1],
                  transition: { duration: 0.4, delay: 0.3 },
                }}
                className="text-center text-xl font-normal md:text-start"
              >
                Featured Product
              </motion.p>

              <motion.h1
                whileInView={{
                  y: [-20, 0],
                  opacity: [0, 1],
                  transition: { duration: 0.4, delay: 0.4 },
                }}
                className="text-3xl lg:text-4xl"
              >
                {item.name_product}
              </motion.h1>

              <motion.p
                whileInView={{
                  y: [-20, 0],
                  opacity: [0, 1],
                  transition: { duration: 0.4, delay: 0.5 },
                }}
                className="text-justify text-sm text-gray-500 lg:text-base"
              >
                {item?.description}
              </motion.p>

              <motion.footer
                whileInView={{
                  y: [-20, 0],
                  opacity: [0, 1],
                  transition: { duration: 0.4, delay: 0.6 },
                }}
                className="mt-5 text-center md:text-start"
              >
                <Button asChild variant="secondary">
                  <Link href={NAVBAR_MENU_LISTS[1].href}>
                    Explorer More Products
                  </Link>
                </Button>
              </motion.footer>
            </div>
          </section>
        ))}

      <EmptyProduct
        data={data}
        title="featured products are not yet available."
        description="No product has been added yet."
      />
    </main>
  );
}
