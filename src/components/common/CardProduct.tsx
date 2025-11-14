import Image from "next/image";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { ProductsType } from "~/types/product";
import { Button } from "../ui/button";

type CardProductType = {
  products: ProductsType;
  showButton?: boolean;
  setSelectedProductId?: (id: number) => void;
  setOpenDialogDetailProduct?: (open: boolean) => void;
};

export default function CardProduct(props: CardProductType) {
  const handleOnClickButton = () => {
    if (!props.setSelectedProductId) return;
    props.setSelectedProductId(props.products.product_id as number);
    props.setOpenDialogDetailProduct?.(true);
  };

  return (
    <Card className="bg-card h-full -space-y-3 border-0 py-4 shadow-2xl">
      <CardHeader className="px-4">
        <Image
          src={props.products.image_product as string}
          alt={props.products.name_product as string}
          width={200}
          height={400}
          className="h-96 w-full rounded-lg object-center"
          loading="lazy"
        />
      </CardHeader>

      <CardContent className="px-4 text-xl">
        {props.products.name_product}
      </CardContent>

      {props.showButton && (
        <CardContent className="px-4">
          <Button
            className="w-full"
            variant="default"
            onClick={handleOnClickButton}
          >
            View Details
          </Button>
        </CardContent>
      )}
    </Card>
  );
}
