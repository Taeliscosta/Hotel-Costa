import db from "../database/connection.js";

export const clienteModel = {
  listarTodos() {
    return new Promise((resolve, reject) => {
      db.all(
        "SELECT * FROM clientes",
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
        "SELECT * FROM clientes WHERE id = ?",
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

  inserir({ nome, email, telefone, cpf }) {
    return new Promise((resolve, reject) => {
      db.run(
        `
        INSERT INTO clientes
        (nome, email, telefone, cpf)
        VALUES (?, ?, ?, ?)
        `,
        [nome, email, telefone, cpf],
        function (erro) {
          if (erro) {
            reject(erro);
            return;
          }
          resolve({
            id: this.lastID,
            nome,
            email,
            telefone,
            cpf
          });
        }
      );
    });
  },

  atualizar(id, dados) {
    return new Promise((resolve, reject) => {
      db.run(
        `
        UPDATE clientes
        SET nome = ?,
            email = ?,
            telefone = ?,
            cpf = ?
        WHERE id = ?
        `,
        [
          dados.nome,
          dados.email,
          dados.telefone,
          dados.cpf,
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
        "DELETE FROM clientes WHERE id = ?",
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