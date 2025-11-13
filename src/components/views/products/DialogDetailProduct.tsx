import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "~/components/ui/dialog";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import { LIST_CONTACT_CONSTANT } from "~/constants/ListContactConstant";
import data from "~/data/products.json";

type DialogDetailProductProps = {
  selectedProductId: number;
  openDialogDetailProduct?: boolean;
  setOpenChangeDialogDetailProduct?: (open: boolean) => void;
};

export default function DialogDetailProduct(props: DialogDetailProductProps) {
  const detailProduct = data.find(
    (item) => item.product_id === props.selectedProductId,
  );

  function formatChat(productName: string): string {
    const chatOrder = `Halo, saya tertarik untuk membeli produk *${productName}*. Apakah produk ini masih tersedia?`;
    const hrefOrder = `${LIST_CONTACT_CONSTANT[1].href}?text=${encodeURIComponent(chatOrder)}`;
    return hrefOrder;
  }

  return (
    <Dialog
      open={props.openDialogDetailProduct}
      onOpenChange={() =>
        props.setOpenChangeDialogDetailProduct &&
        props.setOpenChangeDialogDetailProduct(false)
      }
    >
      <DialogContent
        className="my-2 max-h-screen overflow-y-auto p-4 sm:max-w-[425px]"
        showCloseButton={false}
      >
        <DialogHeader>
          <Image
            src={detailProduct?.image_product as string}
            alt={detailProduct?.name_product || "Product Image"}
            width={200}
            height={400}
            className="h-72 w-full rounded-lg object-center lg:h-96"
          />
        </DialogHeader>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold">
            {detailProduct?.name_product}
          </h2>
          <ScrollArea scrollHideDelay={1000} className="h-28 pr-2">
            <p className="text-muted-foreground text-justify text-sm lg:text-base">
              {detailProduct?.description_product ||
                "No description available."}
            </p>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </section>

        <DialogFooter className="flex-row justify-end">
          <DialogClose asChild>
            <Button variant="destructive">Close</Button>
          </DialogClose>

          <Button asChild>
            <Link
              href={formatChat(detailProduct?.name_product as string)}
              target="_blank"
            >
              Order Now
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
