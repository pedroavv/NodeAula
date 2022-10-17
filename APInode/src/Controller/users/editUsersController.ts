import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";
import bcrypt from "bcrypt";

const editUsersController = async (req: Request, res: Response) => {
  const user = req.body;

  required(user.id, "id");

  const cryptPassword = await bcrypt.hash(user.password || " ", 10);

  const editedUser = await prismaClient.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: user.name,
      email: user.email,
      password: user.password ? cryptPassword : undefined,
    },
  });
  res.json(editedUser);
};
export { editUsersController };
