import { HiOutlineBellAlert } from "react-icons/hi2";
import { CiWarning } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { SiDavinciresolve } from "react-icons/si";
import { LuAlarmSmoke } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { GiBrainLeak } from "react-icons/gi";
import { FaCamera } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

function AlertMenu() {
  const menu = [
    { icon: null, name: "All" },
    { icon: <HiOutlineBellAlert className="text-red-600" />, name: "Critical" },
    { icon: <CiWarning className="text-orange-600" />, name: "Warning" },
    { icon: <CiCircleInfo className="text-blue-600" />, name: "Info" },
    { icon: <SiDavinciresolve className="text-green-600" />, name: "Resolved" },
    { icon: <LuAlarmSmoke className="text-amber-600" />, name: "Smoke" },
    { icon: <MdOutlineSecurity className="text-blue-800" />, name: "Security" },
    { icon: <GiBrainLeak />, name: "Water Leak" },
    { icon: <FaCamera className="text-pink-400" />, name: "Camera" },
    { icon: <MdDevices className="text-purple-600" />, name: "Devices" },
  ];
  const status = [
    { icon: <FaCircle className="text-green-600" />, name: "Open" },
    { icon: <FaCircle className="text-slate-400" />, name: "Acknowledged" },
    { icon: <FaCircle />, name: "Resolved" },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_0.5fr] xl:flex justify-between text-slate-600 gap-3">
        <div className="grid grid-cols-2 lg:grid-cols-5 xl:flex xl:justify-between gap-3 bg-white px-5 py-5 rounded-2xl">
          {menu.map((item) => (
            <div className="flex items-center gap-2 px-2 py-1 border border-slate-200 rounded-xl">
              <span>{item.icon}</span>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="bg-white px-5 py-5 rounded-2xl gap-3 space-y-5">
          <div className="border border-slate-200 flex gap-3 items-center px-3 py-1 rounded-2xl shadow-sm gap">
            {status.map((item) => (
              <div className="flex items-center gap-1">
                <p> {item.icon}</p>
                <p
                  className={
                    item.name === "Open" ? "font-bold" : "text-slate-600"
                  }
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div>
            <span className="flex gap-3 items-center px-3 py-2 font-bold rounded-2xl bg-blue-600 text-white">
              <CiSettings />
              <p>Notifications Settings</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlertMenu;
