import * as express from "express";
import { forRoles } from "../auth/role-checker";
import { Roles } from "../enums/roles";
import { UserService } from "../services/user-service";

const router = express.Router();

router.post("/", async (req, res) => {
  req.assert("username", "username must be provided").notEmpty();
  req.assert("password", "password cannot be blank").notEmpty();
  req.assert("role", "you must provide a valid role code").isString().matches(/(ADMIN|USER|PREMIUM|BARMAN)/);
  req.assert("email", "you must provide a valid email").isEmail();

  if (req.validationErrors()) {
    return res.status(400).send(req.validationErrors());
  }

  await UserService.createUser({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
  })
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      if (err.message) {
        res.status(400).send(err);
      } else {
        res.sendStatus(500);
      }
    });
});

export { router as SignupAPI };
