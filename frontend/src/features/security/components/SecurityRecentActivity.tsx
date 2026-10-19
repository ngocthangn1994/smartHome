import { CiLock } from "react-icons/ci";
import { GiWalkingTurret } from "react-icons/gi";
import { GiHomeGarage } from "react-icons/gi";
import { FaDoorOpen } from "react-icons/fa6";
import { LuAlarmSmoke } from "react-icons/lu";

function SecurityRecentActivity() {
  const recentActivity = [
    {
      icon: <CiLock className="text-green-600" />,
      name: "Front door locked",
      time: "9:41 AM",
    },
    {
      icon: <GiWalkingTurret className="text-orange-600" />,
      name: "Motion detected in Living Room",
      time: "9.21 AM",
    },
    {
      icon: <GiHomeGarage className="text-red-600" />,
      name: "Garage door closed",
      time: "10:21 PM",
    },
    {
      icon: <FaDoorOpen className="text-blue-600" />,
      name: "Kitchen window opened",
      time: "11:01 PM",
    },
    {
      icon: <LuAlarmSmoke className="text-green-600" />,
      name: "Smoke detector battery updated",
      time: "3:00 AM",
    },
  ];
  return (
    <>
      <div className="bg-white p-4 sm:p-5 rounded-2xl text-slate-600">
        <div className="flex justify-between items-center gap-3">
          <p className="font-bold text-xl">Recent Security Acitivy</p>
          <p className="text-blue-600 font-bold">View All</p>
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

export default SecurityRecentActivity;
