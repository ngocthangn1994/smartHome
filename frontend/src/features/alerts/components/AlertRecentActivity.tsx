import { CiBellOn } from "react-icons/ci";
import { MdOutlineSettingsRemote } from "react-icons/md";
import { FaWalking } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";

function AlertRecentActivity() {
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
      <div className="bg-white p-5 mt-5 rounded-2xl text-slate-600">
        <div className="flex justify-between">
          <p className="font-bold">Recent Acitivy</p>
          <p className="text-blue-600">View All</p>
        </div>
        <div>
          {recentActivity.map((item) => (
            <div className="flex justify-between items-center">
              <p>{item.icon}</p>
              <p>{item.name}</p>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AlertRecentActivity;
