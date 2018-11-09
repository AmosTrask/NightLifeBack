import { ObjectID } from "mongodb";
import { Entity } from "./entity.abstract";
import { ProductType } from "../enums/productType";

export class Product extends Entity {
    public _id?: ObjectID;
    public name: string;
    public productType: ProductType;

  constructor(product: Product) {
    super();

    this._id = product._id;
    this.name = product.name;
    this.productType = product.productType;
  }
}
