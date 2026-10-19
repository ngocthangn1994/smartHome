import { CiBellOn } from "react-icons/ci";
import { MdOutlineSettingsRemote } from "react-icons/md";
import { FaWalking } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

function HistoryRecentActivity() {
  const recentActivity = [
    {
      icon: <CiBellOn className="text-red-600" />,
      name: "Smoke detected in Hallway",
      time: "9:41 AM",
    },
    {
      icon: <MdOutlineSettingsRemote className="text-orange-600" />,
      name: "Front door opened remotely",
      time: "9.21 AM",
    },
    {
      icon: <CiBellOn className="text-red-600" />,
      name: "Water leak detected",
      time: "10:21 PM",
    },
    {
      icon: <FaWalking className="text-blue-600" />,
      name: "Motion detected at Front Door",
      time: "11:01 PM",
    },
    {
      icon: <MdOutlineSecurity className="text-green-600" />,
      name: "Security system aramed (Away)",
      time: "3:00 AM",
    },
  ];
  return (
    <>
      <div className="bg-white p-4 sm:p-5 rounded-2xl text-slate-600">
        <div className="flex justify-between items-center gap-3">
          <p className="font-bold">Recent Acitivy</p>
          <p className="text-blue-600">View All</p>
        </div>
        <div className="mt-3 space-y-3">
          {recentActivity.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <p className="shrink-0">{item.icon}</p>
              <p className="flex-1 min-w-0">{item.name}</p>
              <p className="shrink-0 whitespace-nowrap">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HistoryRecentActivity;
