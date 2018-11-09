import { DTO } from "./dto.abstract";
import { MenuProduct } from "../entities/menuProduct";

export class BarDto extends DTO {
  public _id: string;
  public name: string;
  public address: string;
  public coordinates: Coordinates;
  public menuProducts: MenuProduct[];
}
