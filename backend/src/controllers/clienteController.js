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

module.exports = {
  listarClientes,
  cadastrarCliente
};