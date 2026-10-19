import { LuAlarmClockOff } from "react-icons/lu";
import { FaGetPocket } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

function AlertQuickAction() {
  const actions = [
    {
      icon: <LuAlarmClockOff className="text-red-600" />,
      name: "Silence Alarm",
    },
    {
      icon: <FaGetPocket className="text-blue-600" />,
      name: "Acknowledge All",
    },
    { icon: <FaCameraRetro className="text-blue-600" />, name: "View Cameras" },
    {
      icon: <MdOutlineSecurity className="text-green-600" />,
      name: "Arm Security",
    },
  ];
  return (
    <>
      <div className="bg-white p-4 sm:p-5 rounded-2xl">
        <p className="text-xl font-bold">Quick Actions</p>
        <div className="grid grid-cols-2 gap-3 mt-5 rounded-2xl text-slate-600 font-medium">
          {actions.map((item) => (
            <div
              key={item.name}
              className="border border-slate-200 p-4 rounded-2xl flex flex-col items-center text-center shadow-sm"
            >
              <p>{item.icon}</p>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AlertQuickAction;
