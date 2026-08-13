import Image from "next/image";
import { LIST_IMAGE_CONSTANT } from "~/constants/ListImageConstant";
import { cn } from "~/lib/utils";
import { ProductsType } from "~/types/product";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../ui/empty";

type EmptyProductProps = {
  data: ProductsType[];
  description?: string;
  title?: string;
  className?: string;
};

export default function EmptyProduct(props: EmptyProductProps) {
  return (
    Array.isArray(props.data) &&
    props.data.length === 0 && (
      <Empty className={cn("border- border shadow-2xl", props.className)}>
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
            {props.title || "products are not yet available"}
          </EmptyTitle>

          <EmptyDescription>
            {props.description || "No product has been added yet."}
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    )
  );
}
