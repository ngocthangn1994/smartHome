"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundMiddleware = void 0;
const AppError_1 = require("../utils/AppError");
const notFoundMiddleware = (req, res, next) => {
    next(new AppError_1.AppError(`Route not founded ${req.originalUrl}`, 404));
};
exports.notFoundMiddleware = notFoundMiddleware;
//# sourceMappingURL=notFoundMiddleware.js.map