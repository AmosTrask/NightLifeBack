import * as express from "express";
import { BarService } from "../services/bar-service";

const router = express.Router();

router.get("/", async (req, res) => {
  await BarService.getBars(req.query)
  .then((bars) => {
    res.status(200).send(bars);
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
  await BarService.getBarById(req.params.id)
  .then((bar) => {
    res.status(200).send(bar);
  })
  .catch((err) => {
    if (err.message) {
      res.status(400).send(err);
    } else {
      res.sendStatus(500);
    }
  });
});

export { router as BarAPI };
