import { Router } from "express";
import userRoutes from "./users.routes";
import { loginController } from "../Controller/authentication.ts/loginController";
import { transactionsRouter } from "./transaction.routes";
import { JwtMiddleware } from "../middlewares/jwt";
import { logoutTransactionsController } from "../Controller/transactions/logoutController";
import { cnpjController } from "../services/cnpjController";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Hello World");
});

//Rota de login
routes.post("/login", loginController);

routes.use("/users", userRoutes);

//filtro
routes.use(JwtMiddleware);

// Endpoint para buscar dados do cnpj especificado
routes.get("/cnpj/:cnpj", cnpjController);

//Rota de logout
routes.use("/logout", logoutTransactionsController);

// Rotas de transação
routes.use("/transactions", transactionsRouter);

export default routes;
