export class Brand {
  brandId : number;
  brandName : String;
  crueltyFree? : boolean;
  constructor(brandId: number, brandName:string, crueltyFree: boolean){
    this.brandId = brandId;
    this.brandName = brandName;
    this.crueltyFree = crueltyFree;
  }
}
