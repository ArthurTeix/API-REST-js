import { Router } from "express";
import fotoController from "../controllers/FotoController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/", loginRequired, fotoController.store); // 'foto' é o nome que decidi no https request no insomnia

export default router;
