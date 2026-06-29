"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
router.get("/", userController_1.getUsers);
router.get("/:id", userController_1.getUserById);
router.post("/", userController_1.createUser);
router.delete("/:id", userController_1.deleteUser);
router.patch("/:id", userController_1.updateUser);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map