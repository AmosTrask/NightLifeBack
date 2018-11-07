import { DTO } from "./dto.abstract";
import { Product } from "../entities/product";

export class PreferenceDto extends DTO {
  public _id: string;
  public userId: string;
  public products: Product[];
}
