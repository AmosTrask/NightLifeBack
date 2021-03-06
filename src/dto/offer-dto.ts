import { ProductType } from "../enums/productType";
import { DTO } from "./dto.abstract";
import { Product } from "../entities/product";

export class OfferDto extends DTO {
  public _id: string;
  public name: string;
  public description: string;
  public barId: string;
  public price: number;
  public productType: ProductType;
  public products: Product[];
}
