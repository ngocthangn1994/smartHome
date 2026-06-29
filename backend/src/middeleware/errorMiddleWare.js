"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = require("../utils/AppError");
const buildResponse_1 = __importDefault(require("../utils/buildResponse"));
const errorMiddleware = (error, req, res, next) => {
    if (error instanceof AppError_1.AppError) {
        return res
            .status(error.statusCode)
            .json((0, buildResponse_1.default)(false, error.message));
    }
    console.error(error);
    return res.status(500).json((0, buildResponse_1.default)(false, "Internal Server Error"));
};
exports.default = errorMiddleware;
//# sourceMappingURL=errorMiddleWare.js.map