import { Product } from './product';
import { Shop } from './shop';

export class ProductSnap {
  constructor(
    public productSnapId?: number,
    public startDate?: Date,
    public enddate?: Date,
    public product?: Product,
    public usageLevel?: String,
    public shop?: Shop,
    public price?: number,
    public dop?: Date
  ) { }
}
