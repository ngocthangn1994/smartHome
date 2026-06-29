"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deviceRoutes_1 = __importDefault(require("./deviceRoutes"));
const alertRoutes_1 = __importDefault(require("./alertRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const homeRoutes_1 = __importDefault(require("./homeRoutes"));
const automationRuleRoutes_1 = __importDefault(require("./automationRuleRoutes"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use("/devices", deviceRoutes_1.default);
router.use("/alerts", alertRoutes_1.default);
router.use("/users", userRoutes_1.default);
router.use("/homes", homeRoutes_1.default);
router.use("/automation-rules", automationRuleRoutes_1.default);
router.use("/auth", authRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map