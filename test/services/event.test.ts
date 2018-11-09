require("dotenv").config();

import { EventDto } from "../../src/dto/event-dto";
import { EventService } from "../../src/services/event-service";

const eventRef = {
    _id: "5bc433b8d95d221ddccaa101",
    name: "Live Music",
    description: "Discover this amazing new musician",
    barId: "5bc362b8d95d221ddccaa331",
    eventType: "LIVEMUSIC",
    date: "2012-04-23T18:25:43.511Z",
};

describe("event service", () => {
    it("should return a list of all events", async (done) => {
        const events = await EventService.getEvents({});

        expect(events[0]).toBeInstanceOf(EventDto);

        expect(events).toContainEqual(eventRef);

        done();
    });

    it("should find a event by it's id", async (done) => {
        const event = await EventService.getEventById(eventRef._id);

        expect(event).toBeInstanceOf(EventDto);
        expect(event).toEqual(eventRef);

        done();
    });
});
