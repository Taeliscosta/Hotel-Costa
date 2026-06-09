import { clienteService } from "../services/clienteService.js";

export const clienteController = {

  async listarTodos(req, res) {
    const clientes = await clienteService.listarTodos();
    res.json(clientes);
  },

  async buscarPorId(req, res) {
    const cliente = await clienteService.buscarPorId(Number(req.params.id));
    res.json(cliente);
  },

  async criar(req, res) {
    const novoCliente = await clienteService.criar(req.body);
    res.status(201).json(novoCliente);
  },

  async atualizar(req, res) {
    const clienteAtualizado = await clienteService.atualizar(Number(req.params.id), req.body);
    res.json(clienteAtualizado);
  },

  async remover(req, res) {
    await clienteService.remover(Number(req.params.id));
    res.status(204).end();
  }

};