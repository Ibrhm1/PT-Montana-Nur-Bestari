import { motion, useScroll } from "motion/react";
import Link from "next/link";
import CardProduct from "~/components/common/CardProduct";
import EmptyProduct from "~/components/common/EmptyProduct";
import { Button } from "~/components/ui/button";
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
        whileInView={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-2xl font-normal md:text-3xl">Featured Product</h1>
      </motion.header>

      <section className="mx-auto w-full max-w-96 md:w-80">
        {Array.isArray(data)
          ? data.slice(0, 1).map((item: ProductsType) => (
              <motion.div
                key={item?.product_id}
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                transition={{
                  duration: 0.6,
                  delay: (item.product_id as number) * 0.2,
                }}
                style={{ scale: scrollYProgress }}
              >
                <CardProduct products={item} />
              </motion.div>
            ))
          : null}
      </section>

      <EmptyProduct
        data={data}
        title="featured products are not yet available."
        description="No product has been added yet."
      />

      <motion.footer
        className="mt-5 text-center"
        whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 0.2 }}
      >
        <Button variant="default" asChild size="lg">
          <Link href={NAVBAR_MENU_LISTS[1].href}>Explorer Products</Link>
        </Button>
      </motion.footer>
    </main>
  );
}
