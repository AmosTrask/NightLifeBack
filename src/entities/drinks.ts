import { ObjectID } from "mongodb";
import { Entity } from "./entity.abstract";

export class Drink extends Entity {
    public _id?: ObjectID;
    public name: string;

  constructor(drink: Drink) {
    super();

    this._id = drink._id;
    this.name = drink.name;
  }
}
