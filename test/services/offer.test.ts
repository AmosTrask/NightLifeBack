require("dotenv").config();

import { OfferDto } from "../../src/dto/offer-dto";
import { OfferService } from "../../src/services/offer-service";

const offerRef = {
    _id: "5bc433b8d95d221ddccaa002",
    name: "Two pints for 6€",
    description: "Two pints for 6€.",
    barId: "5bc362b8d95d221ddccaa331",
    price: "0",
    productType: "DRINK",
    products: [
        {
            _id: "5bc362b8d95a221ddccaa331",
            name: "Guiness",
            productType: "DRINK",
        },
        {
            _id: "5bc362b8d95a221ddccaa332",
            name: "Murphy",
            productType: "DRINK",
        },
        {
            _id: "5bc362b8d95a221ddccaa333",
            name: "Heineken",
            productType: "DRINK",
        },
        {
            _id: "5bc362b8d95a221ddccaa334",
            name: "Blumers",
            productType: "DRINK",
        },
    ],
};

describe("offer service", () => {
    it("should return a list of all offers", async (done) => {
        const offers = await OfferService.getOffers({});

        expect(offers[0]).toBeInstanceOf(OfferDto);

        expect(offers).toContainEqual(offerRef);

        done();
    });

    it("should find a offer by it's id", async (done) => {
        const offer = await OfferService.getOfferById(offerRef._id);

        expect(offer).toBeInstanceOf(OfferDto);
        expect(offer).toEqual(offerRef);

        done();
    });
});
