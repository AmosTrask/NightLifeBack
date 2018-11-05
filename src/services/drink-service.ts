import { DrinkDao } from "../dao/drink-dao";
import { DtoFactory } from "../dto-factory/dto-factory";
import { DrinkDto } from "../dto/drink-dto";
import { Drink } from "../entities/drink";

export class DrinkService {

  public static async getDrinkById(id: string): Promise<DrinkDto> {
    const drink = await DrinkDao.getDrinkById(id);
    return await DtoFactory.convert(drink) as DrinkDto;
  }

  public static async getDrinks(query: any): Promise<DrinkDto[]> {
    const drinks = await DrinkDao.getDrinks(query);
    return await DtoFactory.convertList(drinks) as DrinkDto[];
  }

  public static async createDrink(drink: Drink): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const existing = await this.existingName(drink.name);

      if (existing) {
        return reject({message: "Name already taken"});
      }

      const savedDrink: Drink = await DrinkDao.createDrink(drink);
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
      const drink: Drink = await DrinkDao.getDrinkByName(name);
      drink ? resolve(true) : resolve(false);
    });
  }
}
