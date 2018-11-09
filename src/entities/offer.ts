import { ObjectID } from "mongodb";
import { ProductType } from "../enums/productType";
import { Entity } from "./entity.abstract";
import { Product } from "./product";

export class Offer extends Entity {
  public _id?: ObjectID;
  public name: string;
  public description: string;
  public barId: string;
  public price: number;
  public productType: ProductType;
  public products: Product[];

  constructor(offer: Offer) {
    super();

    this._id = offer._id;
    this.name = offer.name;
    this.description = offer.description;
    this.barId = offer.barId;
    this.price = offer.price;
    this.productType = offer.productType;
    this.products = offer.products;
  }
}
