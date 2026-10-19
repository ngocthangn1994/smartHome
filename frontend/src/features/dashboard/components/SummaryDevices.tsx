import {
  FaBoltLightning,
  FaShieldHalved,
  FaHardDrive,
  FaWifi,
  FaTemperatureHigh,
} from "react-icons/fa6";
import type { IDevice } from "../../../types";
import type { ReactNode } from "react";
import { FaDoorClosed } from "react-icons/fa";

interface SummaryDevicesProp {
  devices: IDevice[];
}

interface SummaryItem {
  icon: ReactNode;
  name: string;
  data: string | number;
  status: string;
}
function SummaryDevices({ devices }: SummaryDevicesProp) {
  const activeDeviced = devices.filter((device) => device.status === "online");
  const indoorTemp = devices.find(
    (device) => device.deviceType === "thermostat",
  );
  const securityStatus =
    devices.find((device) => device.deviceType === "door_bell")?.status ===
    "online"
      ? "Security"
      : "No Security";

  const thermostatStatus = () => {
    if (
      indoorTemp?.state.currentTemperature !== undefined &&
      indoorTemp.state.currentTemperature < 78
    ) {
      return "Comfortable";
    }
    return "Not Comfortable";
  };
  const detailSecurityStatus =
    securityStatus === "Security" ? "Armed" : "No Arm";
  const summary: SummaryItem[] = [
    {
      icon: (
        <FaHardDrive className="shrink-0 text-green-600 bg-green-50 px-1 py-1 md:px-3 md:py-3 w-12 h-12 md:w-15 md:h-15 rounded-full" />
      ),
      name: "Total Devices",
      data: devices.length,
      status: "online",
    },
    {
      icon: (
        <FaWifi className="shrink-0 text-green-600 bg-green-50 px-1 py-1 md:px-3 md:py-3 w-12 h-12 md:w-15 md:h-15 rounded-full" />
      ),
      name: "Active Devices",
      data: activeDeviced.length,
      status: "online",
    },
    {
      icon: (
        <FaTemperatureHigh className="shrink-0 text-green-600 bg-green-50 px-1 py-1 md:px-3 md:py-3 w-12 h-12 md:w-15 md:h-15 rounded-full" />
      ),
      name: "Indoor Tempt",
      data: indoorTemp?.state.currentTemperature || "",
      status: thermostatStatus(),
    },
    {
      icon: (
        <FaShieldHalved className="shrink-0 text-green-600 bg-green-50 px-1 py-1 md:px-3 md:py-3 w-12 h-12 md:w-15 md:h-15 rounded-full" />
      ),
      name: "Security Status",
      data: securityStatus,
      status: detailSecurityStatus,
    },
    {
      icon: (
        <FaDoorClosed className="shrink-0 text-green-600 bg-green-50 px-1 py-1 md:px-3 md:py-3 w-12 h-12 md:w-15 md:h-15 rounded-full" />
      ),
      name: "Doors & Windows",
      data: "All Closed",
      status: "secured",
    },
    {
      icon: (
        <FaBoltLightning className="shrink-0 text-green-600 bg-green-50 px-1 py-1 md:px-3 md:py-3 w-12 h-12 md:w-15 md:h-15 rounded-full" />
      ),
      name: "Energy Today",
      data: "12.4kWh",
      status: "-8% vs yesterday",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 text-sm gap-3 md:gap-5 bg-white border border-slate-200 shadow-sm p-3 md:p-5 rounded-2xl">
        {summary.map((item) => (
          <div
            key={item.name}
            className="min-w-0 bg-white border border-slate-200 rounded-2xl px-3 py-3 md:px-5 md:py-5 shadow-sm hover:shadow-lg"
          >
            <div className="flex justify-between items-center gap-2">
              <div className="min-w-0 space-y-1">
                <p className="font-semibold">{item.name}</p>
                <p className={`text-green-600 text-xl font-bold`}>
                  {item.data}
                </p>
                <p className="text-green-600 font-semibold">{item.status}</p>
              </div>
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SummaryDevices;
