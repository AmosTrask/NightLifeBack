import { ObjectID } from "mongodb";
import { Entity } from "./entity.abstract";

export class Food extends Entity {
    public _id?: ObjectID;
    public name: string;

  constructor(food: Food) {
    super();

    this._id = food._id;
    this.name = food.name;
  }
}
