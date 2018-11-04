import { ObjectID } from "mongodb";
import { Entity } from "./entity.abstract";

export class Offer extends Entity {
  public _id?: ObjectID;
  public name: string;
  public description: string;
  public idBar: string;
  public price: number;

  constructor(offer: Offer) {
    super();

    this._id = offer._id;
    this.name = offer.name;
    this.description = offer.description;
    this.idBar = offer.idBar;
    this.price = offer.price;
  }
}
