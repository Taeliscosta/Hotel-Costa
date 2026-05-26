import { reservaModel } from "../models/reservaModel.js";
import { clienteModel } from "../models/clienteModel.js";
import { quartoModel } from "../models/quartoModel.js";

export const reservaService = {

  listarTodos() {
    return reservaModel.listarTodos();
  },

  criar({ clienteId, quartoId, dataEntrada, dataSaida}) {
    const cliente = clienteModel.buscarPorId(clienteId);

    if (!cliente) {
      const erro = new Error("Cliente não encontrado");
      erro.status = 404;
      throw erro;
    }

    const quarto = quartoModel.buscarPorId(quartoId);

    if (!quarto) {
      const erro = new Error("Quarto não encontrado");
      erro.status = 404;
      throw erro;
    }

    if (!quarto.disponivel) {
      const erro = new Error("Quarto indisponível");
      erro.status = 400;
      throw erro;
    }

    quarto.disponivel = false;

    return reservaModel.inserir({
      clienteId,
      quartoId,
      dataEntrada,
      dataSaida
    });

  }

};