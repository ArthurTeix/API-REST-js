import { Router } from "express";
import fotoController from "../controllers/FotoController";

const router = new Router();

router.post("/", fotoController.store); // 'foto' é o nome que decidi no https request no insomnia

export default router;
