const listarClientes = (req, res) => {
  res.json({
    mensagem: "Lista de clientes"
  });
};

module.exports = {
  listarClientes
};