import { DTO } from "./dto.abstract";

export class BarDto extends DTO {
  public _id: string;
  public name: string;
  public address: string;
  public coordinates: Coordinates;
}
