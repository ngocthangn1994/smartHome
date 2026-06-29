"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alertControllert_1 = require("../controllers/alertControllert");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", alertControllert_1.getAlerts);
router.get("/:id", alertControllert_1.getAlertById);
router.post("/", alertControllert_1.createAlert);
router.delete("/:id", alertControllert_1.deleteAlert);
router.patch("/:id", alertControllert_1.updateAlert);
exports.default = router;
//# sourceMappingURL=alertRoutes.js.map