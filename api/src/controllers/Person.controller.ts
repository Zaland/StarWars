import { Request, Response, NextFunction } from "express";

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.params);
    res.status(200).json("test");
  } catch (error) {
    next(error);
  }
};
