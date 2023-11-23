import { Request, Response } from "express";

export const getTea = async (req: Request, res: Response) => {
  const drink = {
    drinkType: "Tea",
    name: "Green",
  };

  res.json(drink).status(200);
};
