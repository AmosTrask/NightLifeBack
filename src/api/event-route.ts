import * as express from "express";
import { EventService } from "../services/event-service";

const router = express.Router();

router.get("/", async (req, res) => {
  await EventService.getEvents(req.query)
  .then((events) => {
    res.status(200).send(events);
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
  await EventService.getEventById(req.params.id)
  .then((event) => {
    res.status(200).send(event);
  })
  .catch((err) => {
    if (err.message) {
      res.status(400).send(err);
    } else {
      res.sendStatus(500);
    }
  });
});

export { router as EventAPI };
