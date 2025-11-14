import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import EmptyProduct from "~/components/common/EmptyProduct";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import data from "~/data/products.json";
import { ProductsType } from "~/types/product";
import DialogDetailProduct from "./DialogDetailProduct";

export default function ListProducts() {
  const [selectedProductId, setSelectedProductId] = useState<number>(0);
  const [openDialogDetailProduct, setOpenDialogDetailProduct] =
    useState<boolean>(false);

  return (
    <main className="px-2 py-20 md:px-5 lg:px-10">
      <header className="mb-10 space-y-2">
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A facere,
          cupiditate quae vel suscipit expedita asperiores eius id sapiente
          laudantium.
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
                <Card className="bg-card h-full -space-y-3 border-0 py-4 shadow-2xl">
                  <CardHeader className="px-4">
                    <Image
                      src={item.image_product as string}
                      alt={item.name_product as string}
                      width={200}
                      height={400}
                      className="h-96 w-full rounded-lg object-center"
                      loading="lazy"
                    />
                  </CardHeader>

                  <CardContent className="h-24 px-4">
                    <h2 className="text-xl">{item.name_product}</h2>

                    <p className="text-muted-foreground line-clamp-3 text-xs lg:text-sm">
                      {item.description_product || "No description available."}
                    </p>
                  </CardContent>

                  <CardFooter className="px-4">
                    <Button
                      className="w-full"
                      variant="default"
                      onClick={() => {
                        setSelectedProductId(item.product_id as number);
                        setOpenDialogDetailProduct(true);
                      }}
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
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
