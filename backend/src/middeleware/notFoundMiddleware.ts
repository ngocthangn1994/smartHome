import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";

export const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next(new AppError(`Route not founded ${req.originalUrl}`, 404));
};
