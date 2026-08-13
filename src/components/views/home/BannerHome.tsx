import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function BannerHome() {
  return (
    <main className="flex h-[90vh] w-full items-center justify-center bg-[url('/banner.jpeg')] bg-cover bg-center bg-no-repeat shadow-lg">
      <Card className="bg-sidebar m-2 w-full py-10 text-center opacity-90 shadow-2xl md:m-0 md:w-2/4">
        <CardContent className="w-full md:space-y-4">
          <div className="space-y-2">
            <motion.h1
              className="text-lg font-bold uppercase lg:text-xl"
              animate={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              Supplying fresh banana leaves, cassava leaves, Moringa leaves,
              papaya leaves, and banana stem
            </motion.h1>

            <motion.p
              className="text-base"
              animate={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Sustainably sourced, carefully packed, and delivered with trust.
            </motion.p>
          </div>

          <motion.div
            className="mt-3 flex w-full flex-col items-center justify-center gap-3 md:flex-row"
            animate={{ y: [20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              className="w-full font-semibold md:w-fit"
              size="lg"
              asChild
              variant="default"
            >
              <Link href="/products">Explore Products</Link>
            </Button>

            <Button
              className="w-full border font-semibold md:w-fit"
              size="lg"
              asChild
              variant="ghost"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </main>
  );
}
