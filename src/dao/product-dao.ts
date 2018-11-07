import { MongoError, ObjectID, WriteOpResult } from "mongodb";
import { Product } from "../entities/product";
import { MongoDB } from "../providers/mongodb";

export class ProductDao {
  public static async getProductById(id: string) {
    return new Promise<Product>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const productDB = db.collection("products");

      productDB.findOne({ _id: new ObjectID(id) }, (err: MongoError, product: Product) => {
        if (err) {
          reject();
          return;
        }
        resolve(product ? new Product(product) : null);
      });
    });
  }

  public static async getProducts(query: any) {
    return new Promise<Product[]>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const productDB = db.collection("products");

      productDB.find(query).toArray((err: MongoError, products: Product[]) => {
        if (err) {
          reject();
          return;
        }
        products = products.map((product) => new Product(product));
        resolve(products);
      });
    });
  }

  public static async getProductByName(name: string) {
    return new Promise<Product>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const productDB = db.collection("products");

      productDB.findOne({ name }, (err: MongoError, product: Product) => {
        if (err) {
          reject();
          return;
        }
        resolve(product ? new Product(product) : null);
      });
    });
  }

  public static async createProduct(product: Product) {
    return new Promise<Product>(async (resolve, reject) => {
      const db = await MongoDB.Instance.getClient();
      const productDB = db.collection("products");

      productDB.insertOne(product, (err: MongoError, res: WriteOpResult) => {
        if (!err) {
          resolve(product ? new Product(product) : null);
        } else {
          reject();
        }
      });
    });
  }
}
