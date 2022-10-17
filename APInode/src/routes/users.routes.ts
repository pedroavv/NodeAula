import { Router } from "express";
import { listUserController } from "../Controller/listUsersController";
import { createUsersController } from "../Controller/users/createUsersController";
import { deleteUsersController } from "../Controller/users/deleteUsersController";
import { editUsersController } from "../Controller/users/editUsersController";
import { findByIdUsersController } from "../Controller/users/findByIdUsersController";

const userRoutes = Router();

/**
 * @openapi
 * /users:
 *  get:
 *   tags: [Usuários]
 *   summary: Busca todos os usuários
 *   description: Busca todos os usuários cadastrados no banco de dados
 *   responses:
 *    200:
 *     description: Listagem dos usuários
 */

// Listando usuarios
userRoutes.get("/", listUserController);

// Criando um usuario
userRoutes.post("/create", createUsersController);

// Atualizando usuario
userRoutes.put("/update", editUsersController);

//Deletando usuario
userRoutes.delete("/delete", deleteUsersController);

//Buscando usuario
userRoutes.get("/findbyId/:id", findByIdUsersController);

export default userRoutes;
