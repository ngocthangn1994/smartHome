import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";
import buildResponse from "../utils/buildResponse";

const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json(buildResponse(false, error.message));
  }
  console.error(error);
  return res.status(500).json(buildResponse(false, "Internal Server Error"));
};
export default errorMiddleware;
