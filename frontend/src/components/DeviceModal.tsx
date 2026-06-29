import ThermostatControl from "./ThermostatControl";
import DeviceSettings from "./DeviceSettings";
import SmartPlugControl from "./SmartPlugControl";
import SmokeControl from "./SmokeControl";
import CameraControl from "./CameraControl";
import DoorBellControl from "./DoorBellControl";
import type { IDevice } from "../types";
import type { ReactNode } from "react";

type DeviceModalProps = {
  device: IDevice;
  type: "control" | "settings";
  onClose: () => void;
};

function DeviceModal({ device, type, onClose }: DeviceModalProps) {
  const controlDevice: Partial<Record<IDevice["deviceType"], ReactNode>> = {
    thermostat: <ThermostatControl device={device} />,
    smart_plug: <SmartPlugControl device={device} />,
    smoke_detector: <SmokeControl device={device} />,
    camera: <CameraControl device={device} />,
    door_bell: <DoorBellControl device={device} />,
  };

  const modalContent =
    type === "settings" ? (
      <DeviceSettings device={device} />
    ) : (
      (controlDevice[device.deviceType] ?? (
        <>
          <div>No Device Avaible.</div>
        </>
      ))
    );

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40">
        <div className="border border-slate-400 px-5 py-5 rounded-2xl bg-white w-full max-w-md orverflow-hidden h-[90vh]">
          <div className="z-10 border-b border-slate-200 mb-5">
            <div className="flex justify-between items-center mb-5">
              <button
                onClick={onClose}
                className="sticky top-0 bg-blue-100 p-2 py-2 rounded-full ring-1 ring-blue-200 text-slate-900 font-bold hover:bg-blue-200 shadow-sm hover:shadow-lg hover:ring-blue-300"
              >
                X
              </button>
              <div>
                <p className="text-[1.2rem] font-semibold"> {device.name}</p>
              </div>
            </div>
          </div>
          <div>{modalContent}</div>
        </div>
      </div>
    </>
  );
}

export default DeviceModal;
