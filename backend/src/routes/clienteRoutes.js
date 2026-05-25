const express = require("express");

const router = express.Router();

const {
  listarClientes, 
  cadastrarCliente
} = require("../controllers/clienteController");

router.get("/", listarClientes);

router.post("/", cadastrarCliente);

module.exports = router;