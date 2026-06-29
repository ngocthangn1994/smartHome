"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorMiddleWare_1 = __importDefault(require("./middeleware/errorMiddleWare"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const notFoundMiddleware_1 = require("./middeleware/notFoundMiddleware");
const index_1 = __importDefault(require("./routes/index"));
const env_1 = __importDefault(require("./config/env"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: env_1.default.CLIENT,
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server's healthy.",
    });
});
app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server's healthy.",
    });
});
app.use("/api", index_1.default);
app.use(notFoundMiddleware_1.notFoundMiddleware);
app.use(errorMiddleWare_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map