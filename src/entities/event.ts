import { ObjectID } from "mongodb";
import { Entity } from "./entity.abstract";
import { EventType } from "../enums/eventType";

export class Event extends Entity {
    public _id?: ObjectID;
    public name: string;
    public eventType: EventType;
    public barId: string;
    public date: Date;
    public description: string;

  constructor(event: Event) {
    super();

    this._id = event._id;
    this.name = event.name;
    this.barId = event.barId;
    this.date = event.date;
    this.eventType = event.eventType;
    this.description = event.description;
  }
}
