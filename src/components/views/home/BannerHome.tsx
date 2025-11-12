import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function BannerHome() {
  return (
    <main className="w-full">
      <div className="flex h-[90vh] w-full items-center justify-center bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat shadow-lg">
        <Card className="bg-sidebar m-2 w-full py-10 text-center opacity-90 shadow-2xl md:m-0 md:w-2/4">
          <CardContent className="w-full md:space-y-4">
            <div className="space-y-2">
              <h1 className="text-xl font-bold uppercase lg:text-2xl">
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
