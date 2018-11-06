import { MongoError, ObjectID, WriteOpResult } from "mongodb";
import { Event } from "../entities/event";
import { MongoDB } from "../providers/mongodb";

export class EventDao {
  public static async getEventById(id: string) {
    return new Promise<Event>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const eventDB = db.collection("events");

      eventDB.findOne({ _id: new ObjectID(id) }, (err: MongoError, event: Event) => {
        if (err) {
          reject();
          return;
        }
        resolve(event ? new Event(event) : null);
      });
    });
  }

  public static async getEvents(query: any) {
    return new Promise<Event[]>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const eventDB = db.collection("events");

      eventDB.find(query).toArray((err: MongoError, events: Event[]) => {
        if (err) {
          reject();
          return;
        }
        events = events.map((event) => new Event(event));
        resolve(events);
      });
    });
  }

  public static async getEventByName(name: string) {
    return new Promise<Event>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const eventDB = db.collection("events");

      eventDB.findOne({ name }, (err: MongoError, event: Event) => {
        if (err) {
          reject();
          return;
        }
        resolve(event ? new Event(event) : null);
      });
    });
  }

  public static async createEvent(event: Event) {
    return new Promise<Event>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const eventDB = db.collection("events");

      eventDB.insertOne(event, (err: MongoError, res: WriteOpResult) => {
        if (!err) {
          resolve(event ? new Event(event) : null);
        } else {
          reject();
        }
      });
    });
  }
}
