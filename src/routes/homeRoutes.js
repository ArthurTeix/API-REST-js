import { Router } from "express";
import homeController from "../controllers/HomeController"; // import com letra minúscula para importar a classe e não o objeto que vem no default

const router = new Router();

router.get("/", homeController.index);

export default router;
