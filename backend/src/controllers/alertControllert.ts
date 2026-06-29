import buildResponse from "../utils/buildResponse";
import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import Alert from "../models/Alert";

// get all alerts/
export const getAlerts = asyncHandler(async (req: Request, res: Response) => {
  const alerts = await Alert.find();
  if (alerts.length === 0) {
    throw new AppError("No alert found", 404);
  }
  res
    .status(200)
    .json(buildResponse(true, "Alert fetched successfully", alerts));
});

// get alert by Id.
export const getAlertById = asyncHandler(
  async (req: Request, res: Response) => {
    const alert = await Alert.findById(req.params.id);
    if (!alert) {
      throw new AppError("Alert not Found", 404);
    }
    res
      .status(200)
      .json(buildResponse(true, "Alert fetched successfully", alert));
  },
);

// create alert.

export const createAlert = asyncHandler(async (req: Request, res: Response) => {
  const { homeId, deviceId, message, type, severity } = req.body;

  if (!homeId || !message || !type || !severity) {
    throw new AppError(
      "homeId, message, type, severity are required to fill out.",
      400,
    );
  }
  const alert = await Alert.create({
    homeId,
    message,
    type,
    severity,
  });
  res
    .status(201)
    .json(buildResponse(true, "Successfully to create alert.", alert));
});

// delete Alert.

export const deleteAlert = asyncHandler(async (req: Request, res: Response) => {
  const alert = await Alert.findByIdAndDelete(req.params.id);
  if (!alert) {
    throw new AppError("Can't find AlertID to delete the Alert.", 404);
  }
  res
    .status(200)
    .json(buildResponse(true, "Successfully to delete the alert."));
});

// update Alert
export const updateAlert = asyncHandler(async (req: Request, res: Response) => {
  const { homeId, deviceId, message, type, severity } = req.body;
  const alert = await Alert.findByIdAndUpdate(
    req.params.id,
    {
      homeId,
      deviceId,
      message,
      type,
      severity,
    },
    { new: true, runValidators: true },
  );
  if (!alert) {
    throw new AppError("Can't find AlertID to update the Alert.", 404);
  }
  res
    .status(200)
    .json(buildResponse(true, "Successfully to update the alert.", alert));
});
