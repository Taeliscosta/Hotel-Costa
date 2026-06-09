import db from "../database/connection.js";

export const quartoModel = {

  listarTodos() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM quartos",
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

  buscarPorId(id) {
    return new Promise((resolve, reject) => {
      db.get(
        "SELECT * FROM quartos WHERE id = ?",
        [id],
        (erro, row) => {

          if (erro) {
            reject(erro);
            return;
          }
          resolve(row);
        }
      );
    });
  },

  inserir({ numero, tipo, preco }) {
    return new Promise((resolve, reject) => {
      db.run(
        `
        INSERT INTO quartos
        (numero, tipo, preco, disponivel)
        VALUES (?, ?, ?, 1)
        `,
        [numero, tipo, preco],
        function (erro) {
          if (erro) {
            reject(erro);
            return;
          }
          resolve({
            id: this.lastID,
            numero,
            tipo,
            preco,
            disponivel: 1
          });
        }
      );
    });
  },

  atualizar(id, dados) {
    return new Promise((resolve, reject) => {
      db.run(
        `
        UPDATE quartos
        SET numero = ?,
            tipo = ?,
            preco = ?,
            disponivel = ?
        WHERE id = ?
        `,
        [
          dados.numero,
          dados.tipo,
          dados.preco,
          dados.disponivel,
          id
        ],
        function (erro) {
          if (erro) {
            reject(erro);
            return;
          }
          resolve(this.changes > 0);
        }
      );
    });
  },

  remover(id) {
    return new Promise((resolve, reject) => {
      db.run(
        "DELETE FROM quartos WHERE id = ?",
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