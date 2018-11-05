import * as express from "express";
import { DrinkService } from "../services/drink-service";

const router = express.Router();

router.get("/", async (req, res) => {
  await DrinkService.getDrinks(req.query)
  .then((drinks) => {
    res.status(200).send(drinks);
  })
  .catch((err) => {
    if (err.message) {
      res.status(400).send(err);
    } else {
      res.sendStatus(500);
    }
  });
});

router.get("/:id", async (req, res) => {
  await DrinkService.getDrinkById(req.params.id)
  .then((drink) => {
    res.status(200).send(drink);
  })
  .catch((err) => {
    if (err.message) {
      res.status(400).send(err);
    } else {
      res.sendStatus(500);
    }
  });
});

export { router as DrinkAPI };
