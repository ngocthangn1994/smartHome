"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAlert = exports.deleteAlert = exports.createAlert = exports.getAlertById = exports.getAlerts = void 0;
const buildResponse_1 = __importDefault(require("../utils/buildResponse"));
const asyncHandler_1 = require("../utils/asyncHandler");
const AppError_1 = require("../utils/AppError");
const Alert_1 = __importDefault(require("../models/Alert"));
// get all alerts/
exports.getAlerts = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const alerts = await Alert_1.default.find();
    if (alerts.length === 0) {
        throw new AppError_1.AppError("No alert found", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Alert fetched successfully", alerts));
});
// get alert by Id.
exports.getAlertById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const alert = await Alert_1.default.findById(req.params.id);
    if (!alert) {
        throw new AppError_1.AppError("Alert not Found", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Alert fetched successfully", alert));
});
// create alert.
exports.createAlert = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { homeId, deviceId, message, type, severity } = req.body;
    if (!homeId || !message || !type || !severity) {
        throw new AppError_1.AppError("homeId, message, type, severity are required to fill out.", 400);
    }
    const alert = await Alert_1.default.create({
        homeId,
        message,
        type,
        severity,
    });
    res
        .status(201)
        .json((0, buildResponse_1.default)(true, "Successfully to create alert.", alert));
});
// delete Alert.
exports.deleteAlert = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const alert = await Alert_1.default.findByIdAndDelete(req.params.id);
    if (!alert) {
        throw new AppError_1.AppError("Can't find AlertID to delete the Alert.", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully to delete the alert."));
});
// update Alert
exports.updateAlert = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { homeId, deviceId, message, type, severity } = req.body;
    const alert = await Alert_1.default.findByIdAndUpdate(req.params.id, {
        homeId,
        deviceId,
        message,
        type,
        severity,
    }, { new: true, runValidators: true });
    if (!alert) {
        throw new AppError_1.AppError("Can't find AlertID to update the Alert.", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully to update the alert.", alert));
});
//# sourceMappingURL=alertControllert.js.map