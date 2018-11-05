import { MongoError, ObjectID, WriteOpResult } from "mongodb";
import { Preference } from "../entities/preference";
import { MongoDB } from "../providers/mongodb";

export class PreferenceDao {
  public static async getPreferenceById(id: string) {
    return new Promise<Preference>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const preferenceDB = db.collection("preferences");

      preferenceDB.findOne({ _id: new ObjectID(id) }, (err: MongoError, preference: Preference) => {
        if (err) {
          reject();
          return;
        }
        resolve(preference ? new Preference(preference) : null);
      });
    });
  }

  public static async getPreferences(query: any) {
    return new Promise<Preference[]>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const preferenceDB = db.collection("preferences");

      preferenceDB.find(query).toArray((err: MongoError, preferences: Preference[]) => {
        if (err) {
          reject();
          return;
        }
        preferences = preferences.map((preference) => new Preference(preference));
        resolve(preferences);
      });
    });
  }

  public static async createPreference(preference: Preference) {
    return new Promise<Preference>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const preferenceDB = db.collection("preferences");

      preferenceDB.insertOne(preference, (err: MongoError, res: WriteOpResult) => {
        if (!err) {
          resolve(preference ? new Preference(preference) : null);
        } else {
          reject();
        }
      });
    });
  }
}
