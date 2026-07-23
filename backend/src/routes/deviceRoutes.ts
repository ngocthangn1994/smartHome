import {
  getDevices,
  getDeviceById,
  deleteDevice,
  updateDevice,
  createDevice,
  increaseTemperature,
  decreaseTemperature,
  turnOffDevice,
  turnOnDevice,
  getSnapshot,
  getStream,
} from "../controllers/deviceController";
import { Router } from "express";
import { protect } from "../middeleware/authMiddleware";
const router = Router();

router.use(protect);
router.get("/", getDevices);
router.get("/:id", getDeviceById);
router.post("/", createDevice);
router.delete("/:id", deleteDevice);
router.patch("/:id", updateDevice);

// thermostat
router.patch("/:id/thermostat/increase", increaseTemperature);
router.patch("/:id/thermostat/decrease", decreaseTemperature);

// power routes.
router.patch("/:id/turn-on", turnOnDevice);
router.patch("/:id/turn-off", turnOffDevice);

// camera routes.
router.get("/:id/camera/snapshot", getSnapshot);
router.get("/:id/camera/stream", getStream);

export default router;
