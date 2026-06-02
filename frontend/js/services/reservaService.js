import {get, post, del} from "../api.js";

export const reservaService = {
    listar() {
        return get("/reservas");
    },

    criar(reserva) {
        return post("/reservas", reserva);
    },

    remover(id) {
        return del(`/reservas/${id}`);
    }
    
};