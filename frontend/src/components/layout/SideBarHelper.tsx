import smartHomeLogo from "../../assets/smarthome_logo.png";
import {
  FaWindows,
  FaCameraRetro,
  FaRocket,
  FaShieldHalved,
  FaGear,
  FaModx,
  FaSketch,
} from "react-icons/fa6";
import { MdManageHistory } from "react-icons/md";

import { HiBellAlert } from "react-icons/hi2";

import { NavLink } from "react-router-dom";
function SideBarHelper() {
  const menu = [
    { name: "Dashboard", icon: <FaWindows />, path: "/dashboard" },
    { name: "Devices", icon: <FaModx />, path: "/devices" },
    { name: "Cameras", icon: <FaCameraRetro />, path: "/cameras" },
    { name: "Automations", icon: <FaRocket />, path: "/automations" },
    { name: "Alert", icon: <HiBellAlert />, path: "/alerts" },
    { name: "History", icon: <MdManageHistory />, path: "/history" },
    { name: "Security", icon: <FaShieldHalved />, path: "/security" },
    { name: "Settings", icon: <FaGear />, path: "/settings" },
  ];
  return (
    <>
      <div className="bg-white h-full px-5 py-5">
        {" "}
        <NavLink to="/dashboard">
          <div className="flex items-center">
            <img className="w-20 h-20" src={smartHomeLogo} />

            <div className="flex text-3xl font-bold">
              <p>Nguyen</p>
              <p className="text-blue-800">Shield</p>
            </div>
          </div>
        </NavLink>
        <div className="space-y-4 px-5 py-20 text-2xl text-slate-900 space-y-15">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 ${isActive ? "bg-blue-600 py-2 rounded-2xl px-3 text-white shadow-sm" : "text-slate-700 hover:text-blue-600"}`
              }
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
        <div className="bg-indigo-50 text-center px-5 py-5 rounded-2xl space-y-3">
          <div className="flex justify-center">
            <FaSketch className="px-3 py-3 rounded-full w-12 h-12 text-blue-600 bg-white shadow-sm" />
          </div>
          <div className="text-slate-600">
            <p className="text-2xl text-slate-900 font-semibold">
              Make your home
            </p>
            <p className="text-2xl font-semibold">even smarter</p>
            <p>Discover smart automations</p>
            <p> to save time and energy.</p>
          </div>
          <button className="bg-blue-600 text-white font-semibold px-10 py-3 rounded-xl mt-5">
            Explore Automations
          </button>
        </div>
      </div>
    </>
  );
}

export default SideBarHelper;
