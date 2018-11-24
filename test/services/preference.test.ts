require("dotenv").config();

import { PreferenceDto } from "../../src/dto/preference-dto";
import { PreferenceService } from "../../src/services/preference-service";

const preferenceRef = {
    _id: "507f1f77bcf86cd799439011",
    userId: "5bc362b8d95d221ddccaa217",
    products: [
        {
            _id: "5bc362b8d95a221ddccaa331",
            name: "Guinness",
        },
        {
            _id: "5bc362b8d95a221ddccaa332",
            name: "Murphy’s",
        },
    ],
};

describe("preference service", () => {
    it("should return a list of all preferences", async (done) => {
        const preferences = await PreferenceService.getPreferences({});

        expect(preferences[0]).toBeInstanceOf(PreferenceDto);

        expect(preferences).toContainEqual(preferenceRef);

        done();
    });

    it("should find a preference by it's id", async (done) => {
        const preference = await PreferenceService.getPreferenceById(preferenceRef._id);

        expect(preference).toBeInstanceOf(PreferenceDto);
        expect(preference).toEqual(preferenceRef);

        done();
    });
});
