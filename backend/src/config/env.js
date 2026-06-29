"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const env = {
    PORT: process.env.PORT || 3500,
    MONGODB_URI: process.env.MONGODB_URI ||
        "mongodb+srv://ngocthangn1994_db_user:Michealnguyen18@cluster0.s2nlj9w.mongodb.net/",
    JWT_SECRET: process.env.JWT_SECRET || "ngocthang18",
    CLIENT: process.env.CLIENT || "http://localhost:5173",
    HA_URL: process.env.HA_URL || "http://homeassistant.local:8123",
    HA_TOKEN: process.env.HA_TOKEN ||
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkYjM4MjY2NTI4ZjU0YTFlYjBkOTc2ZjQzMjQwNTdkMiIsImlhdCI6MTc4MjQzODQ4MywiZXhwIjoyMDk3Nzk4NDgzfQ.--hBaztgo1WJYXQy3ldYKHaV45-Rid03hpweDO5pNfc",
};
exports.default = env;
//# sourceMappingURL=env.js.map