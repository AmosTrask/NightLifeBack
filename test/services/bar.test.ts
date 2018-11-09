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
