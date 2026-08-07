import type { IDevice } from "../../../types";
import Thermostat from "../cards/Thermostat";
import SmokeDetector from "../cards/SmokeDetector";
import Camera from "../cards/Camera";
import SmartPlug from "../cards/SmartPlug";
import { FaCircle } from "react-icons/fa6";
import SmartLight from "../cards/SmartLight";
import DoorLock from "../cards/DoorLock";
import WaterLeakSensor from "../cards/WaterLeakSensor";
import MotionSensor from "../cards/MotionSensor";
import GarageDoor from "../cards/GarageDoor";
import WindowSensor from "../cards/WindowSensor";

interface DeviceProp {
  device: IDevice;
}

function Device({ device }: DeviceProp) {
  const nameDeviceType: Record<string, string> = {
    thermostat: "Thermostart",
    door_bell: "Door Bell",
    smart_plug: "Smart Plug",
    smoke_detector: "Smoke Detector",
    door_lock: "Door Lock",
    smart_light: "Smart Light",
    water_leak_sensor: "Water Leak Sensor",
    motion_sensor: "Motion Sensor",
    garage_door: "Garage Door",
    window_sensor: "Window Sensor",
    alarm_panel: "Alarm Panel",
    camera: "Camera",
  };
  return (
    <>
      <div className="bg-white border border-slate-200 px-3 py-3 rounded-2xl shadow-sm space-y-3 hover:shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold">{nameDeviceType[device.deviceType]}</p>
            <p className="text-slate-600">{device.area}</p>
          </div>
          <FaCircle className="text-green-600" />
        </div>
        {device.deviceType === "thermostat" ? (
          <Thermostat device={device} />
        ) : null}
        {device.deviceType === "smart_plug" ? (
          <SmartPlug device={device} />
        ) : null}
        {device.deviceType === "smoke_detector" ? (
          <SmokeDetector device={device} />
        ) : null}
        {device.deviceType === "door_bell" ? <Camera device={device} /> : null}
        {device.deviceType === "smart_light" ? (
          <SmartLight device={device} />
        ) : null}
        {device.deviceType === "door_lock" ? (
          <DoorLock device={device} />
        ) : null}
        {device.deviceType === "water_leak_sensor" ? (
          <WaterLeakSensor device={device} />
        ) : null}
        {device.deviceType === "motion_sensor" ? (
          <MotionSensor device={device} />
        ) : null}
        {device.deviceType === "window_sensor" ? (
          <WindowSensor device={device} />
        ) : null}
        {device.deviceType === "garage_door" ? (
          <GarageDoor device={device} />
        ) : null}
        {device.deviceType === "camera" ? <Camera device={device} /> : null}
      </div>
    </>
  );
}

export default Device;
