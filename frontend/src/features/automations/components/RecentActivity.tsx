import { FaCheck, FaLeaf } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { GrManual } from "react-icons/gr";
import { MdOutlineSecurity } from "react-icons/md";

function RecentActivity() {
  const recentActivity = [
    {
      icon: (
        <FaCheck className="bg-yellow-200 rounded-full w-8 h-8 px-1 py-2 text-yellow-600" />
      ),
      message: "Good morning ran succesfully",
      time: "6:30 AM",
    },
    {
      icon: (
        <CiBellOn className="bg-red-200 rounded-full w-8 h-8 px-1 py-2 text-red-600" />
      ),
      message: "Front Door Alert triggered.",
      time: "9:41 AM",
    },
    {
      icon: (
        <GrManual className="bg-slate-200 rounded-full w-8 h-8 px-1 py-2 text-slate-600" />
      ),
      message: "Leave Home paused manually",
      time: "9:15 AM",
    },
    {
      icon: (
        <FaLeaf className="bg-green-200 rounded-full w-8 h-8 px-1 py-2 text-green-600" />
      ),
      message: "Energy Saving Mode activated",
      time: "8.02 AM",
    },
    {
      icon: (
        <MdOutlineSecurity className="bg-orange-200 rounded-full w-8 h-8 px-1 py-2 text-orange-600" />
      ),
      message: "Night Security activiated",
      time: "10:00 PM",
    },
  ];
  return (
    <>
      <div className="bg-white rounded-2xl px-3 py-3">
        <div className="flex justify-between items-center mb-3">
          <p className="text-xl font-bold">Recent Activity</p>
          <p className="text-blue-600">View All</p>
        </div>
        <div className="space-y-3">
          {recentActivity.map((item) => (
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <p>{item.icon}</p>
                <p>{item.message}</p>
              </div>
              <div>
                <p>{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RecentActivity;
