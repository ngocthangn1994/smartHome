import mongoose, { Document } from "mongoose";
export type DeviceType = "thermostat" | "smoke_detector" | "door_bell" | "camera" | "smart_plug";
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
}
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
declare const Device: mongoose.Model<IDevice, {}, {}, {}, mongoose.Document<unknown, {}, IDevice, {}, mongoose.DefaultSchemaOptions> & IDevice & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IDevice>;
export default Device;
//# sourceMappingURL=Device.d.ts.map