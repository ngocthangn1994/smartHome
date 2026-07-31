import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import User from "../models/User";
import env from "../config/env";
import { asyncHandler } from "../utils/asyncHandler";
import buildResponse from "../utils/buildResponse";
import { AppError } from "../utils/AppError";
import sendEmail from "../utils/email";

const JWT_SECRET = env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new AppError("Missing the JWT_SECRET, PLease try later", 401);
}

const generateToken = (userId: string, email: string) => {
  return jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: "7d" });
};

export const register = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, passWord } = req.body;
    if (!name || !email || !passWord) {
      throw new AppError(
        "Name, email, password are required to fill out.",
        400,
      );
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      throw new AppError(
        "The email have already used, please try different one",
        400,
      );
    }

    const user = await User.create({
      name,
      email,
      passWord,
    });
    const token = generateToken(user._id.toString(), user.email);

    res.status(201).json(
      buildResponse(true, "Successfully create the new user", {
        user,
        token,
      }),
    );
  },
);

export const login = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, passWord } = req.body;

    if (!email || !passWord) {
      throw new AppError("Email, password are required to fill out.", 400);
    }
    const verifyUser = await User.findOne({ email }).select("+passWord");
    if (!verifyUser) {
      throw new AppError("Email or password is wrong, please try again", 401);
    }
    const verifyPassword = await verifyUser.correctPassword(
      passWord,
      verifyUser.passWord,
    );
    if (!verifyPassword) {
      throw new AppError("The password's incorrect, please try again", 401);
    }
    const token = generateToken(verifyUser._id.toString(), verifyUser.email);

    // Frontend and backend are on different sites (homedevicecontrol.com vs
    // *.onrender.com), so the auth cookie must be SameSite=None + Secure to be
    // sent on cross-site requests. Default to prod-safe values; relax only for
    // explicit local development.
    const isDev = process.env.NODE_ENV === "development";
    res.cookie("token", token, {
      httpOnly: true,
      secure: !isDev,
      sameSite: isDev ? "lax" : "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json(
      buildResponse(true, "Successfully login to the account", {
        user: verifyUser,
        token,
      }),
    );
  },
);

export const logout = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // clearCookie must use the same attributes the cookie was set with,
    // otherwise the browser won't match and remove it.
    const isDev = process.env.NODE_ENV === "development";
    res.clearCookie("token", {
      httpOnly: true,
      secure: !isDev,
      sameSite: isDev ? "lax" : "none",
    });
    res.status(200).json(buildResponse(true, "successfully logout", ""));
  },
);

export const forgotPassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // 1. Get user based on the email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new AppError("There is no user with email address", 404);
    }
    // 2. Generate the random reset token
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });
    // 3. Send it to user's email.
    const resetUrl = `${req.protocol}://${req.get("host")}/api/auth/resetPassword/${resetToken}`;
    const message = `Forgot your password? submit a patch request with your new password and passwordConfirm to: ${resetUrl} \n If you didn't do ignore it.`;
    try {
      await sendEmail({
        email: user.email,
        subject: "Your password reset token (valid for 10 min)",
        message,
      });
    } catch (error) {
      user.set("passwordResetToken", undefined);
      user.set("passwordResetExpires", undefined);
      await user.save({ validateBeforeSave: false });
      throw new AppError("There are sth wrong when send to the email", 500);
    }
    res.status(200).json({
      status: "success",
      message: "Token sent to email",
    });
  },
);
export const resetPassword = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {},
);
