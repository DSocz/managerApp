import { Brand } from '../model/brand';

export class Product {
  constructor(
  public productId?: number,
  public name?: string,
  public inci?: string,
  public brand?: Brand
){}
}
