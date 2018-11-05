import { DTO } from "./dto.abstract";
import { Drink } from "../entities/drink";
import { Food } from "../entities/food";

export class PreferenceDto extends DTO {
  public _id: string;
  public userId: string;
  public drinks: Drink[];
  public foods: Food[];
}
