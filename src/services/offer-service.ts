import { User } from "../entities/user";

import * as bcrypt from "bcrypt";
import { OfferDao } from "../dao/offer-dao";
import { DtoFactory } from "../dto-factory/dto-factory";
import { OfferDto } from "../dto/offer-dto";
import { Offer } from "../entities/offer";

export class OfferService {

  public static async getOfferById(id: string): Promise<OfferDto> {
    const offer = await OfferDao.getOfferById(id);
    return await DtoFactory.convert(offer) as OfferDto;
  }

  public static async getOfferByName(name: string): Promise<OfferDto> {
    const offer = await OfferDao.getOfferByName(name);
    return await DtoFactory.convert(offer) as OfferDto;
  }

  public static async getOfferByBar(id: string): Promise<OfferDto> {
    const offer = await OfferDao.getOfferByBar(id);
    return await DtoFactory.convert(offer) as OfferDto;
  }

  public static async getOffers(query: any): Promise<OfferDto[]> {
    const offers = await OfferDao.getOffers(query);
    return await DtoFactory.convertList(offers) as OfferDto[];
  }

  public static async createOffer(offer: Offer): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const existing = await this.existingName(offer.name);

      if (existing) {
        return reject({message: "Name already taken"});
      }

      const savedoffer: Offer = await OfferDao.createOffer(offer);
      resolve(await DtoFactory.convert(savedoffer));
    });
  }

  /**
   * Returns `true` if the provided name is already
   * existing in the database
   * @param name
   */
  public static async existingName(name: string) {
    return new Promise<boolean>(async (resolve, reject) => {
      const offer: Offer = await OfferDao.getOfferByName(name);
      offer ? resolve(true) : resolve(false);
    });
  }
}
