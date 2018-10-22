require("dotenv").config();

import { initDb } from "../../scripts/init-db";
import { UserDto } from "../../src/dto/user-dto";
import { User } from "../../src/entities/user";
import { Roles } from "../../src/enums/roles";
import { UserService } from "../../src/services/user-service";

const userRef: User = {
  role: Roles.USER,
  username: "testUser",
  firstName: "testFN",
  lastName: "testLN",
  password: "testPwd",
};

afterAll(async () => {
  await initDb();
});

describe("user service", () => {
  it("should create a user correctly", async (done) => {
    const user = new User(userRef);
    await UserService.createUser(user);

    const authenticatedUser = await UserService.authenticateUser(userRef.username, userRef.password);

    expect(authenticatedUser).not.toBeNull();
    expect(authenticatedUser.username).toBe(user.username);
    expect(authenticatedUser.role).toBe(user.role);

    done();
  });

  it("should fail login if invalid password", async (done) => {
    const authenticatedUser = await UserService.authenticateUser("admin", "wrongPassword");

    expect(authenticatedUser).toBeNull();

    done();
  });

  it("should fail login if invalid username", async (done) => {
    const authenticatedUser = await UserService.authenticateUser("Wrongadmin", "pwd");

    expect(authenticatedUser).toBeNull();

    done();
  });
});
