import { DTO } from "./dto.abstract";

export class OfferDto extends DTO {
  public _id: string;
  public name: string;
  public description: string;
  public idBar: string;
  public price: number;
}
