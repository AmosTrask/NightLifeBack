import { DTO } from "./dto.abstract";
import { ProductType } from "../enums/productType";

export class ProductDto extends DTO {
  public _id: string;
  public name: string;
  public productType: ProductType;
}
