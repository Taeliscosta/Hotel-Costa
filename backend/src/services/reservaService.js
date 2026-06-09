import { reservaModel } from "../models/reservaModel.js";
import { clienteModel } from "../models/clienteModel.js";
import { quartoModel } from "../models/quartoModel.js";

export const reservaService = {

  async listarTodos() {
    return await reservaModel.listarTodos();
  },

  async criar({
    clienteId,
    quartoId,
    dataEntrada,
    dataSaida
  }) {
    
    const cliente = await clienteModel.buscarPorId(clienteId);
    if (!cliente) {
      const erro = new Error("Cliente não encontrado");
      erro.status = 404;
      throw erro;
    }

    const quarto = await quartoModel.buscarPorId(quartoId);

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
    await quartoModel.atualizar(
      quartoId,
      {
        numero: quarto.numero,
        tipo: quarto.tipo,
        preco: quarto.preco,
        disponivel: 0
      }
    );
    return await reservaModel.inserir({
      clienteId,
      quartoId,
      dataEntrada,
      dataSaida
    });
  },

  async remover(id) {
    const reserva = await reservaModel.buscarPorId(id);
    if (!reserva) {
      const erro = new Error("Reserva não encontrada");
      erro.status = 404;
      throw erro;
    }

    const quarto = await quartoModel.buscarPorId(reserva.quartoId);

    await quartoModel.atualizar(
      quarto.id,
      {
        numero: quarto.numero,
        tipo: quarto.tipo,
        preco: quarto.preco,
        disponivel: 1
      }
    );
    await reservaModel.remover(id);
  }

};