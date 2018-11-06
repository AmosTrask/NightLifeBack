import { DTO } from "./dto.abstract";
import { EventType } from "../enums/eventType";

export class EventDto extends DTO {
  public _id: string;
  public name: string;
  public date: Date;
  public barId: string;
  public description: string;
  public eventType: EventType;
}
