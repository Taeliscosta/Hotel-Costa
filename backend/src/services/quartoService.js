import { quartoModel } from "../models/quartoModel.js";

export const quartoService = {

  async listarTodos() {
    return await quartoModel.listarTodos();
  },

  async buscarPorId(id) {
    const quarto = await quartoModel.buscarPorId(id);
    if (!quarto) {
      const erro = new Error(
        "Quarto não encontrado"
      );
      erro.status = 404;
      throw erro;
    }
    return quarto;
  },

  async criar({ numero, tipo, preco }) {
    if (!numero || !tipo || !preco) {
      const erro = new Error("Número, tipo e preço são obrigatórios");
      erro.status = 400;
      throw erro;
    }
    return await quartoModel.inserir({
      numero,
      tipo,
      preco
    });
  },

  async atualizar(id, dados) {
    const atualizado =await quartoModel.atualizar(id, dados);
    if (!atualizado) {
      const erro = new Error("Quarto não encontrado");
      erro.status = 404;
      throw erro;
    }
    return await quartoModel.buscarPorId(id);
  },

  async remover(id) {
    const removido = await quartoModel.remover(id);
    if (!removido) {
      const erro = new Error("Quarto não encontrado");
      erro.status = 404;
      throw erro;
    }
  }

};