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
  },

  remover(id) {
    const tamanhoAntes = reservas.length;
    reservas = reservas.filter(reserva => reserva.id !== id);

    return reservas.length < tamanhoAntes;
  }

};