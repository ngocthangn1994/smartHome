import mongoose, { Schema, Document } from "mongoose";

export type TriggerType =
  | "smoke_detected"
  | "motion_detected"
  | "state_change"
  | "temperature"
  | "time";
export type ActionType =
  | "turn_on"
  | "turn_off"
  | "set_temperature"
  | "send_alert";

export interface IAutomationRule extends Document {
  name: string;
  message: string;
  home: mongoose.Types.ObjectId;
  triggerDevice: string;
  triggerType: TriggerType;
  condition: Record<string, unknown>;
  actionDevice: string;
  actionType: ActionType;
  actionValue?: Record<string, unknown>;
  enable: boolean;
}

const automationRuleSchema = new Schema<IAutomationRule>(
  {
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    home: {
      type: Schema.Types.ObjectId,
    },
    triggerDevice: {
      type: String,
      required: true,
    },
    triggerType: {
      type: String,
      enum: [
        "smoke_detected",
        "motion_detected",
        "state_change",
        "temperature",
        "time",
      ],
      required: true,
    },
    condition: {
      type: Schema.Types.Mixed,
      default: {},
    },
    actionDevice: {
      type: String,
      required: true,
    },
    actionType: {
      type: String,
      enum: ["turn_on", "turn_off", "set_temperature", "send_alert"],
    },
    enable: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

const AutomationRule = mongoose.model("AutomationRule", automationRuleSchema);

export default AutomationRule;
