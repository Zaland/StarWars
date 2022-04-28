import { Router } from "express";
import { CharacterController } from "../controllers/Character.controller";

const router = Router();

router.get("/:id", CharacterController.get);

export default router;
