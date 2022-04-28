import { Router } from "express";
import * as CharacterController from "../controllers/Character.controller";

const router = Router();

router.get("/:id", CharacterController.get);

export default router;
