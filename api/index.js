import { Router } from "express";

import extract_data from "./extractData.js";

const router = Router();

router.get("/:national_id", extract_data);
router.get("/", (req, res) => {
  res.status(200).send({ message: "go to /national_id to extract ID's data" });
});
router.get(/.*/, (req, res) => {
  res.status(404).send({ errors: "Not found"});
});
export default router;
