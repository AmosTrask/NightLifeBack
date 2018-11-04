import * as express from "express";
import { OfferService } from "../services/offer-service";

const router = express.Router();

router.get("/", async (req, res) => {
  await OfferService.getOffers(req.query)
  .then((offers) => {
    res.status(200).send(offers);
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
  await OfferService.getOfferById(req.params.id)
  .then((offer) => {
    res.status(200).send(offer);
  })
  .catch((err) => {
    if (err.message) {
      res.status(400).send(err);
    } else {
      res.sendStatus(500);
    }
  });
});

export { router as OfferAPI };
