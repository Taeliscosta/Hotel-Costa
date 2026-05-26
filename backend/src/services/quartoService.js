import { quartoModel }
from "../models/quartoModel.js";

export const quartoService = {

  listarTodos() {
    return quartoModel.listarTodos();
  },

  buscarPorId(id) {
    const quarto = quartoModel.buscarPorId(id);

    if (!quarto) {
      const erro = new Error("Quarto não encontrado");
      erro.status = 404;
      throw erro;
    }

    return quarto;
  },

  criar({ numero, tipo, preco }) {
    if (!numero || !tipo || !preco) {
      const erro = new Error("Número, tipo e preço são obrigatórios");
      erro.status = 400;
      throw erro;
    }

    return quartoModel.inserir({ numero, tipo, preco});

  },

  atualizar(id, dados) {
    const quartoAtualizado = quartoModel.atualizar(id, dados);

    if (!quartoAtualizado) {
      const erro = new Error("Quarto não encontrado");
      erro.status = 404;
      throw erro;
    }

    return quartoAtualizado;
  },

  remover(id) {
    const removido = quartoModel.remover(id);

    if (!removido) {
      const erro = new Error("Quarto não encontrado");
      erro.status = 404;
      throw erro;
    }

  }

};