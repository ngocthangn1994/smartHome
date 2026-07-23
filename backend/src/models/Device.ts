import mongoose, { Schema, Document } from "mongoose";

export type DeviceType =
  | "thermostat"
  | "smoke_detector"
  | "door_bell"
  | "camera"
  | "smart_plug"
  | "smart_light"
  | "door_lock"
  | "water_leak_sensor"
  | "motion_sensor"
  | "garage_door"
  | "window_sensor"
  | "alarm_panel";
export type LockState = "locked" | "unlocked" | "jammed" | "unknown";
export type DoorState = "open" | "closed" | "opening" | "closing" | "unknown";
export type SensorState = "open" | "closed" | "unknown";
export type Status = "online" | "offline" | "unknown";
export type PowerState = "on" | "off" | "unknown";
export type HvacMode = "heat" | "cool" | "fan_only" | "auto";
export interface IDeviceState {
  power?: PowerState;
  hvacMode?: HvacMode;
  currentTemperature?: number;
  targetTemperature?: number;
  smokeDetected?: boolean;
  motionDetected?: boolean;
  snapshotUrl?: string;
  streamUrl?: string;
  lastUpdatedAt: Date;
  doorLock?: LockState;
  garageLock?: DoorState;
  sensor?: SensorState;
}

const deviceStateSchema = new Schema<IDeviceState>({
  power: {
    type: String,
    enum: ["on", "off", "unknown"],
  },
  hvacMode: {
    type: String,
    enum: ["heat", "cool", "fan_only", "auto"],
  },
  currentTemperature: {
    type: Number,
  },
  targetTemperature: {
    type: Number,
  },
  smokeDetected: {
    type: Boolean,
  },
  motionDetected: {
    type: Boolean,
  },
  snapshotUrl: {
    type: String,
  },
  streamUrl: {
    type: String,
  },
  doorLock: {
    type: String,
    enum: ["locked", "unlocked", "jammed", "unknown"],
  },
  garageLock: {
    type: String,
    enum: ["open", "closed", "opening", "closing", "unknown"],
  },
  sensor: {
    type: String,
    enum: ["open", "closed", "unknown"],
  },
});

export interface IDevice extends Document {
  name: string;
  home: mongoose.Types.ObjectId;
  deviceType: DeviceType;
  status: Status;
  batteryLevel?: number;
  area: string;
  state: IDeviceState;
  haEntityId: string;
  createdAt: Date;
  updatedAt: Date;
}

const deviceSchema = new Schema<IDevice>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    home: {
      type: Schema.Types.ObjectId,
      ref: "Home",
      required: true,
    },
    deviceType: {
      type: String,
      enum: [
        "thermostat",
        "smoke_detector",
        "door_bell",
        "camera",
        "smart_plug",
        "smart_light",
        "door_lock",
        "water_leak_sensor",
        "motion_sensor",
        "garage_door",
        "window_sensor",
        "alarm_panel",
      ],
      required: true,
    },
    status: {
      type: String,
      enum: ["online", "offline", "unknown"],
      required: true,
      default: "unknown",
    },
    batteryLevel: {
      type: Number,
      min: 0,
      max: 100,
    },
    state: {
      type: deviceStateSchema,
      default: {},
    },
    area: {
      type: String,
      required: true,
      trim: true,
    },
    haEntityId: {
      required: true,
      type: String,
    },
  },
  { timestamps: true },
);

const Device = mongoose.model<IDevice>("Device", deviceSchema);

export default Device;
