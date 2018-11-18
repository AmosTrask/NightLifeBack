require("dotenv").config();

import { BarDto } from "../../src/dto/bar-dto";
import { BarService } from "../../src/services/bar-service";

const barRef = {
    _id: "5bc362b8d95d221ddccaa331",
    name: "Flannerys Bar",
    address: "17 Upper Denmark St, Limerick",
    coordinates: {
        lat: "52.663091",
        lng: "-8.623585",
    },
    menuProducts: [
        {
            _id: "5bc362b8d95a221ddccaa333",
            name: "Heineken",
            productType: "DRINK",
            price: "3",
            rating: "1",
            img: "https://logos-download.com/wp-content/uploads/2017/11/Heineken_logo-700x700.png",
        },
        {
            _id: "5bc362b8d95a221ddccaa334",
            name: "Bulmers",
            productType: "DRINK",
            price: "3",
            rating: "4",
            img: "https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/062013/bulmers_cider.png?itok=dvxZzJSK",
        },
        {
            _id: "5bc362b8d95a221ddccaa343",
            name: "Pizza",
            productType: "FOOD",
            price: "8",
            rating: "5",
            img: "https://recipes.timesofindia.com/photo/53110049.cms?imgsize=148092",
        },
        {
            _id: "5bc362b8d95a221ddccaa354",
            name: "Hamburger",
            productType: "FOOD",
            price: "4",
            rating: "5",
            img: "https://cdn.pixabay.com/photo/2015/04/20/13/25/burger-731298_1280.jpg",
        },
    ],
    rating: "4",
};

describe("bar service", () => {
    it("should return a list of all bars", async (done) => {
        const bars = await BarService.getBars({});

        expect(bars[0]).toBeInstanceOf(BarDto);

        expect(bars).toContainEqual(barRef);

        done();
    });

    it("should find a bar by it's id", async (done) => {
        const bar = await BarService.getBarById(barRef._id);

        expect(bar).toBeInstanceOf(BarDto);
        expect(bar).toEqual(barRef);

        done();
    });
});
