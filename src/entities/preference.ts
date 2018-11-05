import { ObjectID } from "mongodb";
import { Entity } from "./entity.abstract";
import { Drink } from "./drink";
import { Food } from "./food";

export class Preference extends Entity {

    public _id: ObjectID;
    public drinks: Drink[];
    public foods: Food[];
    public userId: string;

    constructor(preference: Preference) {
        super();

        this._id = preference._id;
        this.drinks = preference.drinks;
        this.foods = preference.foods;
        this.userId = preference.userId;
    }
}
