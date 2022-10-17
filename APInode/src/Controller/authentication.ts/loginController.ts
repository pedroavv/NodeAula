import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";
import jwt from "jsonwebtoken";

const loginController = async (req: Request, Res: Response) => {
  const loginData = req.body;

  required(loginData.email, "email");
  required(loginData, "password");

  const user = await prismaClient.user.findUnique({
    where: {
      email: loginData.email,
    },
  });

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  //Verificando se a senha está correta
  const passwordMatch = await bcrypt.compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new Error("Email ou senha incorretos");
  }

  if (!process.env.JWT_SECRET) {
    throw new Error("JWT not defined");
  }

  // Gerando token de autenticação
  const token = jwt.sign(
    {
      id: user.id,
      nome: user.name,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  await prismaClient.token.create({
    data: {
      token,
      idUser: user.id,
    },
  });

  return Res.json({
    token,
  });
};
export { loginController };
