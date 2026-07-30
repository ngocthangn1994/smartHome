// Users/
export type UserRole = "owner" | "member" | "admin";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  passWord: string;
  homeId: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

// Home//
export interface IHome {
  _id: string;
  name: string;
  address: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

// DeviceLog.

export interface IDeviceLog {
  _id: string;
  homeId: string;
  deviceId: string;
  previousState?: string;
  newState: string;
  source: "user" | "automationRule" | "system" | "home_assistant";
}

// Device

export type ConnectionMethod = "wifi" | "bluetooth" | "zigbee" | "zwave";

export type DeviceType =
  | "thermostat"
  | "smoke_detector"
  | "door_bell"
  | "camera"
  | "smart_plug"
  | "smart_light"
  | "water_leak_sensor"
  | "motion_sensor"
  | "door_lock"
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
  lastUpdatedAt: string;
  doorLock?: LockState;
  garageLock?: DoorState;
  sensor: SensorState;
}
export interface IDevice {
  _id: string;
  name: string;
  home: string;
  deviceType: DeviceType;
  status: Status;
  batteryLevel?: number;
  area: string;
  state: IDeviceState;
  haEntityId?: string;
  createdAt: string;
  updatedAt: string;
  brand?: string;
  modelDevice?: string;
  connectionMethod?: ConnectionMethod;
  ipAddress?: string;
  macAddress?: string;
  deviceImage?: string;
  description?: string;
}

// automationRule.

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

export interface IAutomationRule {
  _id: string;
  name: string;
  message: string;
  home: string;
  triggerDevice: string;
  triggerType: TriggerType;
  condition: Record<string, unknown>;
  actionDevice: string;
  actionType: ActionType;
  actionValue?: Record<string, unknown>;
  enable: boolean;
}

// alerts

export type AlertType =
  | "smoke_detected"
  | "motion_detected"
  | "battery_low"
  | "offline";
export type SeverityType = "low" | "medium" | "high" | "critical";

export interface IAlert {
  _id: string;
  homeId: string;
  deviceId?: string;
  message: string;
  type: AlertType;
  severity: SeverityType;
  createdAt: string;
  updatedAt: string;
}

// api response

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}
