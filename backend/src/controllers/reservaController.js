import { reservaService } from "../services/reservaService.js";

export const reservaController = {
  listarTodos(req, res) {
    const reservas = reservaService.listarTodos();
    res.json(reservas);
  },

  criar(req, res) {
    const novaReserva = reservaService.criar(req.body);
    res.status(201).json(novaReserva);
  }
};