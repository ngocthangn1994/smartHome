import {
  FaTemperatureHigh,
  FaCamera,
  FaLightbulb,
  FaShieldHalved,
  FaPlugCircleBolt,
  FaLandMineOn,
  FaLock,
  FaCircle,
} from "react-icons/fa6";
import AddDevice from "../control/AddDevice";
import type { DeviceType } from "../../../types";
import { useState, type ReactNode } from "react";
type DeviceFilter = DeviceType | "all" | "security";
interface DeviceToolBarProps {
  selectedType: DeviceFilter;
  onFilterDevice: (type: DeviceFilter) => void;
}
interface ToolBarItem {
  type: DeviceFilter;
  name: string;
  icon: ReactNode;
}
function DeviceToolbar({ selectedType, onFilterDevice }: DeviceToolBarProps) {
  const deviceToolBar: ToolBarItem[] = [
    { type: "all", name: "All", icon: null },
    { type: "thermostat", name: "Climate", icon: <FaTemperatureHigh /> },
    { type: "door_bell", name: "Cameras", icon: <FaCamera /> },
    { type: "smart_light", name: "Lighting", icon: <FaLightbulb /> },
    { type: "security", name: "Security", icon: <FaShieldHalved /> },
    { type: "smart_plug", name: "Plugs", icon: <FaPlugCircleBolt /> },
    { type: "motion_sensor", name: "Sensors", icon: <FaLandMineOn /> },
    { type: "door_lock", name: "Locks", icon: <FaLock /> },
  ];
  const [control, setControl] = useState(false);
  return (
    <>
      <div className="grid grid-cols-[1.3fr_0.7fr] mt-5 gap-1">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm px-3 py-5 flex gap-7">
          {deviceToolBar.map((item) => (
            <button
              key={item.type}
              onClick={() => onFilterDevice(item.type)}
              className="flex items-center gap-2
          rounded-xl
          px-4 py-2.5
          font-medium
          text-slate-600
          transition-all duration-200
          hover:bg-blue-600
          hover:text-white
          hover:shadow-sm"
            >
              <p>{item.icon}</p>
              <p>{item.name}</p>
            </button>
          ))}
        </div>
        <div
          className="flex justify-between gap-3 bg-white border border-slate-200 rounded-2xl shadow-sm px-3 py-5 text-sm font-medium
          text-slate-600 items-center"
        >
          <div className="flex border border-slate-200 shadow-sm iems-centergap-3 rounded-2xl px-2 py-2 justify-between gap-3">
            <p className="flex gap-1 items-center border px-2 py-2 border-slate-200 rounded-2xl">
              <FaCircle className="text-green-600" /> Online
            </p>
            <p className="flex gap-1 items-center">
              <FaCircle />
              <p>Offline</p>
            </p>
          </div>
          <div>
            <select className="border border-slate-200 rounded-2xl px-2 py-2">
              <option>Rooms</option>
            </select>
          </div>
          <div>
            <button
              onClick={() => setControl(true)}
              className="border border-slate-200 rounded-2xl px-6 py-4 bg-blue-600 text-white shadow-sm"
            >
              + Add Device
            </button>
            {control == true && <AddDevice onClose={() => setControl(false)} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default DeviceToolbar;
