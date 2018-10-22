import * as express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send({
    message: "Echo",
  });
});

export { router as EchoAPI };
