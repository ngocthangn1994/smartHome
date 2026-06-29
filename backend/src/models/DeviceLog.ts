import mongoose, { Schema, Document } from "mongoose";

export interface IDeviceLog extends Document {
  homeId: mongoose.Types.ObjectId;
  deviceId: mongoose.Types.ObjectId;
  previousState?: string;
  newState: string;
  source: "user" | "automationRule" | "system" | "home_assistant";
}

const deviceLogSchema = new Schema<IDeviceLog>(
  {
    homeId: {
      type: Schema.Types.ObjectId,
      ref: "Home",
      required: true,
    },
    deviceId: {
      type: Schema.Types.ObjectId,
      ref: "Device",
      required: true,
    },
    previousState: {
      type: String,
    },
    newState: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      enum: ["user", "automationRule", "system", "home_assistant"],
      required: true,
    },
  },
  { timestamps: true },
);

const DeviceLog = mongoose.model("DeviceLog", deviceLogSchema);

export default DeviceLog;
