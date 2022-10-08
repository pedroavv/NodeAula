import express, { Request, Response } from "express";
import "express-async-errors";
import routes from "./routes/routes";
import { ErrorMiddleware } from "./middlewares/error";

const app = express();

app.use(express.json());

//Rotas
app.use(routes);

//Erros
app.use(ErrorMiddleware);

//Iniciando servidor
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
