let clientes = [];

let nextId = 1;

export const clienteModel = {

  listarTodos() {
    return clientes;
  },

  buscarPorId(id) {
    return clientes.find(cliente => cliente.id === id);
  },

  inserir({ nome, email, telefone }) {

    const novoCliente = {
      id: nextId++,
      nome,
      email,
      telefone
    };

    clientes.push(novoCliente);

    return novoCliente;
  },

  atualizar(id, dados) {

    const index = clientes.findIndex(
      cliente => cliente.id === id
    );

    if (index === -1) {
      return null;
    }

    clientes[index] = {
      ...clientes[index],
      ...dados
    };

    return clientes[index];
  },

  remover(id) {

    const tamanhoAntes = clientes.length;

    clientes = clientes.filter(
      cliente => cliente.id !== id
    );

    return clientes.length < tamanhoAntes;
  }

};