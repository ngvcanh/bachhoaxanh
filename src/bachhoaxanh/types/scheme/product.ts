import { PromotionalGift } from "./promotional-gift";

export interface ProductExtra{
  price: number;
  meta: string;
}

export interface Product{
  id: number;
  name: string;
  image: string | null;
  category_id: number;
  url: string;
  sale_price: number;
  original_price: number;
  unit: string;
  promotional_gift?: PromotionalGift;
  meta?: string;
  extra?: ProductExtra;
}