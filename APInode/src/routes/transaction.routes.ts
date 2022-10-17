import { Router } from "express";
import { createTransactionsController } from "../Controller/transactions/createTransactionsController";
import { deleteTransactionsController } from "../Controller/transactions/deleteTransactionsController";
import { listTransactionsController } from "../Controller/transactions/listTransactionsController";
import { logoutTransactionsController } from "../Controller/transactions/logoutController";
import { JwtMiddleware } from "../middlewares/jwt";

const transactionsRouter = Router();

transactionsRouter.get("/", listTransactionsController);

// Rota para criar uma transação
transactionsRouter.post("/create", JwtMiddleware, createTransactionsController);

//deleter transaçao
transactionsRouter.delete("/delete", deleteTransactionsController);

//Logout
transactionsRouter.post("/logout", logoutTransactionsController);

export { transactionsRouter };
