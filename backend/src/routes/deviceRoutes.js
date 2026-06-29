"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deviceController_1 = require("../controllers/deviceController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", deviceController_1.getDevices);
router.get("/:id", deviceController_1.getDeviceById);
router.post("/", deviceController_1.createDevice);
router.delete("/:id", deviceController_1.deleteDevice);
router.patch("/:id", deviceController_1.updateDevice);
// thermostat
router.patch("/:id/thermostat/increase", deviceController_1.increaseTemperature);
router.patch("/:id/thermostat/decrease", deviceController_1.decreaseTemperature);
// power routes.
router.patch("/:id/turn-on", deviceController_1.turnOnDevice);
router.patch("/:id/turn-off", deviceController_1.turnOffDevice);
// camera routes.
router.get("/:id/camera/snapshot", deviceController_1.getSnapshot);
router.get("/:id/camera/stream", deviceController_1.getStream);
exports.default = router;
//# sourceMappingURL=deviceRoutes.js.map