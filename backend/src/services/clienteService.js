import { clienteModel } from "../models/clienteModel.js";

export const clienteService = {

  listarTodos() {
    return clienteModel.listarTodos();
  },

  buscarPorId(id) {

    const cliente = clienteModel.buscarPorId(id);

    if (!cliente) {

      const erro = new Error("Cliente não encontrado");

      erro.status = 404;

      throw erro;
    }

    return cliente;
  },

  criar({ nome, email, telefone, cpf}) {

    if (!nome || !email || !cpf) {
      const erro = new Error( "Nome, email e CPF são obrigatórios");

      erro.status = 400;

      throw erro;
    }

    return clienteModel.inserir({
      nome,
      email,
      telefone,
      cpf
    });
  },

  atualizar(id, dados) {

    const clienteAtualizado =
      clienteModel.atualizar(id, dados);

    if (!clienteAtualizado) {

      const erro = new Error(
        "Cliente não encontrado"
      );

      erro.status = 404;

      throw erro;
    }

    return clienteAtualizado;
  },

  remover(id) {

    const removido =
      clienteModel.remover(id);

    if (!removido) {

      const erro = new Error(
        "Cliente não encontrado"
      );

      erro.status = 404;

      throw erro;
    }

  }

};