import { Router } from "express";
import { listUserController } from "../Controller/ListUsersController";
import { createUsersController } from "../Controller/users/createUsersController";
import { deleteUsersController } from "../Controller/users/deleteUsersController";
import { editUsersController } from "../Controller/users/editUsersController";
import { findByIdUsersController } from "../Controller/users/findByIdUsersController";

const userRoutes = Router();

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
