import { AppError } from "../utils/AppError";
import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response, NextFunction } from "express";
import env from "../config/env";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/User";

export const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // 1. getting token and check it's there.
    let token: string | undefined = "";
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = (req.headers.authorization as string).split(" ")[1];
    } else if (req.cookies?.token) {
      token = req.cookies.token;
    }

    if (!token) {
      throw new AppError(
        "You are not logged in, please log in to get access",
        401,
      );
    }
    console.log(token);
    // 2. Verification token.
    const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
    if (!decoded) {
      throw new AppError("Can't find decoded", 401);
    }
    const freshUser = await User.findById(decoded.userId);
    // 3. Check if user still exists.
    if (!freshUser) {
      throw new AppError("The user belong to this token no longer exist", 401);
    }
    (req as any).user = freshUser;

    next();
  },
);

export const restrictTo = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!user || !role.includes(user.role)) {
      throw new AppError("User is't allowed to delete the User", 403);
    }
    next();
  };
};
