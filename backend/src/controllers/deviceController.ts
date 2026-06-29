import buildResponse from "../utils/buildResponse";
import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import Device from "../models/Device";
import { homeAssistantService } from "../services/homeAssistantService";
import { Readable } from "stream";
import axios from "axios";
// get all devices/
export const getDevices = asyncHandler(async (req: Request, res: Response) => {
  const devices = await Device.find();
  if (devices.length === 0) {
    throw new AppError("No device found", 404);
  }
  res
    .status(200)
    .json(buildResponse(true, "Device fetched successfully", devices));
});

// get device by Id.
export const getDeviceById = asyncHandler(
  async (req: Request, res: Response) => {
    const device = await Device.findById(req.params.id);
    if (!device) {
      throw new AppError("Device not Found", 404);
    }
    res
      .status(200)
      .json(buildResponse(true, "Device fetched successfully", device));
  },
);

// create device.

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

    if (!name || !home || !deviceType || !status || !area || !haEntityId) {
      throw new AppError(
        "Name, home, deviceType, status, area, haEntity are required to fill out.",
        400,
      );
    }
    const device = await Device.create({
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
      .json(buildResponse(true, "Successfully to create device.", device));
  },
);

// delete Device.

export const deleteDevice = asyncHandler(
  async (req: Request, res: Response) => {
    const device = await Device.findByIdAndDelete(req.params.id);
    if (!device) {
      throw new AppError("Can't find DeviceID to delete the Device.", 404);
    }
    res
      .status(200)
      .json(buildResponse(true, "Successfully to delete the device."));
  },
);

// update Device
export const updateDevice = asyncHandler(
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
    const device = await Device.findByIdAndUpdate(
      req.params.id,
      {
        name,
        home,
        deviceType,
        status,
        batteryLevel,
        area,
        state,
        haEntityId,
      },
      { new: true, runValidators: true },
    );
    if (!device) {
      throw new AppError("Can't find DeviceID to update the Device.", 404);
    }
    res
      .status(200)
      .json(buildResponse(true, "Successfully to update the device.", device));
  },
);

// Theremostat.
// Increase + Decrease the tempeareture.

export const increaseTemperature = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const device = await Device.findById(id);
    if (!device) {
      throw new AppError("Can't find the thermostat", 404);
    }
    if (device.deviceType !== "thermostat") {
      throw new AppError("This device is not a thermostat.", 400);
    }
    const targetTemperature = device.state.targetTemperature
      ? device.state.targetTemperature
      : 72;
    const newTargetTemperature = targetTemperature + 1;
    await homeAssistantService.setTemperature(
      device.haEntityId,
      newTargetTemperature,
    );

    const thermostat = await Device.findByIdAndUpdate(
      id,
      { "state.targetTemperature": newTargetTemperature },
      { new: true, runValidators: true },
    );
    res
      .status(201)
      .json(
        buildResponse(true, "Increase temperature for thermostat", thermostat),
      );
  },
);

export const decreaseTemperature = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const device = await Device.findById(id);
    if (!device) {
      throw new AppError("Can't find the thermostat", 404);
    }
    if (device.deviceType !== "thermostat") {
      throw new AppError("This device is not a thermostat.", 400);
    }
    const targetTemperature = device.state.targetTemperature
      ? device.state.targetTemperature
      : 72;
    const newTargetTemperature = targetTemperature - 1;
    await homeAssistantService.setTemperature(
      device.haEntityId,
      newTargetTemperature,
    );

    const thermostat = await Device.findByIdAndUpdate(
      id,
      { "state.targetTemperature": newTargetTemperature },
      { new: true, runValidators: true },
    );
    res
      .status(200)
      .json(
        buildResponse(true, "Decrease temperature for thermostat", thermostat),
      );
  },
);

// Turn on, off Device.

export const turnOnDevice = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const device = await Device.findById(id);
    if (!device) {
      throw new AppError("Can't find Device", 404);
    }
    await homeAssistantService.turnOn(device.haEntityId);
    const updateDevice = await Device.findByIdAndUpdate(
      id,
      { "state.power": "on", "state.lastUpdatedAt": new Date() },
      { new: true, runValidators: true },
    );
    res
      .status(200)
      .json(buildResponse(true, "Successfully turn on device", updateDevice));
  },
);
export const turnOffDevice = asyncHandler(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const device = await Device.findById(id);
    if (!device) {
      throw new AppError("Can't find Device", 404);
    }
    await homeAssistantService.turnOff(device.haEntityId);
    const updateDevice = await Device.findByIdAndUpdate(
      id,
      { "state.power": "off", "state.lastUpdatedAt": new Date() },
      { new: true, runValidators: true },
    );
    res
      .status(200)
      .json(buildResponse(true, "Successfully turn off device", updateDevice));
  },
);

// get snapshot and streamurl for camera and door-bell

export const getSnapshot = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;

  const device = await Device.findById(id);
  if (!device) {
    throw new AppError("Can't find the device.", 404);
  }
  const haResponse = await homeAssistantService.getSnapshot(device?.haEntityId);
  const contentType = haResponse.headers.get("content-type") || "image/jpeg";
  const imageBuffer = Buffer.from(await haResponse.arrayBuffer());

  res.setHeader("Content-Type", contentType);
  res.status(200).send(imageBuffer);
});

export const getStream = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;

  const device = await Device.findById(id);
  if (!device) {
    throw new AppError("Can't find the device.", 404);
  }
  if (device.deviceType !== "camera" && device.deviceType !== "door_bell") {
    throw new AppError("This device is not a camera or doorbell", 400);
  }
  const haResponse = await homeAssistantService.getStream(device?.haEntityId);

  if (!haResponse) {
    throw new AppError("No camera stream found", 404);
  }

  const contentType =
    haResponse.headers.get("content-type") || "multipart/x-mixed-replace";

  res.setHeader("Content-Type", contentType);
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  const nodeStream = Readable.fromWeb(haResponse.body as any);

  nodeStream.pipe(res);
  req.on("close", () => {
    nodeStream.destroy();
  });
});
