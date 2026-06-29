"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = exports.register = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = __importDefault(require("../models/User"));
const env_1 = __importDefault(require("../config/env"));
const asyncHandler_1 = require("../utils/asyncHandler");
const buildResponse_1 = __importDefault(require("../utils/buildResponse"));
const AppError_1 = require("../utils/AppError");
const JWT_SECRET = env_1.default.JWT_SECRET;
// Register
exports.register = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { email, name, passWord } = req.body;
    if (!email || !name || !passWord) {
        throw new AppError_1.AppError("Email, name, and password are required", 400);
    }
    const existEmail = await User_1.default.findOne({ email });
    if (existEmail) {
        throw new AppError_1.AppError("Email already exists. Try a new one", 409);
    }
    const hashedPassword = await bcryptjs_1.default.hash(passWord, 10);
    const newUser = await User_1.default.create({
        email,
        name,
        passWord: hashedPassword,
    });
    res.status(201).json((0, buildResponse_1.default)(true, "Successfully created account", {
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,
    }));
});
// Login
exports.login = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { email, passWord } = req.body;
    if (!email || !passWord) {
        throw new AppError_1.AppError("Email and password are required", 400);
    }
    const user = await User_1.default.findOne({ email });
    if (!user) {
        throw new AppError_1.AppError("Invalid email or password", 401);
    }
    const isPasswordCorrect = await bcryptjs_1.default.compare(passWord, user.passWord);
    if (!isPasswordCorrect) {
        throw new AppError_1.AppError("Invalid email or password", 401);
    }
    const token = jsonwebtoken_1.default.sign({
        userId: user._id,
        email: user.email,
    }, JWT_SECRET, { expiresIn: "7d" });
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json((0, buildResponse_1.default)(true, "Successfully logged in", {
        id: user._id,
        email: user.email,
        name: user.name,
    }));
});
// Logout
exports.logout = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "lax",
        secure: false,
    });
    res.status(200).json((0, buildResponse_1.default)(true, "Successfully logged out"));
});
//# sourceMappingURL=authController.js.map