import mongoose, { Schema, Document } from "mongoose";

export type AlertType =
  | "smoke_detected"
  | "motion_detected"
  | "battery_low"
  | "offline";
export type SeverityType = "low" | "medium" | "high" | "critical";

export interface IAlert extends Document {
  homeId: mongoose.Types.ObjectId;
  deviceId?: mongoose.Types.ObjectId;
  message: string;
  type: AlertType;
  severity: SeverityType;
  createdAt: Date;
  updatedAt: Date;
}

const alertSchema = new Schema<IAlert>(
  {
    homeId: {
      type: Schema.Types.ObjectId,
      ref: "Home",
      required: true,
    },
    deviceId: {
      type: Schema.Types.ObjectId,
      ref: "Device",
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["smoke_detected", "motion_detected", "battery_low", "offline"],
      required: true,
    },
    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      default: "low",
    },
  },
  { timestamps: true },
);

const Alert = mongoose.model("Alert", alertSchema);

export default Alert;
