import { LuAlarmClockOff } from "react-icons/lu";
import { FaGetPocket } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { AiFillAlert } from "react-icons/ai";

function SecurityQuickAction() {
  const actions = [
    {
      icon: <LuAlarmClockOff className="text-red-600" />,
      name: "Arm Away",
      message: "All zones",
    },
    {
      icon: <FaGetPocket className="text-blue-600" />,
      name: "Arm Stay",
      message: "Home mode",
    },
    {
      icon: <FaCameraRetro className="text-blue-600" />,
      name: "Lock All Doors",
      message: "Secure all",
    },
    {
      icon: <MdOutlineSecurity className="text-green-600" />,
      name: "View Cameras",
      message: "Live feeds",
    },
  ];
  return (
    <>
      <div className="bg-white mt-5 p-5 rounded-2xl text-slate-600">
        <p className="text-xl font-bold">Quick Actions</p>
        <div className="grid grid-cols-4 gap-3 p-5 rounded-2xl text-slate-600 font-medium">
          {actions.map((item) => (
            <div className="border border-slate-200 p-5 rounded-2xl flex flex-col items-center text-center shadow-sm">
              <p>{item.icon}</p>
              <p className="font-bold">{item.name}</p>
              <p>{item.message}</p>
            </div>
          ))}
        </div>
        <div className="border rounded-2xl border-slate-200 p-3 flex justify-center items-center gap-3">
          <AiFillAlert className="text-2xl text-red-600" />
          <div>
            <p className="font-bold">Trigger Alarm Test</p>
            <p>Test System Siren</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecurityQuickAction;
