import {
  getAlerts,
  getAlertById,
  deleteAlert,
  updateAlert,
  createAlert,
} from "../controllers/alertControllert";
import { protect } from "../middeleware/authMiddleware";
import { Router } from "express";

const router = Router();

router.use(protect);
router.get("/", getAlerts);
router.get("/:id", getAlertById);
router.post("/", createAlert);
router.delete("/:id", deleteAlert);
router.patch("/:id", updateAlert);

export default router;
