import { Router } from "express";
import userController from "../controllers/UserController"; // import com letra minúscula para importar a classe e não o objeto que vem no default

const router = new Router();

router.post("/", userController.store);

router.get("/", userController.index);
router.get("/:id", userController.show);

router.put("/:id", userController.update);

router.delete("/:id", userController.delete);

export default router;
