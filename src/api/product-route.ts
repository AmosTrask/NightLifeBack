import * as express from "express";
import { ProductService } from "../services/product-service";

const router = express.Router();

router.get("/", async (req, res) => {
  await ProductService.getProducts(req.query)
  .then((products) => {
    res.status(200).send(products);
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
  await ProductService.getProductById(req.params.id)
  .then((product) => {
    res.status(200).send(product);
  })
  .catch((err) => {
    if (err.message) {
      res.status(400).send(err);
    } else {
      res.sendStatus(500);
    }
  });
});

export { router as ProductAPI };
