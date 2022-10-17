import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

const listTransactionsController = async (req: Request, res: Response) => {
  const transaction = await prismaClient.transaction.findMany();

  return res.json(transaction);
};

export { listTransactionsController };
