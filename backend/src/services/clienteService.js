import { clienteModel } from "../models/clienteModel.js";

export const clienteService = {

  async listarTodos() {
    return await clienteModel.listarTodos();
  },

  async buscarPorId(id) {
    const cliente = await clienteModel.buscarPorId(id);
    if (!cliente) {
      const erro = new Error("Cliente não encontrado");
      erro.status = 404;
      throw erro;
    }
    return cliente;
  },

  async criar({ nome, email, telefone, cpf }) {
    if (!nome || !email || !cpf) {
      const erro = new Error("Nome, email e CPF são obrigatórios");
      erro.status = 400;
      throw erro;
    }

    return await clienteModel.inserir({
      nome,
      email,
      telefone,
      cpf
    });
  },

  async atualizar(id, dados) {
    const atualizado = await clienteModel.atualizar(id, dados);
    if (!atualizado) {
      const erro = new Error("Cliente não encontrado");
      erro.status = 404;
      throw erro;
    }
    return await clienteModel.buscarPorId(id);
  },

  async remover(id) {
    const removido = await clienteModel.remover(id);
    if (!removido) {
      const erro = new Error("Cliente não encontrado");
      erro.status = 404;
      throw erro;
    }
  }

};