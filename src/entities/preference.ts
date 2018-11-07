import { ObjectID } from "mongodb";
import { Entity } from "./entity.abstract";
import { Product } from "./product";

export class Preference extends Entity {

    public _id: ObjectID;
    public products: Product[];
    public userId: string;

    constructor(preference: Preference) {
        super();

        this._id = preference._id;
        this.products = preference.products;
        this.userId = preference.userId;
    }
}
