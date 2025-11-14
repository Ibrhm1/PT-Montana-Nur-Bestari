import { ProductsType } from "~/types/product";
import { LIST_CONTACT_CONSTANT } from "./ListContactConstant";
import { LIST_IMAGE_CONSTANT } from "./ListImageConstant";

/**
 * Language options for chat messages
 *
 * @type {{
 *  value: string;
 * label: string;
 * icon: string;
 * }[]}
 */
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

/**
 * Generate WhatsApp chat link with pre-filled message
 *
 * @param {string} message
 * @returns {string}
 */
export const hrefChat = (message: string): string => {
  return `${LIST_CONTACT_CONSTANT[1].href}?text=${message.split("\n").join("%0A")}`;
};

/**
 * Get chat message templates in different languages
 *
 * @param {ProductsType} detailProduct
 * @returns {{ indonesia: { message: {}; }; english: { message: {}; }; }}
 */
export const chatValue = (detailProduct: ProductsType) => {
  return {
    indonesia: {
      message: [
        "Halo, saya ingin bertanya tentang produk ini:",
        `- *${detailProduct?.name_product}*`,
        "Apakah bisa saya tahu harga dan stok yang tersedia? Terima kasih!",
      ],
    },
    english: {
      message: [
        "hello, I would like to inquire about this produc:",
        `- *${detailProduct?.name_product}*`,
        "Could you please let me know the price and the available stock? Thank you.",
      ],
    },
  };
};
