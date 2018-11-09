require("dotenv").config();

import { ProductDto } from "../../src/dto/product-dto";
import { ProductService } from "../../src/services/product-service";

const productRef = {
    _id: "5bc362b8d95a221ddccaa331",
    name: "Guiness",
    productType: "DRINK",
};

describe("product service", () => {
    it("should return a list of all products", async (done) => {
        const products = await ProductService.getProducts({});

        expect(products[0]).toBeInstanceOf(ProductDto);

        expect(products).toContainEqual(productRef);

        done();
    });

    it("should find a product by it's id", async (done) => {
        const product = await ProductService.getProductById(productRef._id);

        expect(product).toBeInstanceOf(ProductDto);
        expect(product).toEqual(productRef);

        done();
    });
});
