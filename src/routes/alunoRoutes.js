import { Router } from "express";
import alunoController from "../controllers/AlunoController";

const router = new Router();

router.post("/", alunoController.store);

router.get("/", alunoController.index);
router.get("/", alunoController.show);

router.put("/", alunoController.update);

router.delete("/", alunoController.delete);

export default router;

