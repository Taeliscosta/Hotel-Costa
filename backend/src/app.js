import express from "express";
import clienteRoutes from "./routes/clienteRoutes.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import quartoRoutes from "./routes/quartoRoutes.js";
import reservaRoutes from "./routes/reservaRoutes.js";
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use(logger);

const usuarios = [
  {id: 1, nome: 'Taélis Costa', email: 'taeliscosta11@gmail.com', senha: '12345678'} 
];

app.post("/login", (req, res) => {
  const { email, senha } = req.body;
  const usuario = usuarios.find((u) => u.email === email && u.senha === senha);

  if (!usuario) {
    return res.status(401).json({ message: 'E-mail ou senha inválidos.'});
  }

  const {senha: _, ...semSenha} = usuario;
  res.json(semSenha);
});

app.use("/clientes", clienteRoutes);

app.use("/quartos", quartoRoutes);

app.use("/reservas", reservaRoutes);

app.get("/", (req, res) => {

  res.json({
    api: "Hotel Costa API",
    versao: "1.0.0"
  });

});

app.use(errorHandler);

export default app;