import { Router } from "express";
import { prismaClient } from "../database/prismaClient";

const userRoutes = Router();

userRoutes.get("/", async (req, res) => {
  const usersList = await prismaClient.user.findMany();

  return res.json(usersList);
  
});

// Criando um usuario
userRoutes.post("/create", async (req, res) => {
  const user = req.body;

  const createdUser = await prismaClient.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
  });

  res.json(createdUser);
});

userRoutes.put("/update", (req, res) => {
  res.send("Atualizando usuario");
});

userRoutes.get("/findbyId/:id", (req, res) => {
  res.send("Buscando usuario");
});

export default userRoutes;
