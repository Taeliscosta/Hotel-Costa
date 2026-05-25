import { clienteService }
from "../services/clienteService.js";

export const clienteController = {

  listarTodos(req, res) {

    const clientes =
      clienteService.listarTodos();

    res.json(clientes);
  },

  buscarPorId(req, res) {

    const cliente =
      clienteService.buscarPorId(
        Number(req.params.id)
      );

    res.json(cliente);
  },

  criar(req, res) {

    const novoCliente =
      clienteService.criar(req.body);

    res.status(201).json(novoCliente);
  },

  atualizar(req, res) {

    const clienteAtualizado =
      clienteService.atualizar(
        Number(req.params.id),
        req.body
      );

    res.json(clienteAtualizado);
  },

  remover(req, res) {

    clienteService.remover(
      Number(req.params.id)
    );

    res.status(204).end();
  }

};