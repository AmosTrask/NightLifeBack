import { MongoError, ObjectID, WriteOpResult } from "mongodb";
import { Drink } from "../entities/drink";
import { MongoDB } from "../providers/mongodb";

export class DrinkDao {
  public static async getDrinkById(id: string) {
    return new Promise<Drink>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const drinkDB = db.collection("drinks");

      drinkDB.findOne({ _id: new ObjectID(id) }, (err: MongoError, drink: Drink) => {
        if (err) {
          reject();
          return;
        }
        resolve(drink ? new Drink(drink) : null);
      });
    });
  }

  public static async getDrinks(query: any) {
    return new Promise<Drink[]>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const drinkDB = db.collection("drinks");

      drinkDB.find(query).toArray((err: MongoError, drinks: Drink[]) => {
        if (err) {
          reject();
          return;
        }
        drinks = drinks.map((drink) => new Drink(drink));
        resolve(drinks);
      });
    });
  }

  public static async getDrinkByName(name: string) {
    return new Promise<Drink>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const drinkDB = db.collection("drinks");

      drinkDB.findOne({ name }, (err: MongoError, drink: Drink) => {
        if (err) {
          reject();
          return;
        }
        resolve(drink ? new Drink(drink) : null);
      });
    });
  }

  public static async createDrink(drink: Drink) {
    return new Promise<Drink>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const drinkDB = db.collection("drinks");

      drinkDB.insertOne(drink, (err: MongoError, res: WriteOpResult) => {
        if (!err) {
          resolve(drink ? new Drink(drink) : null);
        } else {
          reject();
        }
      });
    });
  }
}
