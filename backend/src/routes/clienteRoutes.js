const express = require("express");

const router = express.Router();

const {
  listarClientes, 
  cadastrarCliente,
  atualizarCliente,
  deletarCliente
} = require("../controllers/clienteController");

router.get("/", listarClientes);

router.post("/", cadastrarCliente);

router.put("/:id", atualizarCliente);

router.delete("/:id", deletarCliente);

module.exports = router;