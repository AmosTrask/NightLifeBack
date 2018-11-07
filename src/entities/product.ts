import { ObjectID } from "mongodb";
import { Entity } from "./entity.abstract";

export class Product extends Entity {
    public _id?: ObjectID;
    public name: string;

  constructor(product: Product) {
    super();

    this._id = product._id;
    this.name = product.name;
  }
}
