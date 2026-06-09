import db from "../database/connection.js";

export const reservaModel = {
  listarTodos() {
    return new Promise((resolve, reject) => {
      db.all(
        `
          SELECT
          id,
          cliente_id AS clienteId,
          quarto_id AS quartoId,
          data_entrada AS dataEntrada,
          data_saida AS dataSaida
          FROM reservas
        `,  
        [],
        (erro, rows) => {
          if (erro) {
            reject(erro);
            return;
          }
          resolve(rows);
        }
      );
    });
  },

  inserir({
    clienteId,
    quartoId,
    dataEntrada,
    dataSaida
  }) {
    return new Promise((resolve, reject) => {
      db.run(
        `
        INSERT INTO reservas
        (
          cliente_id,
          quarto_id,
          data_entrada,
          data_saida
        )
        VALUES (?, ?, ?, ?)
        `,
        [
          clienteId,
          quartoId,
          dataEntrada,
          dataSaida
        ],
        function (erro) {
          if (erro) {
            reject(erro);
            return;
          }
          resolve({
            id: this.lastID,
            clienteId,
            quartoId,
            dataEntrada,
            dataSaida
          });
        }
      );
    });
  },

  remover(id) {
    return new Promise((resolve, reject) => {
      db.run(
        "DELETE FROM reservas WHERE id = ?",
        [id],
        function (erro) {
          if (erro) {
            reject(erro);
            return;
          }
          resolve(this.changes > 0);
        }
      );

    });
  }

};