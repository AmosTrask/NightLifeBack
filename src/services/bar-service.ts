import { User } from "../entities/user";

import * as bcrypt from "bcrypt";
import { BarDao } from "../dao/bar-dao";
import { DtoFactory } from "../dto-factory/dto-factory";
import { BarDto } from "../dto/bar-dto";
import { Bar } from "../entities/bar";

export class BarService {

  public static async getBarById(id: string): Promise<BarDto> {
    const bar = await BarDao.getBarById(id);
    return await DtoFactory.convert(bar) as BarDto;
  }

  public static async getBars(query: any): Promise<BarDto[]> {
    const bars = await BarDao.getBars(query);
    return await DtoFactory.convertList(bars) as BarDto[];
  }

  public static async createBar(bar: Bar): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const existing = await this.existingName(bar.name);

      if (existing) {
        return reject({message: "Name already taken"});
      }

      const savedBar: Bar = await BarDao.createBar(bar);
      resolve(await DtoFactory.convert(savedBar));
    });
  }

  /**
   * Returns `true` if the provided name is already
   * existing in the database
   * @param name
   */
  public static async existingName(name: string) {
    return new Promise<boolean>(async (resolve, reject) => {
      const bar: Bar = await BarDao.getBarByName(name);
      bar ? resolve(true) : resolve(false);
    });
  }
}
