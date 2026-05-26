let reservas = [];

let nextId = 1;

export const reservaModel = {
  listarTodos() {
    return reservas;
  },

  inserir(dados) {
    const novaReserva = {id: nextId++, ...dados};
    reservas.push(novaReserva);

    return novaReserva;
  }

};