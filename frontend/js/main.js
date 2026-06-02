import {
  carregarClientes,
  configurarClienteForm
} from "./ui/clienteView.js";

import {
  carregarClientesSelect,
  carregarReservas,
  configurarReservaForm
} from "./ui/reservaView.js";

document.addEventListener("DOMContentLoaded", async () => {
  configurarClienteForm();
  configurarReservaForm();
  await carregarClientes();
  await carregarClientesSelect();
  await carregarReservas();
});