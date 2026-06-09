import { quartoService } from "../services/quartoService.js";

export const quartoController = {

  async listarTodos(req, res) {
    const quartos = await quartoService.listarTodos();
    res.json(quartos);
  },

  async buscarPorId(req, res) {
    const quarto = await quartoService.buscarPorId(Number(req.params.id));
    res.json(quarto);
  },

  async criar(req, res) {
    const novoQuarto = await quartoService.criar(req.body);
    res.status(201).json(novoQuarto);
  },

  async atualizar(req, res) {
    const quartoAtualizado = await quartoService.atualizar(Number(req.params.id), req.body);
    res.json(quartoAtualizado);
  },

  async remover(req, res) {
    await quartoService.remover(Number(req.params.id));
    res.status(204).end();
  }

};