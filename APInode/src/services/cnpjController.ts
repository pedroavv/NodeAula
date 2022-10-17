import axios from "axios";
import { Request, Response } from "express";

const cnpjController = async (req: Request, res: Response) => {
  const { cnpj } = req.params;

  if (cnpj.length != 14) {
    throw new Error("CNPJ inválido");
  }

  if (cnpj.length != 14) {
    throw new Error("CNPJ inválido");
  }

  const url = `https://www.receitaws.com.br/v1/cnpj/${cnpj}`;

  const response = await axios.get(url);

  return res.json(response.data);
};

export { cnpjController };
