"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStream = exports.getSnapshot = exports.turnOffDevice = exports.turnOnDevice = exports.decreaseTemperature = exports.increaseTemperature = exports.updateDevice = exports.deleteDevice = exports.createDevice = exports.getDeviceById = exports.getDevices = void 0;
const buildResponse_1 = __importDefault(require("../utils/buildResponse"));
const asyncHandler_1 = require("../utils/asyncHandler");
const AppError_1 = require("../utils/AppError");
const Device_1 = __importDefault(require("../models/Device"));
const homeAssistantService_1 = require("../services/homeAssistantService");
const stream_1 = require("stream");
// get all devices/
exports.getDevices = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const devices = await Device_1.default.find();
    if (devices.length === 0) {
        throw new AppError_1.AppError("No device found", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Device fetched successfully", devices));
});
// get device by Id.
exports.getDeviceById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const device = await Device_1.default.findById(req.params.id);
    if (!device) {
        throw new AppError_1.AppError("Device not Found", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Device fetched successfully", device));
});
// create device.
exports.createDevice = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { name, home, deviceType, status, batteryLevel, area, haEntityId, state, } = req.body;
    if (!name || !home || !deviceType || !status || !area || !haEntityId) {
        throw new AppError_1.AppError("Name, home, deviceType, status, area, haEntity are required to fill out.", 400);
    }
    const device = await Device_1.default.create({
        name,
        home,
        deviceType,
        batteryLevel,
        status,
        area,
        state,
        haEntityId,
    });
    res
        .status(201)
        .json((0, buildResponse_1.default)(true, "Successfully to create device.", device));
});
// delete Device.
exports.deleteDevice = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const device = await Device_1.default.findByIdAndDelete(req.params.id);
    if (!device) {
        throw new AppError_1.AppError("Can't find DeviceID to delete the Device.", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully to delete the device."));
});
// update Device
exports.updateDevice = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { name, home, deviceType, status, batteryLevel, area, haEntityId, state, } = req.body;
    const device = await Device_1.default.findByIdAndUpdate(req.params.id, {
        name,
        home,
        deviceType,
        status,
        batteryLevel,
        area,
        state,
        haEntityId,
    }, { new: true, runValidators: true });
    if (!device) {
        throw new AppError_1.AppError("Can't find DeviceID to update the Device.", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully to update the device.", device));
});
// Theremostat.
// Increase + Decrease the tempeareture.
exports.increaseTemperature = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const id = req.params.id;
    const device = await Device_1.default.findById(id);
    if (!device) {
        throw new AppError_1.AppError("Can't find the thermostat", 404);
    }
    if (device.deviceType !== "thermostat") {
        throw new AppError_1.AppError("This device is not a thermostat.", 400);
    }
    const targetTemperature = device.state.targetTemperature
        ? device.state.targetTemperature
        : 72;
    const newTargetTemperature = targetTemperature + 1;
    await homeAssistantService_1.homeAssistantService.setTemperature(device.haEntityId, newTargetTemperature);
    const thermostat = await Device_1.default.findByIdAndUpdate(id, { "state.targetTemperature": newTargetTemperature }, { new: true, runValidators: true });
    res
        .status(201)
        .json((0, buildResponse_1.default)(true, "Increase temperature for thermostat", thermostat));
});
exports.decreaseTemperature = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const id = req.params.id;
    const device = await Device_1.default.findById(id);
    if (!device) {
        throw new AppError_1.AppError("Can't find the thermostat", 404);
    }
    if (device.deviceType !== "thermostat") {
        throw new AppError_1.AppError("This device is not a thermostat.", 400);
    }
    const targetTemperature = device.state.targetTemperature
        ? device.state.targetTemperature
        : 72;
    const newTargetTemperature = targetTemperature - 1;
    await homeAssistantService_1.homeAssistantService.setTemperature(device.haEntityId, newTargetTemperature);
    const thermostat = await Device_1.default.findByIdAndUpdate(id, { "state.targetTemperature": newTargetTemperature }, { new: true, runValidators: true });
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Decrease temperature for thermostat", thermostat));
});
// Turn on, off Device.
exports.turnOnDevice = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const id = req.params.id;
    const device = await Device_1.default.findById(id);
    if (!device) {
        throw new AppError_1.AppError("Can't find Device", 404);
    }
    await homeAssistantService_1.homeAssistantService.turnOn(device.haEntityId);
    const updateDevice = await Device_1.default.findByIdAndUpdate(id, { "state.power": "on", "state.lastUpdatedAt": new Date() }, { new: true, runValidators: true });
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully turn on device", updateDevice));
});
exports.turnOffDevice = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const id = req.params.id;
    const device = await Device_1.default.findById(id);
    if (!device) {
        throw new AppError_1.AppError("Can't find Device", 404);
    }
    await homeAssistantService_1.homeAssistantService.turnOff(device.haEntityId);
    const updateDevice = await Device_1.default.findByIdAndUpdate(id, { "state.power": "off", "state.lastUpdatedAt": new Date() }, { new: true, runValidators: true });
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully turn off device", updateDevice));
});
// get snapshot and streamurl for camera and door-bell
exports.getSnapshot = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const id = req.params.id;
    const device = await Device_1.default.findById(id);
    if (!device) {
        throw new AppError_1.AppError("Can't find the device.", 404);
    }
    const haResponse = await homeAssistantService_1.homeAssistantService.getSnapshot(device?.haEntityId);
    const contentType = haResponse.headers.get("content-type") || "image/jpeg";
    const imageBuffer = Buffer.from(await haResponse.arrayBuffer());
    res.setHeader("Content-Type", contentType);
    res.status(200).send(imageBuffer);
});
exports.getStream = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const id = req.params.id;
    const device = await Device_1.default.findById(id);
    if (!device) {
        throw new AppError_1.AppError("Can't find the device.", 404);
    }
    if (device.deviceType !== "camera" && device.deviceType !== "door_bell") {
        throw new AppError_1.AppError("This device is not a camera or doorbell", 400);
    }
    const haResponse = await homeAssistantService_1.homeAssistantService.getStream(device?.haEntityId);
    if (!haResponse) {
        throw new AppError_1.AppError("No camera stream found", 404);
    }
    const contentType = haResponse.headers.get("content-type") || "multipart/x-mixed-replace";
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    const nodeStream = stream_1.Readable.fromWeb(haResponse.body);
    nodeStream.pipe(res);
    req.on("close", () => {
        nodeStream.destroy();
    });
});
//# sourceMappingURL=deviceController.js.map