import { ObjectID } from "mongodb";
import { Entity } from "./entity.abstract";
import { Product } from "./product";

export class MenuProduct extends Entity {
    public product: Product;
    public price: number;
    public rating: number;
    public img: string;

    constructor(menuProduct: MenuProduct) {
        super();

        this.product = menuProduct.product;
        this.price = menuProduct.price;
        this.rating = menuProduct.rating;
        this.img = menuProduct.img;
    }
}
