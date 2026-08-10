import { GiWalkingTurret } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { MdAutoAwesome } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaDownload } from "react-icons/fa6";

function HistoryMenu() {
  const menu = [
    { icon: null, name: "All" },
    { icon: <GiWalkingTurret />, name: "Motion" },
    { icon: <FaTemperatureHigh />, name: "Temperature" },
    { icon: <MdOutlineSecurity />, name: "Security" },
    { icon: <FaUnlockAlt />, name: "Locks" },
    { icon: <FaCameraRetro />, name: "Cameras" },
    { icon: <MdOutlineEnergySavingsLeaf />, name: "Energy" },
    { icon: <MdAutoAwesome />, name: "Automation" },
  ];
  return (
    <>
      <div className="text-slate-600 grid grid-cols-[1.5fr_0.5fr] gap-5">
        <div className="grid grid-cols-2 justify-between gap-10 bg-white p-3 rounded-2xl">
          {menu.map((item) => (
            <div className="flex items-center gap-1">
              <span>{item.icon}</span>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-3 rounded-2xl">
          <div className="border border-slate-200 px-10 py-2 rounded-2xl flex items-center gap-5 ">
            <div className="flex items-center gap-2">
              <FaCircle className="text-green-600" />
              <p>Live Logs</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCircle className="text-slate-600" />
              <p>Archived</p>
            </div>
          </div>
          <div className="flex items-center gap-5 border border-slate-200 rounded-2xl px-5 py-2">
            <div className="flex items-center gap-2 border border-slate-200 px-2 py-1  rounded-xl">
              <p>Last 7 days</p>
              <SlCalender />
            </div>
            <div className="flex items-center gap-2 border border-slate-200 px-2 py-1  rounded-xl">
              <FaDownload />
              <p className="font-bold">Export</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryMenu;
