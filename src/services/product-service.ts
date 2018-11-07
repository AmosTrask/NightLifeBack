import { ProductDao } from "../dao/product-dao";
import { DtoFactory } from "../dto-factory/dto-factory";
import { ProductDto } from "../dto/product-dto";
import { Product } from "../entities/product";

export class ProductService {

  public static async getProductById(id: string): Promise<ProductDto> {
    const drink = await ProductDao.getProductById(id);
    return await DtoFactory.convert(drink) as ProductDto;
  }

  public static async getProducts(query: any): Promise<ProductDto[]> {
    const drinks = await ProductDao.getProducts(query);
    return await DtoFactory.convertList(drinks) as ProductDto[];
  }

  public static async createProduct(drink: Product): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const existing = await this.existingName(drink.name);

      if (existing) {
        return reject({message: "Name already taken"});
      }

      const savedDrink: Product = await ProductDao.createProduct(drink);
      resolve(await DtoFactory.convert(savedDrink));
    });
  }

  /**
   * Returns `true` if the provided name is already
   * existing in the database
   * @param name
   */
  public static async existingName(name: string) {
    return new Promise<boolean>(async (resolve, reject) => {
      const drink: Product = await ProductDao.getProductByName(name);
      drink ? resolve(true) : resolve(false);
    });
  }
}
