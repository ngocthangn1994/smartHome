"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const automationRuleController_1 = require("../controllers/automationRuleController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", automationRuleController_1.getAutomationRules);
router.get("/:id", automationRuleController_1.getAutomationRuleById);
router.post("/", automationRuleController_1.createAutomationRule);
router.delete("/:id", automationRuleController_1.deleteAutomationRuleById);
router.patch("/:id", automationRuleController_1.updateAutomationRuleById);
exports.default = router;
//# sourceMappingURL=automationRuleRoutes.js.map