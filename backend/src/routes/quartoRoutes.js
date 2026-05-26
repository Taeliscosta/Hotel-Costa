import { Router } from "express";
import { quartoController } from "../controllers/quartoController.js";

const router = Router();

router.get("/", quartoController.listarTodos);

router.get("/:id", quartoController.buscarPorId);

router.post("/", quartoController.criar);

router.put("/:id", quartoController.atualizar);

router.delete("/:id", quartoController.remover);

export default router;