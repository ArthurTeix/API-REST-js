import { Router } from "express";
import userController from "../controllers/UserController"; // import com letra minúscula para importar a classe e não o objeto que vem no default
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não existiriam numa aplicação real, apenas fiz para o CRUD
// Para manter devo manter apenas id, nome e email
// router.get("/", loginRequired, userController.index); // Lista todos
// router.get("/:id", userController.show); // Lista apenas um


router.post("/", userController.store);

// Precisa de login pois um user só pode editar e deletar seus próprios dados
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;
