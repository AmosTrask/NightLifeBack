import { MongoError, ObjectID, WriteOpResult } from "mongodb";
import { User } from "../entities/user";
import { MongoDB } from "../providers/mongodb";

export class UserDao {
  public static async getUserById(id: string) {
    return new Promise<User>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const userDB = db.collection("users");

      userDB.findOne({ _id: new ObjectID(id) }, (err: MongoError, user: User) => {
        if (err) {
          reject();
          return;
        }
        resolve(user ? new User(user) : null);
      });
    });
  }

  public static async getUserByUsername(username: string) {
    return new Promise<User>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const userDB = db.collection("users");

      userDB.findOne({ username }, (err: MongoError, user: User) => {
        if (err) {
          reject();
          return;
        }
        resolve(user ? new User(user) : null);
      });
    });
  }

  public static async createUser(user: User) {
    return new Promise<User>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const userDB = db.collection("users");

      userDB.insertOne(user, (err: MongoError, res: WriteOpResult) => {
        if (!err) {
          resolve(user ? new User(user) : null);
        } else {
          reject();
        }
      });
    });
  }
}
