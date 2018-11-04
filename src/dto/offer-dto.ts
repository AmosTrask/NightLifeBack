import { OfferType } from "../enums/offerType";
import { DTO } from "./dto.abstract";

export class OfferDto extends DTO {
  public _id: string;
  public name: string;
  public description: string;
  public barId: string;
  public price: number;
  public offerType: OfferType;
}
