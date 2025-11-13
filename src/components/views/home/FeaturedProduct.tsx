import { motion, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty";
import { LIST_IMAGE_CONSTANT } from "~/constants/ListImageConstant";
import { NAVBAR_MENU_LISTS } from "~/constants/NavbarConstant";
import data from "~/data/products.json";
import { ProductsType } from "~/types/product";

export default function FeaturedProduct() {
  const { scrollYProgress } = useScroll({
    offset: ["start end", "center end"],
  });

  return (
    <main className="px-2 py-10 md:px-5 lg:px-10">
      <motion.header
        className="mb-5 w-full space-y-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-2xl font-normal md:text-3xl">Featured Product </h1>
        <p className="text-xs text-gray-400 md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          necessitatibus?
        </p>
      </motion.header>

      <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {Array.isArray(data) ? (
          data.map((item: ProductsType) => (
            <motion.div
              key={item.product_id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: item.product_id * 0.2 }}
              style={{ scale: scrollYProgress }}
            >
              <Card className="bg-card h-full -space-y-3 border-0 py-4 shadow-2xl">
                <CardHeader className="px-4">
                  <Image
                    src={item.image_product}
                    alt={item.name_product}
                    width={200}
                    height={400}
                    className="h-80 w-full rounded-lg object-cover"
                  />
                </CardHeader>
                <CardContent className="px-4">
                  <h2 className="text-xl">{item.name_product}</h2>
                  <p className="text-muted-foreground line-clamp-3 text-xs lg:text-sm">
                    {item.description_product || "No description available."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>

      {Array.isArray(data) && data.length === 0 && (
        <Empty className="border- border shadow-2xl">
          <EmptyHeader>
            <EmptyMedia variant="default">
              <Image
                src={LIST_IMAGE_CONSTANT.noData.url}
                alt={LIST_IMAGE_CONSTANT.noData.name}
                width={150}
                height={150}
              />
            </EmptyMedia>
            <EmptyTitle className="capitalize">
              featured products are not yet available
            </EmptyTitle>
            <EmptyDescription>No product has been added yet.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      )}

      <motion.footer
        className="mt-5 w-full text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Button variant="default" asChild size="lg">
          <Link href={NAVBAR_MENU_LISTS[1].href}>Explorer Products</Link>
        </Button>
      </motion.footer>
    </main>
  );
}
