import { Request, Response } from "express";
import { decodedTextSpanIntersectsWith } from "typescript";
import { prismaClient } from "../../database/prismaClient";
import { decodedToken } from "../../utils/jwtUtil";
import { required } from "../../utils/validations/required";

const createTransactionsController = async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const tokenWithoutBearer = token?.split(" ")[1];
  const decoded = decodedToken(tokenWithoutBearer);

  const body = req.body;
  const { title, value, type, date } = body;

  required(title, "title");
  required(value, "value");
  required(date, "date");
  required(decoded.id, "id");

  if (type != 0 && type != 1) {
    throw new Error("Type deve ser 0 ou 1");
  }

  const transaction = await prismaClient.transaction.create({
    data: {
      title,
      value,
      type,
      date: new Date(date),
      idUser: decoded.id,
    },
  });

  res.status(201).json(transaction);
};

export { createTransactionsController };
