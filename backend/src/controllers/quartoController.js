import { quartoService } from "../services/quartoService.js";

export const quartoController = {

  listarTodos(req, res) {
    const quartos = quartoService.listarTodos();

    res.json(quartos);
  },

  buscarPorId(req, res) {
    const quarto = quartoService.buscarPorId(Number(req.params.id));

    res.json(quarto);
  },

  criar(req, res) {
    const novoQuarto = quartoService.criar(req.body);

    res.status(201).json(novoQuarto);
  },

  atualizar(req, res) {
    const quartoAtualizado = quartoService.atualizar(Number(req.params.id), req.body);

    res.json(quartoAtualizado);
  },

  remover(req, res) {
    quartoService.remover( Number(req.params.id));

    res.status(204).end();
  }

};