import { ObjectID } from "mongodb";
import { Entity } from "./entity.abstract";
import { MenuProduct } from "./menuProduct";

export class Bar extends Entity {
  public _id?: ObjectID;
  public name: string;
  public address: string;
  public coordinates: Coordinates;
  public menuProducts: MenuProduct[];
  public rating: number;

  constructor(bar: Bar) {
    super();

    this._id = bar._id;
    this.name = bar.name;
    this.address = bar.address;
    this.coordinates = bar.coordinates;
    this.menuProducts = bar.menuProducts;
    this.rating = bar.rating;
  }
}
