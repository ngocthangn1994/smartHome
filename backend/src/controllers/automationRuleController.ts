import AutomationRule from "../models/AutomationRule";
import { AppError } from "../utils/AppError";
import { asyncHandler } from "../utils/asyncHandler";
import buildResponse from "../utils/buildResponse";
import { Request, Response } from "express";

// get all automation rules.
export const getAutomationRules = asyncHandler(
  async (req: Request, res: Response) => {
    const automationRules = await AutomationRule.find();
    res
      .status(200)
      .json(
        buildResponse(
          true,
          "Successfully get all the Automation Rules",
          automationRules,
        ),
      );
  },
);
// get automation rule by Id.
export const getAutomationRuleById = asyncHandler(
  async (req: Request, res: Response) => {
    const automationRule = await AutomationRule.findById(req.params.id);
    if (!automationRule) {
      throw new AppError("Can't find the AutomationRule By Id", 404);
    }
    res
      .status(200)
      .json(
        buildResponse(
          true,
          "Successfully get the Automation Rule by Id",
          automationRule,
        ),
      );
  },
);
// delete automation rule by Id.
export const deleteAutomationRuleById = asyncHandler(
  async (req: Request, res: Response) => {
    const automationRule = await AutomationRule.findByIdAndDelete(
      req.params.id,
    );
    if (!automationRule) {
      throw new AppError("Can't find to delete the AutomationRule By Id", 404);
    }
    res
      .status(200)
      .json(
        buildResponse(
          true,
          "Successfully delete the Automation Rule by Id",
          automationRule,
        ),
      );
  },
);
// update automation rule by Id.
export const updateAutomationRuleById = asyncHandler(
  async (req: Request, res: Response) => {
    const {
      name,
      home,
      triggerDevice,
      triggerType,
      condition,
      actionDevice,
      actionValue,
      enable,
    } = req.body;
    const automationRule = await AutomationRule.findByIdAndUpdate(
      req.params.id,
      {
        name,
        home,
        triggerDevice,
        triggerType,
        condition,
        actionDevice,
        actionValue,
        enable,
      },
      { new: true, isValidate: true },
    );
    if (!automationRule) {
      throw new AppError("Can't find to update the AutomationRule By Id", 404);
    }
    res
      .status(200)
      .json(
        buildResponse(
          true,
          "Successfully update the Automation Rule by Id",
          automationRule,
        ),
      );
  },
);

// create automation rule.
export const createAutomationRule = asyncHandler(
  async (req: Request, res: Response) => {
    const {
      name,
      home,
      triggerDevice,
      triggerType,
      condition,
      actionDevice,
      actionType,
      enable,
    } = req.body;
    const automationRule = await AutomationRule.create({
      name,
      home,
      triggerDevice,
      triggerType,
      condition,
      actionDevice,
      actionType,
      enable,
    });
    if (!name || !triggerDevice || !triggerType || !actionDevice) {
      throw new AppError(
        "Name, home, triggerDevice... are required to fill out",
        400,
      );
    }
    res
      .status(200)
      .json(
        buildResponse(
          true,
          "Successfully create the Automation Rule by Id",
          automationRule,
        ),
      );
  },
);
