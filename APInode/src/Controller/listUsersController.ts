import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

const listUserController = async (req: Request, res: Response) => {
  const usersList = await prismaClient.user.findMany();

  return res.json(usersList);
};
export { listUserController };
