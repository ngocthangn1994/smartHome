import { FaRegMessage } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { FaShieldAlt } from "react-icons/fa";
import { LuDatabaseBackup } from "react-icons/lu";

function SettingRecentActivity() {
  const recentActivity = [
    {
      icon: (
        <FaRegMessage className="bg-slate-100 text-slate-600 w-8 h-8 rounded-full px-1 py-1" />
      ),
      name: "Logged in from Chrome on macOs",
      time: "Today, 9:35 AM",
    },
    {
      icon: (
        <FaLock className="bg-yellow-100 text-yellow-600 w-8 h-8 rounded-full px-1 py-1" />
      ),
      name: "Password changed",
      time: "Yesterday, 8:41 AM",
    },
    {
      icon: (
        <CiLogin className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full px-1 py-1" />
      ),
      name: "Added new shared user (Emily)",
      time: "May 6 2026, 11:23 AM",
    },
    {
      icon: (
        <FaShieldAlt className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full px-1 py-1" />
      ),
      name: "Enabled two-factor authentication",
      time: "April 2 2026, 6:30 AM",
    },
    {
      icon: (
        <LuDatabaseBackup className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full px-1 py-1" />
      ),
      name: "Exported data backup",
      time: "March 3 2026, 05:23 AM",
    },
  ];

  return (
    <>
      <div className="bg-white rounded-2xl px-5 py-5 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl">Recent Account Activity</p>
          <p className="text-blue-600">View All</p>
        </div>
        <div className="space-y-1 mt-1">
          {recentActivity.map((item) => (
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span>{item.icon}</span>
                <p>{item.name}</p>
              </div>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SettingRecentActivity;
