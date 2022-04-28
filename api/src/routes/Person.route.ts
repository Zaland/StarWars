import { Router } from "express";
import * as PersonController from "../controllers/Person.controller";

const router = Router();

router.get("/:id", PersonController.get);

export default router;
