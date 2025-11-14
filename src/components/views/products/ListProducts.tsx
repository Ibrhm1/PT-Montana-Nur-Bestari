import { motion } from "motion/react";
import { useState } from "react";
import CardProduct from "~/components/common/CardProduct";
import EmptyProduct from "~/components/common/EmptyProduct";
import data from "~/data/products.json";
import { ProductsType } from "~/types/product";
import DialogDetailProduct from "./DialogDetailProduct";

export default function ListProducts() {
  const [selectedProductId, setSelectedProductId] = useState<number>(0);
  const [openDialogDetailProduct, setOpenDialogDetailProduct] =
    useState<boolean>(false);

  return (
    <main className="px-2 py-20 md:px-5 lg:px-10">
      <header className="mb-8 space-y-2">
        <motion.h1
          className="text-3xl font-normal"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          Product List
        </motion.h1>

        <motion.p
          className="max-w-2xl text-gray-600"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Browse through our extensive collection of products, carefully curated
          to meet your needs and preferences.
        </motion.p>
      </header>

      <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {Array.isArray(data)
          ? data.map((item: ProductsType) => (
              <motion.div
                key={item.product_id}
                animate={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.6,
                  delay: (item.product_id as number) * 0.2,
                }}
              >
                <CardProduct
                  products={item}
                  showButton
                  setOpenDialogDetailProduct={setOpenDialogDetailProduct}
                  setSelectedProductId={setSelectedProductId}
                />
              </motion.div>
            ))
          : null}
      </section>

      {/* empty product component if data is empty */}
      <EmptyProduct
        data={data}
        description="No product has been added yet."
        title="Product list is empty."
      />

      {/* dialog detail product component if product id is selected */}
      <DialogDetailProduct
        selectedProductId={selectedProductId}
        openDialogDetailProduct={openDialogDetailProduct}
        setOpenChangeDialogDetailProduct={setOpenDialogDetailProduct}
      />
    </main>
  );
}
