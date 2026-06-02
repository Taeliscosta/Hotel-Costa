import {get, post, del} from "../api.js";

export const clienteService = {
    listar() {
        return get("/clientes");
    },

    criar(cliente) {
        return post("/clientes", cliente);
    },

    remover(id) {
        return del(`/clientes/${id}`);
    }

};