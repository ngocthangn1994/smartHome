import {
  FaBuildingShield,
  FaCameraRetro,
  FaLightbulb,
  FaDoorOpen,
  FaBell,
  FaPersonWalking,
  FaBatteryHalf,
  FaInternetExplorer,
} from "react-icons/fa6";

import type { IAlert } from "../../../types";

interface AlertProp {
  alerts: IAlert[];
}

function RecentActivity({ alerts }: AlertProp) {
  const iconAlertType = {
    smoke_detected: (
      <FaBell className="text-red-500 bg-red-100 w-8 h-8 px-2 py-2 rounded-full" />
    ),
    motion_detected: (
      <FaPersonWalking className="text-orange-500 bg-red-100 w-8 h-8 px-2 py-2 rounded-full" />
    ),
    battery_low: (
      <FaBatteryHalf className="text-yellow-500 bg-yellow-100 w-8 h-8 px-2 py-2 rounded-full" />
    ),
    offline: (
      <FaInternetExplorer className="text-slate-500 bg-slate-100 w-8 h-8 px-2 py-2 rounded-full" />
    ),
  };
  const nameSeverity = {
    low: "Low",
    medium: "Medium",
    high: "High",
    critical: "Critical",
  };
  return (
    <>
      <div className="bg-white px-5 rounded-2xl text-slate-600 px-5 py-8">
        <p className="text-xl font-bold mb-5">
          Recent Activity & Quick Actions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-7 border border-slate-200 shadow-sm px-2 py-2 rounded-2xl">
            {alerts.map((alert) => (
              <div className="flex items-center gap-5 px-1 py-1">
                <p>{iconAlertType[alert.type]}</p>
                <div className="flex justify-between w-full items-center">
                  <p className="font-semibold">{alert.message}</p>
                  <p
                    className={
                      `text-sm ${alert.severity} === "critical`
                        ? "text-orange-500 bg-orange-100 rounded-full px-2 py-2"
                        : "text-red-300 bg-red-100 rounded-full px-2 py-2"
                    }
                  >
                    {nameSeverity[alert.severity]}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-2xl px-5 py-5 shadow-sm text-slate-600 font-bold flex flex-col items-center justify-center text-center bg-slate-100">
                <FaLightbulb className="text-2xl text-yellow-300" />
                <div>
                  <p>Turn Off</p>
                  <p>All Lights</p>
                </div>
              </div>
              <div className="border border-slate-200 rounded-2xl px-5 py-5 shadow-sm text-slate-600 font-bold flex flex-col items-center justify-center text-center bg-slate-100">
                <FaBuildingShield className="text-2xl text-green-600" />
                <div>
                  <p>Arm</p>
                  <p>Security</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-slate-200 rounded-2xl px-5 py-5 shadow-sm text-slate-600 font-bold flex flex-col items-center justify-center text-center bg-slate-100">
                <FaCameraRetro className="text-2xl text-orange-200" />
                <div>
                  <p>Views</p>
                  <p>Camera</p>
                </div>
              </div>
              <div className="border border-slate-200 rounded-2xl px-5 py-5 shadow-sm text-slate-600 font-bold flex flex-col items-center justify-center text-center bg-slate-100">
                <FaDoorOpen className="text-2xl text-red-300" />
                <div>
                  <p>Lock</p>
                  <p>All Doors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentActivity;
