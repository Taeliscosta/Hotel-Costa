import { reservaService } from "../services/reservaService.js";

export const reservaController = {

  async listarTodos(req, res) {
    const reservas = await reservaService.listarTodos();
    res.json(reservas);
  },

  async criar(req, res) {
    const novaReserva = await reservaService.criar(req.body);
    res.status(201).json(novaReserva);
  },

  async remover(req, res) {
    await reservaService.remover(Number(req.params.id));
    res.status(204).end();
  }

};