import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { LIST_IMAGE_CONSTANT } from "~/constants/ListImageConstant";
import { NAVBAR_MENU_LISTS } from "~/constants/NavbarConstant";

export default function FeaturedProduct() {
  return (
    <main className="px-2 py-10 md:px-5 lg:px-10">
      <header className="mb-5 w-full space-y-2 text-center">
        <h1 className="text-2xl font-normal md:text-3xl">Featured Product </h1>
        <p className="text-xs text-gray-400 md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          necessitatibus?
        </p>
      </header>
      <section className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, productIndex) => (
          <Card
            key={productIndex}
            className="bg-card -space-y-3 border-0 shadow-2xl"
          >
            <CardHeader>
              <Image
                src={LIST_IMAGE_CONSTANT.daunKelor.url}
                alt={LIST_IMAGE_CONSTANT.daunKelor.name}
                width={400}
                height={400}
                className="aspect-video h-40 w-full rounded-lg object-cover"
              />
            </CardHeader>
            <CardContent>
              <h2 className="text-xl">Product {productIndex + 1}</h2>
              <p className="text-muted-foreground text-xs lg:text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
                distinctio.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
      <footer className="mt-5 w-full text-center">
        <Button variant="default" asChild size="lg">
          <Link href={NAVBAR_MENU_LISTS[1].href}>Explorer Products</Link>
        </Button>
      </footer>
    </main>
  );
}
