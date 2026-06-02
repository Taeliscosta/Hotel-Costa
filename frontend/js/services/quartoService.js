import { get } from "../api.js";

export const quartoService = {
  listar() {
    return get("/quartos");
  },

  buscarPorId(id) {
    return get(`/quartos/${id}`);
  }
};