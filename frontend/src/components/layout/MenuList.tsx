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

function MenuList() {
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
      <div className="px-5 py-5 text-2xl text-slate-900 space-y-5">
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
    </>
  );
}

export default MenuList;
