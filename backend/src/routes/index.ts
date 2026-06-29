import deviceRouter from "./deviceRoutes";
import alertRouter from "./alertRoutes";
import userRouter from "./userRoutes";
import homeRouter from "./homeRoutes";
import automationRuleRouter from "./automationRuleRoutes";
import authRouter from "./authRoutes";
import { Router } from "express";

const router = Router();

router.use("/devices", deviceRouter);
router.use("/alerts", alertRouter);
router.use("/users", userRouter);
router.use("/homes", homeRouter);
router.use("/automation-rules", automationRuleRouter);
router.use("/auth", authRouter);

export default router;
