import { GiNeedleDrill } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineSmartToy } from "react-icons/md";
import { MdEco } from "react-icons/md";
import { LuBellRing } from "react-icons/lu";
import { MdOutlineSettingsRemote } from "react-icons/md";

function ExploreFeature() {
  const featuresList = [
    {
      icon: (
        <IoHomeOutline className="bg-sky-100 text-blue-600 w-10 h-10 p-2 rounded-full" />
      ),
      name: "Device Management",
      description:
        "Add, oragnize and control all your smart devices from one easy-to-use dashboard",
    },
    {
      icon: (
        <MdOutlineSecurity className="bg-orange-100 text-orange-600 w-10 h-10 p-2 rounded-full" />
      ),
      name: "Advanced Security",
      description:
        "Monitor your home with smart cameras, door locks, motion sensors, and instant alerts",
    },
    {
      icon: (
        <MdOutlineSmartToy className="bg-purple-100 text-purple-600 w-10 h-10 p-2 rounded-full" />
      ),
      name: "Smart Automations",
      description:
        "Create custom automation rules to trigger actions based on events and schedules",
    },
    {
      icon: (
        <MdEco className="bg-yellow-100 text-yellow-600 w-10 h-10 p-2 rounded-full" />
      ),
      name: "Energy Monitoring",
      description:
        "Track energy usage, identify waste, and save money iwth smart insights",
    },
    {
      icon: (
        <LuBellRing className="bg-red-100 text-red-600 w-10 h-10 p-2 rounded-full" />
      ),
      name: "Instant Notifications",
      description:
        "Get real-time alerts for important events and keep your home protected",
    },
    {
      icon: (
        <MdOutlineSettingsRemote className="bg-slate-100 text-slate-600 w-10 h-10 p-2 rounded-full" />
      ),
      name: "Remote Access",
      description:
        "Contorl your home from anywhere using the Nguyenshield mobile app",
    },
  ];
  return (
    <>
      <section className="mt-10 text-slate-600 space-y-5">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2">
            <GiNeedleDrill />
            <p className="text-2xl font-bold">Everything You Need</p>
          </div>
          <p>
            Explore the features that make NguyenShield the perfect smart home
            solution
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 text-center px-2 md:px-10">
          {featuresList.map((item) => (
            <div className="flex flex-col items-center border border-slate-200 shadow-sm p-5 rounded-xl">
              {item.icon}
              <p className="font-bold">{item.name}</p>
              <p className="text-center text-[0.8rem] sm:text-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ExploreFeature;
