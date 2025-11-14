import { ProductsType } from "~/types/product";
import { LIST_CONTACT_CONSTANT } from "./ListContactConstant";
import { LIST_IMAGE_CONSTANT } from "./ListImageConstant";

export const languangeOptions = [
  {
    value: "indonesia",
    label: "Indonesia",
    icon: LIST_IMAGE_CONSTANT.flagIcon.indonesia.url,
  },
  {
    value: "english",
    label: "English",
    icon: LIST_IMAGE_CONSTANT.flagIcon.unitedKingdom.url,
  },
];

export const hrefChat = (message: string): string => {
  return `${LIST_CONTACT_CONSTANT[1].href}?text=${message.split("\n").join("%0A")}`;
};

export const chatValue = (detailProduct: ProductsType) => {
  return {
    indonesia: {
      message: [
        "Halo, saya ingin menanyakan tentang produk ini:",
        `- ${detailProduct?.name_product}`,
        "Kira-kira bisa diinformasikan harga dan stok yang tersedia? Terima kasih banyak!",
      ],
    },
    english: {
      message: [
        "Hello, I would like to inquire about this product:",
        `- ${detailProduct?.name_product}`,
        "Could you please provide information on the price and available stock? Thank you very much!",
      ],
    },
  };
};
