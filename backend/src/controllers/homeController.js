"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHome = exports.deleteHome = exports.createHome = exports.getHomeById = exports.getHomes = void 0;
const buildResponse_1 = __importDefault(require("../utils/buildResponse"));
const AppError_1 = require("../utils/AppError");
const Home_1 = __importDefault(require("../models/Home"));
const asyncHandler_1 = require("../utils/asyncHandler");
// get all homes.
exports.getHomes = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const homes = await Home_1.default.find();
    if (!homes) {
        throw new AppError_1.AppError("No home found", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully fetch all the homes", homes));
});
// get home by Id:
exports.getHomeById = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const home = await Home_1.default.findById(req.params.id);
    if (!home) {
        throw new AppError_1.AppError("Not found home by Id", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully fetch home by id", home));
});
// create home by id.
exports.createHome = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const { name, address, ownerId } = req.body;
    if (!name || !address || !ownerId) {
        throw new AppError_1.AppError("Name, address, ownerId are required to fill out.", 400);
    }
    const home = await Home_1.default.create({
        name,
        address,
        ownerId,
    });
    res
        .status(201)
        .json((0, buildResponse_1.default)(true, "Successfully create the new home", home));
});
// delete home by id
exports.deleteHome = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const home = await Home_1.default.findByIdAndDelete(req.params.id);
    if (!home) {
        throw new AppError_1.AppError("Can't delete home by Id.", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfuly delete the home", home));
});
// update home by id
exports.updateHome = (0, asyncHandler_1.asyncHandler)(async (req, res, next) => {
    const { name, address, ownerId } = req.body;
    const home = await Home_1.default.findByIdAndUpdate(req.params.id, { name, address, ownerId }, { new: true, isValidate: true });
    if (!home) {
        throw new AppError_1.AppError("Can't update home by Id.", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfuly update the home", home));
});
//# sourceMappingURL=homeController.js.map