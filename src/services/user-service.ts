import { User } from "../entities/user";

import * as bcrypt from "bcrypt";
import { UserDao } from "../dao/user-dao";
import { DtoFactory } from "../dto-factory/dto-factory";
import { UserDto } from "../dto/user-dto";

export class UserService {

  public static async getUserById(id: string): Promise<UserDto> {
    const user = await UserDao.getUserById(id);
    return await DtoFactory.convert(user) as UserDto;
  }

  public static async createUser(user: User): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const existing = await this.existingUsername(user.username);

      if (existing) {
        return reject({message: "Username already taken"});
      }

      const hashedPassword: string = await bcrypt.hash(user.password, Number(process.env.SALT_ROUNDS));
      user.password = hashedPassword;

      const savedUser: User = await UserDao.createUser(user);
      resolve(savedUser);
    });
  }

  public static async authenticateUser(username: string, password: string): Promise<User> {
    return new Promise<User>(async (resolve, reject) => {

      const user: User = await UserDao.getUserByUsername(username);

      if (user) {
        bcrypt.compare(password, user.password, (err, res) => {
          res ? resolve(user) : resolve(null);
        });
      } else {
        resolve(null);
      }

    });
  }

  /**
   * Returns `true` if the provided username is already
   * existing in the database
   * @param username
   */
  public static async existingUsername(username: string) {
    return new Promise<boolean>(async (resolve, reject) => {
      const user: User = await UserDao.getUserByUsername(username);
      user ? resolve(true) : resolve(false);
    });
  }
}
