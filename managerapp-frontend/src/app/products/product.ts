import { Brand } from '../model/brand';

export class Product {
  productId: number;
  name: string;
  inci: string;
  goodComposition: boolean;
  brandid: Brand;
}
