import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";
import buildResponse from "../utils/buildResponse";
import User, { IUser } from "../models/User";
import { asyncHandler } from "../utils/asyncHandler";

interface AuthenticatedRequest extends Request {
  user?: IUser;
}

export const getMe = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    const user = req.user;

    if (!user) {
      throw new AppError("You are not logged in.", 401);
    }

    res
      .status(200)
      .json(buildResponse(true, "Successfully fetched current user", user));
  },
);

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new AppError("User not found by ID.", 404);
  }

  res
    .status(200)
    .json(buildResponse(true, "Successfully fetched user by ID", user));
});
// create user by id.

export const createUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, passWord, homeId, role } = req.body;
    if (!name || !passWord || !email) {
      throw new AppError(
        "Name, passWord, email are required to fill out.",
        400,
      );
    }
    const existUser = await User.findOne({ email });
    if (existUser) {
      throw new AppError(
        "The email has existed, please try different email",
        401,
      );
    }

    const user = await User.create({
      name,
      homeId,
      email,
      passWord,
      role,
    });
    res
      .status(201)
      .json(buildResponse(true, "Successfully create the new user", user));
  },
);

// delete user by id

export const deleteUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      throw new AppError("Can't delete user by Id.", 404);
    }
    res
      .status(200)
      .json(buildResponse(true, "Successfuly delete the user", user));
  },
);
// update user by id

export const updateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, homeId, email, passWord, role } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, passWord, homeId, role },
      { new: true, isValidate: true },
    );
    if (!user) {
      throw new AppError("Can't update user by Id.", 404);
    }
    res
      .status(200)
      .json(buildResponse(true, "Successfuly update the user", user));
  },
);

// get all user.

export const getAllUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find();

    res
      .status(200)
      .json(buildResponse(true, "Successfuly update the user", users));
  },
);
