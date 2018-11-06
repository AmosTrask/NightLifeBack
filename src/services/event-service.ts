import { EventDao } from "../dao/event-dao";
import { DtoFactory } from "../dto-factory/dto-factory";
import { EventDto } from "../dto/event-dto";
import { Event } from "../entities/event";

export class EventService {

  public static async getEventById(id: string): Promise<EventDto> {
    const event = await EventDao.getEventById(id);
    return await DtoFactory.convert(event) as EventDto;
  }

  public static async getEvents(query: any): Promise<EventDto[]> {
    const events = await EventDao.getEvents(query);
    return await DtoFactory.convertList(events) as EventDto[];
  }

  public static async createEvent(event: Event): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const savedEvent: Event = await EventDao.createEvent(event);
      resolve(await DtoFactory.convert(savedEvent));
    });
  }
}
