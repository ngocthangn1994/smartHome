import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import User from "../models/User";
import env from "../config/env";
import { asyncHandler } from "../utils/asyncHandler";
import buildResponse from "../utils/buildResponse";
import { AppError } from "../utils/AppError";

const JWT_SECRET = env.JWT_SECRET;

// Register
export const register = asyncHandler(async (req: Request, res: Response) => {
  const { email, name, passWord } = req.body;

  if (!email || !name || !passWord) {
    throw new AppError("Email, name, and password are required", 400);
  }

  const existEmail = await User.findOne({ email });

  if (existEmail) {
    throw new AppError("Email already exists. Try a new one", 409);
  }

  const hashedPassword = await bcrypt.hash(passWord, 10);

  const newUser = await User.create({
    email,
    name,
    passWord: hashedPassword,
  });

  res.status(201).json(
    buildResponse(true, "Successfully created account", {
      id: newUser._id,
      email: newUser.email,
      name: newUser.name,
    }),
  );
});

// Login
export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, passWord } = req.body;

  if (!email || !passWord) {
    throw new AppError("Email and password are required", 400);
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isPasswordCorrect = await bcrypt.compare(passWord, user.passWord);

  if (!isPasswordCorrect) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    JWT_SECRET as string,
    { expiresIn: "7d" },
  );

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json(
    buildResponse(true, "Successfully logged in", {
      id: user._id,
      email: user.email,
      name: user.name,
    }),
  );
});

// Logout
export const logout = asyncHandler(async (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.status(200).json(buildResponse(true, "Successfully logged out"));
});
