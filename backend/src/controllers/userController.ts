import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";
import buildResponse from "../utils/buildResponse";
import User from "../models/User";
import { asyncHandler } from "../utils/asyncHandler";

export const getUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find();
    if (!users) {
      throw new AppError("No user found", 404);
    }
    res
      .status(200)
      .json(buildResponse(true, "Successfully fetch all the users", users));
  },
);

// get user by Id:

export const getUserById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new AppError("Not found user by Id", 404);
    }
    res
      .status(200)
      .json(buildResponse(true, "Successfully fetch user by id", user));
  },
);

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
