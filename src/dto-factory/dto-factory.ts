import { BarDto } from "../dto/bar-dto";
import { ProductDto } from "../dto/product-dto";
import { DTO } from "../dto/dto.abstract";
import { OfferDto } from "../dto/offer-dto";
import { UserDto } from "../dto/user-dto";
import { Bar } from "../entities/bar";
import { Product } from "../entities/product";
import { Event } from "../entities/event";
import { Entity } from "../entities/entity.abstract";
import { Offer } from "../entities/offer";
import { User } from "../entities/user";
import { Preference } from "../entities/preference";
import { PreferenceDto } from "../dto/preference-dto";
import { EventDto } from "../dto/event-dto";

export class DtoFactory {
  public static async convert(entity: Entity): Promise<DTO> {
    if (entity instanceof User) {
      return await this.makeUserDto(entity);
    } else if (entity instanceof Bar) {
      return await this.makeBarDto(entity);
    } else if (entity instanceof Offer) {
      return await this.makeOfferDto(entity);
    } else if (entity instanceof Product) {
      return await this.makeProductDto(entity);
    } else if (entity instanceof Preference) {
      return await this.makePreferenceDto(entity);
    } else if (entity instanceof Event) {
      return await this.makeEventDto(entity);
    } else {
      return null;
    }
  }

  public static async convertList(entities: Entity[]): Promise<DTO[]> {
    const promises: Array<Promise<any>> = [];
    const dtos: DTO[] = [];

    entities.forEach((entity) => {
      promises.push(new Promise<any>(async (resolve, reject) => {
        dtos.push(await this.convert(entity));
        resolve();
      }));
    });

    await Promise.all(promises);
    return dtos;
  }

  private static async makeUserDto(user: User): Promise<UserDto> {
    const userDto: UserDto = new UserDto();

    userDto._id = user._id.toHexString();
    userDto.role = user.role;
    userDto.username = user.username;
    userDto.firstName = user.firstName;
    userDto.lastName = user.lastName;
    userDto.email = user.email;

    return userDto;
  }

  private static async makeBarDto(bar: Bar): Promise<BarDto> {
    const barDto: BarDto = new BarDto();

    barDto._id = bar._id.toHexString();
    barDto.name = bar.name;
    barDto.address = bar.address;
    barDto.coordinates = bar.coordinates;
    barDto.menuProducts = bar.menuProducts;
    barDto.rating = bar.rating;

    return barDto;
  }

  private static async makeOfferDto(offer: Offer): Promise<OfferDto> {
    const offerDto: OfferDto = new OfferDto();

    offerDto._id = offer._id.toHexString();
    offerDto.name = offer.name;
    offerDto.description = offer.description;
    offerDto.price = offer.price;
    offerDto.barId = offer.barId;
    offerDto.productType = offer.productType;
    offerDto.products = offer.products;

    return offerDto;
  }

  private static async makeProductDto(product: Product): Promise<ProductDto> {
    const productDto: ProductDto = new ProductDto();

    productDto._id = product._id.toHexString();
    productDto.name = product.name;
    productDto.productType = product.productType;

    return productDto;
  }

  private static async makePreferenceDto(preference: Preference): Promise<PreferenceDto> {
    const preferenceDto: PreferenceDto = new PreferenceDto();

    preferenceDto._id = preference._id.toHexString();
    preferenceDto.userId = preference.userId;
    preferenceDto.products = preference.products;

    return preferenceDto;
  }

  private static async makeEventDto(event: Event): Promise<EventDto> {
    const eventDto: EventDto = new EventDto();

    eventDto._id = event._id.toHexString();
    eventDto.name = event.name;
    eventDto.date = event.date;
    eventDto.description = event.description;
    eventDto.eventType = event.eventType;
    eventDto.barId = event.barId;

    return eventDto;
  }
}
