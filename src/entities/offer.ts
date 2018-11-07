import { ObjectID } from "mongodb";
import { OfferType } from "../enums/offerType";
import { Entity } from "./entity.abstract";
import { Product } from "./product";

export class Offer extends Entity {
  public _id?: ObjectID;
  public name: string;
  public description: string;
  public barId: string;
  public price: number;
  public offerType: OfferType;
  public products: Product[];

  constructor(offer: Offer) {
    super();

    this._id = offer._id;
    this.name = offer.name;
    this.description = offer.description;
    this.barId = offer.barId;
    this.price = offer.price;
    this.offerType = offer.offerType;
    this.products = offer.products;
  }
}
