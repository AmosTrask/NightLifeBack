import { MongoError, ObjectID, WriteOpResult } from "mongodb";
import { Bar } from "../entities/bar";
import { Offer } from "../entities/offer";
import { MongoDB } from "../providers/mongodb";

export class OfferDao {
  public static async getOfferById(id: string) {
    return new Promise<Offer>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const offerDB = db.collection("offers");

      offerDB.findOne({ _id: new ObjectID(id) }, (err: MongoError, offer: Offer) => {
        if (err) {
          reject();
          return;
        }
        resolve(offer ? new Offer(offer) : null);
      });
    });
  }

  public static async getOffers(query: any) {
    return new Promise<Offer[]>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const offerDB = db.collection("offers");

      offerDB.find(query).toArray((err: MongoError, offers: Offer[]) => {
        if (err) {
          reject();
          return;
        }
        offers = offers.map((offer) => new Offer(offer));
        resolve(offers);
      });
    });
  }

  public static async getOfferByName(name: string) {
    return new Promise<Offer>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const offerDB = db.collection("offers");

      offerDB.findOne({ name }, (err: MongoError, offer: Offer) => {
        if (err) {
          reject();
          return;
        }
        resolve(offer ? new Offer(offer) : null);
      });
    });
  }

  public static async getOfferByBar(id: string) {
    return new Promise<Offer[]>(async (resolve, reject) => {
        const db = await MongoDB.Instance.getClient();
        const offerDB = db.collection("offers");

        offerDB.find({idBar: id}).toArray((err: MongoError, offers: Offer[]) => {
          if (err) {
            reject();
            return;
          }
          offers = offers.map((offer) => new Offer(offer));
          resolve(offers);
        });
      });
  }

  public static async createOffer(offer: Offer) {
    return new Promise<Offer>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const offerDB = db.collection("offers");

      offerDB.insertOne(offer, (err: MongoError, res: WriteOpResult) => {
        if (!err) {
          resolve(offer ? new Offer(offer) : null);
        } else {
          reject();
        }
      });
    });
  }
}
