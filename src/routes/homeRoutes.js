import { Router } from "express";
import homeController from "../controllers/HomeController"; // import com letra minúscula para importar a classe e não o objeto que vem no default

const router = new Router();

router.get("/", homeController.index);

export default router;

/*
      MÉTODOS NOS CONTROLLERS
index -> usado para listar todos os usuários = GET
store/create -> criar novos usuários = POST
delete -> apaga o usuário = DELETE
show -> mostra um usuário = GET
update -> atualiza um usuário = PUT ou PATCH

PUT: substitui o objeto inteiro
PATCH: substitui apenas um valor
*/
