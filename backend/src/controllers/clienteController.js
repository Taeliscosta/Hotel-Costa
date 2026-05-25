let clientes = [];

const listarClientes = (req, res) => {
  res.json(clientes);
}; 

const cadastrarCliente = (req, res) => {
  const {nome, email, telefone} = req.body;

  const novoCliente = {
    id: Date.now(),
    nome,
    email,
    telefone
  };

  clientes.push(novoCliente);

  res.status(201).json({
    mensagem: "Cliente cadastrado com sucesso",
    cliente: novoCliente
  });
};

const atualizarCliente = (req, res) => {
  const {id} = req.params;

  const{nome, email, telefone} = req.body;

  const cliente = clientes.find(
    cliente => cliente.id == id
  );

  if (!cliente) {
    return res.status(404).json({
      mensagem: "Cliente não encontrado"
    });
  }

  cliente.nome = nome;
  cliente.email = email;
  cliente.telefone = telefone;

  res.json({
    mensagem: "Cliente atualizado com sucesso",
    cliente
  });
};

const deletarCliente = (req, res) => {
  const {id} = req.params;

  const clienteExiste = clientes.find(
    cliente => cliente.id == id
  );

  if (!clienteExiste) {
    return res.status(404).json({
      mensagem: "Cliente não encontrado"
    });
  }

  clientes = clientes.filter(
    cliente => cliente.id != id
  );

  res.json({
    mensagem: "Cliente removido com sucesso"
  });
};

module.exports = {
  listarClientes,
  cadastrarCliente,
  atualizarCliente,
  deletarCliente
};