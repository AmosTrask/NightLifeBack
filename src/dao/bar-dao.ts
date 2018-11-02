import { MongoError, ObjectID, WriteOpResult } from "mongodb";
import { Bar } from "../entities/bar";
import { MongoDB } from "../providers/mongodb";

export class BarDao {
  public static async getBarById(id: string) {
    return new Promise<Bar>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const barDB = db.collection("bars");

      barDB.findOne({ _id: new ObjectID(id) }, (err: MongoError, bar: Bar) => {
        if (err) {
          reject();
          return;
        }
        resolve(bar ? new Bar(bar) : null);
      });
    });
  }

  public static async getAllBars() {
    return new Promise<Bar[]>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const barDB = db.collection("bars");

      barDB.find({}).toArray((err: MongoError, bars: Bar[]) => {
        if (err) {
          reject();
          return;
        }
        bars = bars.map((bar) => new Bar(bar));
        resolve(bars);
      });
    });
  }

  public static async getBarByName(name: string) {
    return new Promise<Bar>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const barDB = db.collection("bars");

      barDB.findOne({ name }, (err: MongoError, bar: Bar) => {
        if (err) {
          reject();
          return;
        }
        resolve(bar ? new Bar(bar) : null);
      });
    });
  }

  public static async createBar(bar: Bar) {
    return new Promise<Bar>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const barDB = db.collection("bars");

      barDB.insertOne(bar, (err: MongoError, res: WriteOpResult) => {
        if (!err) {
          resolve(bar ? new Bar(bar) : null);
        } else {
          reject();
        }
      });
    });
  }
}
