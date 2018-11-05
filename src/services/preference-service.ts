import { DtoFactory } from "../dto-factory/dto-factory";
import { PreferenceDto } from "../dto/preference-dto";
import { PreferenceDao } from "../dao/preference-dao";
import { Preference } from "../entities/preference";

export class PreferenceService {

  public static async getPreferenceById(id: string): Promise<PreferenceDto> {
    const preference = await PreferenceDao.getPreferenceById(id);
    return await DtoFactory.convert(preference) as PreferenceDto;
  }

  public static async getPreferences(query: any): Promise<PreferenceDto[]> {
    const offers = await PreferenceDao.getPreferences(query);
    return await DtoFactory.convertList(offers) as PreferenceDto[];
  }

  public static async createPreference(preference: Preference): Promise<any> {
    return new Promise(async (resolve, reject) => {
        const savedPreference: Preference = await PreferenceDao.createPreference(preference);
        resolve(await DtoFactory.convert(savedPreference));
    });
  }
}
