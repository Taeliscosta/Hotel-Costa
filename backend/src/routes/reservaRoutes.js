import { Router } from "express";
import { reservaController } from "../controllers/reservaController.js";

const router = Router();

router.get("/", reservaController.listarTodos);

router.post("/", reservaController.criar);

router.delete("/:id", reservaController.remover);

export default router;