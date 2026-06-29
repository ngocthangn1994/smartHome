import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import buildResponse from "../utils/buildResponse";

type RequestValidationSchema = {
  body?: z.ZodTypeAny;
  params?: z.ZodTypeAny;
  query?: z.ZodTypeAny;
};

const validateRequest = (schema: RequestValidationSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (schema.body) {
        req.body = schema.body.parse(req.body);
      }
      if (schema.params) {
        req.params = schema.params.parse(
          req.params,
        ) as unknown as Request["params"];
      }
      if (schema.query) {
        req.query = schema.query.parse(
          req.query,
        ) as unknown as Request["query"];
      }
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json(
          buildResponse(false, "Validation Failed", {
            errors: error.issues.map((issue) => ({
              path: issue.path.join("."),
              message: issue.message,
            })),
          }),
        );
      }
      next(error);
    }
  };
};
