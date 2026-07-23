import { FiSun } from "react-icons/fi";
import {
  FaRegMoon,
  FaRegLightbulb,
  FaLeaf,
  FaDoorClosed,
  FaBell,
} from "react-icons/fa";
import { MdOutlineSecurity, MdMovie } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { MdDeviceThermostat } from "react-icons/md";

function AutomationList() {
  const automationList = [
    {
      icon: (
        <FiSun className="text-yellow-600 bg-yellow-100 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "Good Morning",
      message: "Start the day with light comfort and fresh air",
    },
    {
      icon: (
        <FaRegMoon className="text-blue-900 bg-slate-100 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "Good Night",
      message: "Prepare your home for a resful night",
    },
    {
      icon: (
        <FaHouseChimney className="text-green-600 bg-green-100 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "Leave Home",
      message: "Save energy and secure your home when you leave",
    },
    {
      icon: (
        <FaDoorClosed className="text-green-600 bg-green-100 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "Arrive Home",
      message: "Welcome home with comfort and convenient",
    },
    {
      icon: (
        <FaLeaf className="text-green-600 bg-green-100 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "Energy Saving Mode",
      message: "Optimize energy usage when prices are high",
    },
    {
      icon: (
        <MdMovie className="text-blue-900 bg-blue-100 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "Movie Time",
      message: "Dim lights and set the perfect movie ambiance",
    },
    {
      icon: (
        <FaBell className="text-yellow-600 bg-yellow-100 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "Front Door Alert",
      message: "Get notified when the front door is opened",
    },
    {
      icon: (
        <MdOutlineSecurity className="text-blue-600 bg-blue-100 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "Night Security",
      message: "Secure and monitor your home while you sleep",
    },
  ];
  const trigger = [
    { icon: <CiTimer />, name: "Trigger", time: "Weekdays, 6:30 AM" },
    { icon: <CiTimer />, name: "Trigger", time: "Everydays, 10:30 PM" },
    { icon: <CiTimer />, name: "Trigger", time: "When no one is home" },
    { icon: <CiTimer />, name: "Trigger", time: "When someone arrives" },
    { icon: <CiTimer />, name: "Trigger", time: "Energy price is high" },
    { icon: <CiTimer />, name: "Trigger", time: "Manual" },
    { icon: <CiTimer />, name: "Trigger", time: "Front door opens" },
    { icon: <CiTimer />, name: "Trigger", time: "10:00 PM - 6:00 AM" },
  ];
  const icons = [
    [<FaRegLightbulb />, <CiCamera />, <MdDeviceThermostat />, "+2"],
    [<FaRegLightbulb />, <CiCamera />, <MdDeviceThermostat />, "+2"],
    [<FaRegLightbulb />, <CiCamera />, <MdDeviceThermostat />, "+2"],
    [<FaRegLightbulb />, <CiCamera />, <MdDeviceThermostat />, "+2"],
    [<FaRegLightbulb />, <CiCamera />, <MdDeviceThermostat />, "+2"],
    [<FaRegLightbulb />, <CiCamera />, <MdDeviceThermostat />, "+2"],
    [<FaRegLightbulb />, <CiCamera />, <MdDeviceThermostat />, "+2"],
    [<FaRegLightbulb />, <CiCamera />, <MdDeviceThermostat />, "+2"],
  ];
  return (
    <>
      <div className="flex justify-between text-slate-600 bg-white rounded-2xl px-5 py-5">
        <div className="bg-white rounded-2xl space-y-5">
          {automationList.map((item) => (
            <div className="flex gap-3 items-cente">
              <div>{item.icon}</div>
              <div>
                <p className="font-bold">{item.name}</p>
                <p>{item.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl space-y-5">
          {trigger.map((item) => (
            <div className="flex gap-3 items-center">
              <div>{item.icon}</div>
              <div>
                <p className="font-bold">{item.name}</p>
                <p>{item.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white space-y-5">
          {icons.map((icon) => (
            <div>
              <p>Actions</p>
              <div className="flex gap-1"> {icon}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AutomationList;
