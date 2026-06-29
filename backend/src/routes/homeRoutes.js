"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homeController_1 = require("../controllers/homeController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", homeController_1.getHomes);
router.get("/:id", homeController_1.getHomeById);
router.post("/", homeController_1.createHome);
router.delete("/:id", homeController_1.deleteHome);
router.patch("/:id", homeController_1.updateHome);
exports.default = router;
//# sourceMappingURL=homeRoutes.js.map