import { Request, Response } from "express";
import * as teaService from "../services/tea_service";

export const getTea = async (req: Request, res: Response) => {
  const tea = teaService.getTea();

  res.json(tea).status(200);
};
