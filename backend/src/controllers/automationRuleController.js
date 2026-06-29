"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAutomationRule = exports.updateAutomationRuleById = exports.deleteAutomationRuleById = exports.getAutomationRuleById = exports.getAutomationRules = void 0;
const AutomationRule_1 = __importDefault(require("../models/AutomationRule"));
const AppError_1 = require("../utils/AppError");
const asyncHandler_1 = require("../utils/asyncHandler");
const buildResponse_1 = __importDefault(require("../utils/buildResponse"));
// get all automation rules.
exports.getAutomationRules = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const automationRules = await AutomationRule_1.default.find();
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully get all the Automation Rules", automationRules));
});
// get automation rule by Id.
exports.getAutomationRuleById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const automationRule = await AutomationRule_1.default.findById(req.params.id);
    if (!automationRule) {
        throw new AppError_1.AppError("Can't find the AutomationRule By Id", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully get the Automation Rule by Id", automationRule));
});
// delete automation rule by Id.
exports.deleteAutomationRuleById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const automationRule = await AutomationRule_1.default.findByIdAndDelete(req.params.id);
    if (!automationRule) {
        throw new AppError_1.AppError("Can't find to delete the AutomationRule By Id", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully delete the Automation Rule by Id", automationRule));
});
// update automation rule by Id.
exports.updateAutomationRuleById = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { name, home, triggerDevice, triggerType, condition, actionDevice, actionValue, enable, } = req.body;
    const automationRule = await AutomationRule_1.default.findByIdAndUpdate(req.params.id, {
        name,
        home,
        triggerDevice,
        triggerType,
        condition,
        actionDevice,
        actionValue,
        enable,
    }, { new: true, isValidate: true });
    if (!automationRule) {
        throw new AppError_1.AppError("Can't find to update the AutomationRule By Id", 404);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully update the Automation Rule by Id", automationRule));
});
// create automation rule.
exports.createAutomationRule = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { name, home, triggerDevice, triggerType, condition, actionDevice, actionValue, enable, } = req.body;
    const automationRule = await AutomationRule_1.default.create({
        name,
        home,
        triggerDevice,
        triggerType,
        condition,
        actionDevice,
        actionValue,
        enable,
    });
    if (!name ||
        !home ||
        !triggerDevice ||
        !triggerType ||
        !condition ||
        !actionDevice ||
        !enable) {
        throw new AppError_1.AppError("Name, home, triggerDevice... are required to fill out", 400);
    }
    res
        .status(200)
        .json((0, buildResponse_1.default)(true, "Successfully create the Automation Rule by Id", automationRule));
});
//# sourceMappingURL=automationRuleController.js.map