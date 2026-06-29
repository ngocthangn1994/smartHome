import {
  createAutomationRule,
  getAutomationRuleById,
  getAutomationRules,
  deleteAutomationRuleById,
  updateAutomationRuleById,
} from "../controllers/automationRuleController";

import { Router } from "express";

const router = Router();
router.get("/", getAutomationRules);
router.get("/:id", getAutomationRuleById);
router.post("/", createAutomationRule);
router.delete("/:id", deleteAutomationRuleById);
router.patch("/:id", updateAutomationRuleById);

export default router;
