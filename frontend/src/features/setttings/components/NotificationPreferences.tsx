import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { LiaSmsSolid } from "react-icons/lia";
import { MdOutlineSecurity } from "react-icons/md";
import { FaWalking } from "react-icons/fa";
import { RiGlobalOffLine } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { useState } from "react";
function NotificationPreferences() {
  const notifications = [
    {
      icon: (
        <IoIosPhonePortrait className="bg-yellow-200 text-yellow-600 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "Push Notifications",
      message: "Receive alerts on mobile devices",
    },
    {
      icon: (
        <MdEmail className="bg-pink-200 text-pink-600 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "Email Notifications",
      message: "Receive updates via email",
    },
    {
      icon: (
        <LiaSmsSolid className="bg-blue-200 text-blue-600 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "SMS Notifications",
      message: "Receiveimportant alerts via SMS",
    },
    {
      icon: (
        <MdOutlineSecurity className="bg-orange-200 text-orange-600 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "Security Alerts",
      message: "Arming, disarming, and security events",
    },
    {
      icon: (
        <FaWalking className="bg-amber-200 text-amber-600 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "Motion Alerts",
      message: "When motion is detected",
    },
    {
      icon: (
        <RiGlobalOffLine className="bg-slate-200 text-slate-600 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "Device Offline Alerts",
      message: "When devices go offline",
    },
    {
      icon: (
        <TbReport className="bg-purple-200 text-purle-600 w-8 h-8 px-1 py-1 rounded-full" />
      ),
      name: "Weekly Reports",
      message: "Receive weekly home summary",
    },
  ];
  const [isOn, setIsOn] = useState(true);

  return (
    <>
      <div className="bg-white px-5 py-5 flex flex-col justify-between rounded-2xl text-slate-600">
        <div>
          <p className="font-bold text-xl">Notification Preferences</p>
        </div>
        <div className="space-y-1">
          {notifications.map((item) => (
            <div className="flex items-center gap-3 justify-between">
              <span>{item.icon}</span>
              <div className="text-center">
                <p className="font-bold">{item.name}</p>
                <p>{item.message}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOn(!isOn)}
                className={`
        relative h-7 w-12 rounded-full
        transition-colors duration-300
        ${isOn ? "bg-blue-600" : "bg-slate-300"}
      `}
              >
                <span
                  className={`
          absolute top-1 h-5 w-5 rounded-full bg-white shadow
          transition-all duration-300
          ${isOn ? "left-6" : "left-1"}
        `}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NotificationPreferences;
