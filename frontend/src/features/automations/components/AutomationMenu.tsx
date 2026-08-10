import { FiSun } from "react-icons/fi";
import { FaRegMoon, FaRegLightbulb, FaCircle } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { MdDeviceThermostat } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { useState } from "react";
import AddNewAutomationRule from "../modals/AddNewAutomationRule";
function AutomationMenu() {
  const [popUp, setPopUp] = useState(false);
  const menu = [
    { icon: null, name: "All" },
    { icon: <FiSun />, name: "Morning" },
    { icon: <FaRegMoon />, name: "Night" },
    { icon: <MdOutlineSecurity />, name: "Security" },
    { icon: <MdDeviceThermostat />, name: "Climate" },
    { icon: <FaRegLightbulb />, name: "Lighting" },
    { icon: <AiFillThunderbolt />, name: "Energy" },
    { icon: <CiStar />, name: "Favorites" },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:flex justify-between items-center text-slate-600 bg-white rounded-2xl mt-5">
        <div className="flex gap-5 items-center bg-white px-5 py-2 rounded-2xl">
          {menu.map((item) => (
            <div className="flex px-5 py-2 items-center gap-3 hover:bg-blue-600 hover:text-white rounded-2xl">
              <p>{item.icon}</p>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-1 ml-2 bg-white px-2 py-2 rounded-2xl">
          <button className="flex gap-1 items-center border border-slate-200 px-5 py-2 rounded-2xl font-bold">
            <FaCircle className="text-green-600" />
            <p>Active</p>
          </button>
          <button className="flex gap-1 items-center border border-slate-200 px-5 py-2 rounded-2xl ">
            <FaCircle className="text-slate-600" />
            <p>Paused</p>
          </button>
        </div>
        <div className="bg-white">
          <button
            onClick={() => setPopUp(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-2xl"
          >
            + New Automation
          </button>
        </div>
      </div>
      {popUp && <AddNewAutomationRule onClose={() => setPopUp(false)} />}
    </>
  );
}

export default AutomationMenu;
