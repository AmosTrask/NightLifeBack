import * as express from "express";
import { PreferenceService } from "../services/preference-service";

const router = express.Router();

router.get("/", async (req, res) => {
  await PreferenceService.getPreferences(req.query)
  .then((preferences) => {
    res.status(200).send(preferences);
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
  await PreferenceService.getPreferenceById(req.params.id)
  .then((preference) => {
    res.status(200).send(preference);
  })
  .catch((err) => {
    if (err.message) {
      res.status(400).send(err);
    } else {
      res.sendStatus(500);
    }
  });
});

export { router as PreferenceAPI };
