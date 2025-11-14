import Link from "next/link";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Textarea } from "~/components/ui/textarea";
import { chatValue, hrefChat } from "~/constants/ChatConstant";
import data from "~/data/products.json";
import { ProductsType } from "~/types/product";
import SelectLanguage from "./SelectLanguage";

type DialogDetailProductProps = {
  selectedProductId: number;
  openDialogDetailProduct?: boolean;
  setOpenChangeDialogDetailProduct?: (open: boolean) => void;
};

type SelectLanguageType = "indonesia" | "english" | "custom";

export default function DialogDetailProduct(props: DialogDetailProductProps) {
  /* select language options  */
  const [selectedLanguage, setSelectedLanguage] =
    useState<SelectLanguageType>();

  /* set message for chat */
  const [message, setMessage] = useState<string>("");

  /* find product by id from props selectedProductId */
  const detailProduct = data.find(
    (item) => item.product_id === props.selectedProductId,
  );

  /* get chat value by language */
  const { english: ChatEnglish, indonesia: ChatIndonesia } = chatValue(
    detailProduct as ProductsType,
  );

  /* handle close dialog */
  const onOpenChangeDialog = () => {
    setSelectedLanguage(undefined);
    props.setOpenChangeDialogDetailProduct?.(false);
  };

  /* handle select language */
  const handlelanguangeChange = (value: SelectLanguageType) =>
    setSelectedLanguage(value);

  /**
   * handle function for set meesage if language selected
   * if selectedLanguage is english set message to ChatEnglish.message
   * if selectedLanguage is indonesia set message to ChatIndonesia.message
   * return default message if selectedLanguage is undefined
   */
  const handleSetMessage = (): string => {
    if (selectedLanguage === "english") {
      setMessage(ChatEnglish.message.join("\n"));
    }
    if (selectedLanguage === "indonesia") {
      setMessage(ChatIndonesia.message.join("\n"));
    }
    return message;
  };

  return (
    <Dialog
      open={props.openDialogDetailProduct}
      onOpenChange={() => onOpenChangeDialog()}
    >
      <DialogContent
        className="my-2 max-h-screen overflow-y-auto p-4 sm:max-w-[425px]"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-normal">
            {detailProduct?.name_product}
          </DialogTitle>
        </DialogHeader>

        <section>
          {selectedLanguage === undefined && (
            <p className="my-3 text-sm">
              Please select a language to see the message preview.
            </p>
          )}

          <SelectLanguage
            selectedLanguage={selectedLanguage}
            handlelanguangeChange={
              handlelanguangeChange as (value: string) => void
            }
          />

          {selectedLanguage === "custom" && (
            <Textarea
              className="border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:ring-primary mt-4 w-full rounded-md border px-3 py-2 text-base shadow-sm focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              rows={4}
              placeholder="Type your custom message here..."
              onChange={(e) => setMessage(e.target.value)}
            />
          )}

          {selectedLanguage === "english" ? (
            <div className="border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:ring-primary mt-4 w-full rounded-md border px-3 py-2 text-base shadow-sm focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50">
              {ChatEnglish.message.map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          ) : (
            selectedLanguage === "indonesia" && (
              <div className="border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:ring-primary mt-4 w-full rounded-md border px-3 py-2 text-base shadow-sm focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50">
                {ChatIndonesia.message.map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            )
          )}
        </section>

        <DialogFooter className="flex-row justify-end">
          <DialogClose asChild>
            <Button
              onClick={() => setSelectedLanguage(undefined)}
              variant="destructive"
            >
              Close
            </Button>
          </DialogClose>

          {selectedLanguage ? (
            <Button asChild onClick={handleSetMessage}>
              <Link
                href={hrefChat(message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </Link>
            </Button>
          ) : (
            <Button disabled>Order Now</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
