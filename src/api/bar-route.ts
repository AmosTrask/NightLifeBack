import * as express from "express";
import { BarService } from "../services/bar-service";

const router = express.Router();

router.get("/all", async (req, res) => {
  await BarService.getAllBars()
  .then((bars) => {
    res.status(201).send(bars);
  })
  .catch((err) => {
    if (err.message) {
      res.status(400).send(err);
    } else {
      res.sendStatus(500);
    }
  });
});

router.get("/", async (req, res) => {
  await BarService.getBarById(req.query.id)
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
