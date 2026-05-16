const express = require("express");

const app = express();

app.use(express.json());

const clienteRoutes = require("./routes/clienteRoutes");

app.use("/clientes", clienteRoutes);

app.get("/", (req, res) => {
  res.send("API Hotel Costa funcionando!");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});