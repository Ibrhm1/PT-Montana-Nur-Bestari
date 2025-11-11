import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function BannerHome() {
  return (
    <main className="w-full py-5 md:py-10">
      <div className="flex w-full justify-center rounded-lg bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat py-40 shadow-lg">
        <Card className="bg-sidebar m-2 w-full text-center opacity-95 shadow-2xl md:m-0 md:w-2/3">
          <CardContent className="w-full space-y-2">
            <div className="space-y-2">
              <p className="text-sm md:text-base">Fresh. Natural. Reliable.</p>
              <h1 className="text-xl font-bold uppercase lg:text-3xl">
                Supplying Fresh Banana, Cassava, Moringa & Papaya Leaves
              </h1>
              <p className="text-base">
                Sustainably sourced, carefully packed, and delivered with trust.
              </p>
            </div>

            <div className="mt-3 flex w-full flex-col items-center justify-center gap-3 md:flex-row">
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
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
