import { Router } from "express";
import fotoController from "../controllers/HomeController";

const router = new Router();

router.post("/", fotoController.store);

export default router;
