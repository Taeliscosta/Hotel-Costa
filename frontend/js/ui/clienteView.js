import { clienteService } from "../services/clienteService.js";
import { carregarClientesSelect } from "./reservaView.js";
import { store } from "../state/store.js"

const lista = document.getElementById("clientesLista");
const form = document.getElementById("clienteForm");

export async function carregarClientes() {
  store.clientes = await clienteService.listar();
  document.getElementById("totalClientes").textContent = store.clientes.length;

  lista.innerHTML = "";

  store.clientes.forEach(cliente => {
    const item = document.createElement("li");
    item.className =
      "list-group-item d-flex justify-content-between align-items-center";
    item.innerHTML = `
      <span>
        ${cliente.nome}
      </span>
      <button
        class="btn btn-danger btn-sm"
        data-id="${cliente.id}"
      >
        Remover
      </button>
    `;

    const botao = item.querySelector("button");
    botao.addEventListener("click", async () => {
      await clienteService.remover(cliente.id);
      carregarClientes();
    });
    lista.appendChild(item);
  });
}

export function configurarClienteForm() {
  form.addEventListener("submit", async e => {
    e.preventDefault();
    await clienteService.criar({
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      telefone: document.getElementById("telefone").value,
      cpf: document.getElementById("cpf").value
    });

    form.reset();
    await carregarClientes();
    await carregarClientesSelect();
  });
}