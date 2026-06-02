import { reservaService } from "../services/reservaService.js";
import { clienteService } from "../services/clienteService.js";
import { quartoService } from "../services/quartoService.js";

const lista = document.getElementById("reservasLista");
const form = document.getElementById("reservaForm");
const selectCliente = document.getElementById("clienteSelect");

function formatarData(data) {
  return new Date(data).toLocaleDateString("pt-BR");
}

export async function carregarClientesSelect() {
  const clientes = await clienteService.listar();

  selectCliente.innerHTML = "";

  clientes.forEach(cliente => {
    const option = document.createElement("option");
    option.value = cliente.id;
    option.textContent = cliente.nome;
    selectCliente.appendChild(option);
  });
}

export async function carregarReservas() {
  const reservas = await reservaService.listar();
  const clientes = await clienteService.listar();
  const quartos = await quartoService.listar();

  lista.innerHTML = "";

  reservas.forEach(reserva => {
    const cliente = clientes.find(
      c => c.id === reserva.clienteId
    );

    const quarto = quartos.find(
      q => q.id === reserva.quartoId
    );

    const item = document.createElement("li");
    item.className =
      "list-group-item d-flex justify-content-between align-items-center";
    item.innerHTML = `
      <div>
        <strong>${cliente?.nome || "Cliente"}</strong><br>
        Quarto ${quarto?.numero || reserva.quartoId}<br>
        ${formatarData(reserva.dataEntrada)} → ${formatarData(reserva.dataSaida)}
      </div>
      <button
        class="btn btn-danger btn-sm"
        data-id="${reserva.id}"
      >
        Remover
      </button>
    `;

    const botao = item.querySelector("button");
    botao.addEventListener("click", async () => {
      await reservaService.remover(reserva.id);
      await carregarReservas();
    });
    lista.appendChild(item);
  });
}

export function configurarReservaForm() {
  form.addEventListener("submit", async e => {
    e.preventDefault();
    await reservaService.criar({
      clienteId: Number(selectCliente.value),
      quartoId: Number(
        document.getElementById("quartoId").value
      ),
      dataEntrada:
        document.getElementById("dataEntrada").value,
      dataSaida:
        document.getElementById("dataSaida").value
    });

    form.reset();
    await carregarReservas();
    await carregarClientesSelect();
  });
}