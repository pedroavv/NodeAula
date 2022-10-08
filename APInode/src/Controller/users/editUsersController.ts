import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";

const editUsersController = async (req: Request, res: Response) => {
  const user = req.body;

  required(user.id, "id");

  const editedUser = await prismaClient.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
  });
  res.json(editedUser);
};
export { editUsersController };
