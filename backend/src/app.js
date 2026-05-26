import express from "express";
import clienteRoutes from "./routes/clienteRoutes.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import quartoRoutes from "./routes/quartoRoutes.js";

const app = express();

app.use(express.json());

app.use(logger);

app.use("/clientes", clienteRoutes);

app.use("/quartos", quartoRoutes);

app.get("/", (req, res) => {

  res.json({
    api: "Hotel Costa API",
    versao: "1.0.0"
  });

});

app.use(errorHandler);

export default app;