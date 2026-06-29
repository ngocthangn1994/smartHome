"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.deleteUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const AppError_1 = require("../utils/AppError");
const buildResponse_1 = __importDefault(require("../utils/buildResponse"));
const User_1 = __importDefault(require("../models/User"));
const asyncHandler_1 = require("../utils/asyncHandler");
exports.getUsers = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const users = await User_1.default.find();
    if (!users) {
        throw new AppError_1.AppError("No user found", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully fetch all the users", users));
});
// get user by Id:
exports.getUserById = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const user = await User_1.default.findById(req.params.id);
    if (!user) {
        throw new AppError_1.AppError("Not found user by Id", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully fetch user by id", user));
});
// create user by id.
exports.createUser = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const { name, email, passWord, homeId, role } = req.body;
    if (!name || !passWord || !email) {
        throw new AppError_1.AppError("Name, passWord, email are required to fill out.", 400);
    }
    const user = await User_1.default.create({
        name,
        homeId,
        email,
        passWord,
        role,
    });
    res
        .status(201)
        .json((0, buildResponse_1.default)(true, "Successfully create the new user", user));
});
// delete user by id
exports.deleteUser = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const user = await User_1.default.findByIdAndDelete(req.params.id);
    if (!user) {
        throw new AppError_1.AppError("Can't delete user by Id.", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfuly delete the user", user));
});
// update user by id
exports.updateUser = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const { name, homeId, email, passWord, role } = req.body;
    const user = await User_1.default.findByIdAndUpdate(req.params.id, { name, email, passWord, homeId, role }, { new: true, isValidate: true });
    if (!user) {
        throw new AppError_1.AppError("Can't update user by Id.", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfuly update the user", user));
});
//# sourceMappingURL=userController.js.map