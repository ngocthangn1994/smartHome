import { FaDoorClosed } from "react-icons/fa";
import { ImWindows8 } from "react-icons/im";
import { IoIosLock } from "react-icons/io";
import { CgMenuMotion } from "react-icons/cg";
import { LuAlarmSmoke } from "react-icons/lu";
import { FaCameraRetro } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import type { ReactNode } from "react";
export type securityType =
  | "all"
  | "window_sensor"
  | "motion_sensor"
  | "door_bell"
  | "water_leak_sensor"
  | "door_lock"
  | "smoke_detector";

interface securityMenuProps {
  selectedType: securityType;
  onFilterDevice: (type: securityType) => void;
}

interface MenuItem {
  type: securityType;
  icon: ReactNode;
  name: string;
}
function SecurityMenu({ selectedType, onFilterDevice }: securityMenuProps) {
  const menu: MenuItem[] = [
    { type: "all", icon: null, name: "All" },
    { type: "window_sensor", icon: <FaDoorClosed />, name: "Windows" },
    { type: "door_lock", icon: <ImWindows8 />, name: "Locks" },
    { type: "motion_sensor", icon: <IoIosLock />, name: "Motion" },
    { type: "smoke_detector", icon: <CgMenuMotion />, name: "Smoke" },
    { type: "water_leak_sensor", icon: <LuAlarmSmoke />, name: "Water Leak" },
    { type: "door_bell", icon: <FaCameraRetro />, name: "Cameras" },
  ];
  return (
    <>
      <div className="bg-white p-5 rounded-2xl mt-5 text-slate-600 grid grid-cols-[1.2fr_0.8fr] gap-10">
        <div className="flex gap-3 items-center justify-between">
          {menu.map((item) => (
            <button
              key={item.type}
              onClick={() => onFilterDevice(item.type)}
              className="flex items-center gap-2 px-10 py-3 hover:bg-blue-600 hover:text-white rounded-2xl"
            >
              <span>{item.icon}</span>
              <p>{item.name}</p>
            </button>
          ))}
        </div>

        <div className="flex gap-3 justify-between">
          <div className="flex gap-3 border border-slate-200 rounded-2xl p-2">
            <div className="flex items-center border gap-2 p-2 border-slate-200 rounded-2xl">
              <FaCircle className="text-green-600" />
              <span className="font-bold">Armed</span>
            </div>
            <div className="flex items-center border gap-2 p-2 border-slate-200 rounded-2xl">
              <FaCircle className="text-slate-600" />
              <span>Disarmed</span>
            </div>
            <div className="flex items-center border gap-2 p-2 border-slate-200 rounded-2xl">
              <FaCircle className="text-orange-600" />
              <span>Alert</span>
            </div>
          </div>

          <div>
            <button className="bg-blue-600 text-white px-10 py-2 rounded-2xl font-bold text-xl">
              + Add Sensor
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecurityMenu;
