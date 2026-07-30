import type { Request, Response } from "express";
import axios from "axios";
import mongoose from "mongoose";

import buildResponse from "../utils/buildResponse";
import { asyncHandler } from "../utils/asyncHandler";
import { AppError } from "../utils/AppError";

import Device from "../models/Device";
import User from "../models/User";

import { homeAssistantService } from "../services/homeAssistantService";

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    email?: string;
    homeId?: string;
  };
}

/*
|--------------------------------------------------------------------------
| Helper: Find device by MongoDB ID or Home Assistant entity ID
|--------------------------------------------------------------------------
*/

const findDeviceByIdOrHaEntityId = async (id: string) => {
  if (mongoose.Types.ObjectId.isValid(id)) {
    return Device.findById(id);
  }

  return Device.findOne({
    haEntityId: id,
  });
};

/*
|--------------------------------------------------------------------------
| Get devices belonging to logged-in user's home
|--------------------------------------------------------------------------
*/

export const getDevices = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    const user = req.user;

    if (!user) {
      throw new AppError("You are not logged in.", 401);
    }

    if (!user.homeId) {
      throw new AppError("User does not have a home assigned.", 400);
    }

    const devices = await Device.find({
      home: user.homeId,
    });

    res
      .status(200)
      .json(
        buildResponse(
          true,
          "Successfully fetched devices for this home",
          devices,
        ),
      );
  },
);
/*
|--------------------------------------------------------------------------
| Get one device
|--------------------------------------------------------------------------
*/

export const getDeviceById = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    if (!id || Array.isArray(id)) {
      throw new AppError("Invalid device ID.", 400);
    }

    const device = await findDeviceByIdOrHaEntityId(id);

    if (!device) {
      throw new AppError("Device not found.", 404);
    }

    res
      .status(200)
      .json(buildResponse(true, "Device fetched successfully.", device));
  },
);

/*
|--------------------------------------------------------------------------
| Create device
|--------------------------------------------------------------------------
*/

export const createDevice = asyncHandler(
  async (req: Request, res: Response) => {
    const {
      name,
      home,
      deviceType,
      status,
      batteryLevel,
      area,
      haEntityId,
      state,
    } = req.body;

    if (!name || !home || !deviceType || !area || !haEntityId) {
      throw new AppError(
        "Name, home, device type, area, and Home Assistant entity ID are required.",
        400,
      );
    }

    const existingDevice = await Device.findOne({
      haEntityId,
    });

    if (existingDevice) {
      throw new AppError(
        `Device with entity ID "${haEntityId}" already exists.`,
        409,
      );
    }

    const device = await Device.create({
      name,
      home,
      deviceType,
      status,
      batteryLevel,
      area,
      haEntityId,
      state,
    });

    res
      .status(201)
      .json(buildResponse(true, "Successfully created device.", device));
  },
);

/*
|--------------------------------------------------------------------------
| Delete device
|--------------------------------------------------------------------------
*/

export const deleteDevice = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    if (!id || Array.isArray(id)) {
      throw new AppError("Invalid device ID.", 400);
    }

    const device = await findDeviceByIdOrHaEntityId(id);

    if (!device) {
      throw new AppError("Can't find device to delete.", 404);
    }

    await Device.findByIdAndDelete(device._id);

    res
      .status(200)
      .json(buildResponse(true, "Successfully deleted the device."));
  },
);

/*
|--------------------------------------------------------------------------
| Update device
|--------------------------------------------------------------------------
*/

export const updateDevice = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    if (!id || Array.isArray(id)) {
      throw new AppError("Invalid device ID.", 400);
    }

    const existingDevice = await findDeviceByIdOrHaEntityId(id);

    if (!existingDevice) {
      throw new AppError("Can't find device to update.", 404);
    }

    const allowedUpdates = {
      name: req.body.name,
      home: req.body.home,
      deviceType: req.body.deviceType,
      status: req.body.status,
      batteryLevel: req.body.batteryLevel,
      area: req.body.area,
      state: req.body.state,
      haEntityId: req.body.haEntityId,
    };

    const device = await Device.findByIdAndUpdate(
      existingDevice._id,
      allowedUpdates,
      {
        new: true,
        runValidators: true,
      },
    );

    res
      .status(200)
      .json(buildResponse(true, "Successfully updated the device.", device));
  },
);

/*
|--------------------------------------------------------------------------
| Increase thermostat temperature
|--------------------------------------------------------------------------
*/

export const increaseTemperature = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    if (!id || Array.isArray(id)) {
      throw new AppError("Invalid device ID.", 400);
    }

    const device = await findDeviceByIdOrHaEntityId(id);

    if (!device) {
      throw new AppError("Can't find the thermostat.", 404);
    }

    if (device.deviceType !== "thermostat") {
      throw new AppError("This device is not a thermostat.", 400);
    }

    const targetTemperature = device.state?.targetTemperature ?? 72;
    const newTargetTemperature = targetTemperature + 1;

    await homeAssistantService.setTemperature(
      device.haEntityId,
      newTargetTemperature,
    );

    const thermostat = await Device.findByIdAndUpdate(
      device._id,
      {
        "state.targetTemperature": newTargetTemperature,
        "state.lastUpdatedAt": new Date(),
      },
      {
        new: true,
        runValidators: true,
      },
    );

    res
      .status(200)
      .json(
        buildResponse(true, "Temperature increased successfully.", thermostat),
      );
  },
);

/*
|--------------------------------------------------------------------------
| Decrease thermostat temperature
|--------------------------------------------------------------------------
*/

export const decreaseTemperature = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    if (!id || Array.isArray(id)) {
      throw new AppError("Invalid device ID.", 400);
    }

    const device = await findDeviceByIdOrHaEntityId(id);

    if (!device) {
      throw new AppError("Can't find the thermostat.", 404);
    }

    if (device.deviceType !== "thermostat") {
      throw new AppError("This device is not a thermostat.", 400);
    }

    const targetTemperature = device.state?.targetTemperature ?? 72;
    const newTargetTemperature = targetTemperature - 1;

    await homeAssistantService.setTemperature(
      device.haEntityId,
      newTargetTemperature,
    );

    const thermostat = await Device.findByIdAndUpdate(
      device._id,
      {
        "state.targetTemperature": newTargetTemperature,
        "state.lastUpdatedAt": new Date(),
      },
      {
        new: true,
        runValidators: true,
      },
    );

    res
      .status(200)
      .json(
        buildResponse(true, "Temperature decreased successfully.", thermostat),
      );
  },
);

/*
|--------------------------------------------------------------------------
| Turn on device
|--------------------------------------------------------------------------
*/

export const turnOnDevice = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    if (!id || Array.isArray(id)) {
      throw new AppError("Invalid device ID.", 400);
    }

    const device = await findDeviceByIdOrHaEntityId(id);

    if (!device) {
      throw new AppError("Can't find device.", 404);
    }

    await homeAssistantService.turnOn(device.haEntityId);

    const updatedDevice = await Device.findByIdAndUpdate(
      device._id,
      {
        "state.power": "on",
        "state.lastUpdatedAt": new Date(),
      },
      {
        new: true,
        runValidators: true,
      },
    );

    res
      .status(200)
      .json(
        buildResponse(true, "Successfully turned on device.", updatedDevice),
      );
  },
);

/*
|--------------------------------------------------------------------------
| Turn off device
|--------------------------------------------------------------------------
*/

export const turnOffDevice = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    if (!id || Array.isArray(id)) {
      throw new AppError("Invalid device ID.", 400);
    }

    const device = await findDeviceByIdOrHaEntityId(id);

    if (!device) {
      throw new AppError("Can't find device.", 404);
    }

    await homeAssistantService.turnOff(device.haEntityId);

    const updatedDevice = await Device.findByIdAndUpdate(
      device._id,
      {
        "state.power": "off",
        "state.lastUpdatedAt": new Date(),
      },
      {
        new: true,
        runValidators: true,
      },
    );

    res
      .status(200)
      .json(
        buildResponse(true, "Successfully turned off device.", updatedDevice),
      );
  },
);

/*
|--------------------------------------------------------------------------
| Get camera snapshot
|--------------------------------------------------------------------------
*/

export const getSnapshot = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id || Array.isArray(id)) {
    throw new AppError("Invalid device ID.", 400);
  }

  const device = await findDeviceByIdOrHaEntityId(id);

  if (!device) {
    throw new AppError("Can't find the device.", 404);
  }

  if (device.deviceType !== "camera" && device.deviceType !== "door_bell") {
    throw new AppError("This device is not a camera or doorbell.", 400);
  }

  const snapshotUrl = await homeAssistantService.getSnapshotUrl(
    device.haEntityId,
  );

  if (!snapshotUrl) {
    throw new AppError("No snapshot URL found.", 404);
  }

  const snapshotResponse = await axios.get(snapshotUrl, {
    responseType: "arraybuffer",
    headers: {
      Authorization: `Bearer ${process.env.HA_TOKEN}`,
    },
  });

  const rawContentType = snapshotResponse.headers["content-type"];

  const contentType: string =
    typeof rawContentType === "string"
      ? rawContentType
      : Array.isArray(rawContentType)
        ? rawContentType[0] || "image/jpeg"
        : "image/jpeg";

  const imageBuffer = Buffer.from(snapshotResponse.data);

  res.setHeader("Content-Type", contentType);
  res.setHeader("Cache-Control", "no-cache");

  res.status(200).send(imageBuffer);
});

/*
|--------------------------------------------------------------------------
| Get camera stream
|--------------------------------------------------------------------------
*/

export const getStream = asyncHandler(async (req: Request, res: Response) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

  if (!id) {
    throw new AppError("Invalid device ID.", 400);
  }

  const device = await findDeviceByIdOrHaEntityId(id);

  if (!device) {
    throw new AppError("Can't find the device.", 404);
  }

  if (device.deviceType !== "camera" && device.deviceType !== "door_bell") {
    throw new AppError("This device is not a camera or doorbell.", 400);
  }

  const streamUrl = await homeAssistantService.getStreamUrl(device.haEntityId);

  if (!streamUrl) {
    throw new AppError("No camera stream found.", 404);
  }

  const streamResponse = await axios.get(streamUrl, {
    responseType: "stream",
  });

  const rawContentType = streamResponse.headers["content-type"];

  const contentType: string =
    typeof rawContentType === "string"
      ? rawContentType
      : Array.isArray(rawContentType)
        ? rawContentType[0] || "multipart/x-mixed-replace"
        : "multipart/x-mixed-replace";

  res.setHeader("Content-Type", contentType);
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Connection", "keep-alive");

  streamResponse.data.pipe(res);

  req.on("close", () => {
    if (streamResponse.data && !streamResponse.data.destroyed) {
      streamResponse.data.destroy();
    }
  });
});
