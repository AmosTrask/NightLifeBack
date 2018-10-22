import { DTO } from "../dto/dto.abstract";
import { UserDto } from "../dto/user-dto";
import { Entity } from "../entities/entity.abstract";
import { User } from "../entities/user";

export class DtoFactory {
  public static async convert(entity: Entity): Promise<DTO> {
    if (entity instanceof User) {
      return await this.makeUserDto(entity);
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
}
