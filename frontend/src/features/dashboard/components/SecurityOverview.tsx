import { FaDoorClosed, FaLock, FaShieldVirus } from "react-icons/fa6";
import { GiHomeGarage } from "react-icons/gi";
import smarthomeRecentCamera from "../../../assets/smarthome_recentcamera.png";
import type { IDevice } from "../../../types";

interface SecurityOverProps {
  devices: IDevice[];
}

function SecurityOverview({ devices }: SecurityOverProps) {
  const doorLock = devices.filter((device) => {
    return (
      device.deviceType === "door_lock" || device.deviceType === "garage_door"
    );
  });

  const frontDoor = doorLock.find((lock) => lock.area.includes("Front Door"));
  const frontDoorStatus = frontDoor ? "Locked" : "UnLock";
  const allDoor = doorLock.some((lock) => lock.state.doorLock !== "locked");
  const allDoorStatus =
    allDoor == true ? "All door is locked" : "Some door unlock";

  const garage = doorLock.find((lock) => lock.area.includes("Garage"));
  const garageStatus = garage?.state.garageLock;
  const securityItems = [
    {
      icon: (
        <FaLock className="text-green-600 w-10 h-10 bg-blue-50 rounded-xl px-2 py-2" />
      ),
      name: "Front Door",
      status: frontDoorStatus,
    },
    {
      icon: (
        <FaDoorClosed className="text-green-600 w-10 h-10 bg-blue-50 rounded-xl px-2 py-2" />
      ),
      name: "Closed",
      status: allDoorStatus,
    },
    {
      icon: (
        <GiHomeGarage className="text-green-600 w-10 h-10 bg-blue-50 rounded-xl px-2 py-2" />
      ),
      name: "Garage",
      status: garageStatus,
    },
  ];
  return (
    <>
      <div className="border border-slate-200 bg-white  rounded-2xl px-5 py-5 text-slate-600">
        <p className="font-bold text-2xl">Security Overview</p>
        <div className="flex items-center justify-center mt-10 gap-5">
          <FaShieldVirus className="w-20 h-20 text-green-600" />
          <div>
            <p className="text-3xl text-green-600 font-bold">Home Secure</p>
            <p className="text-slate-600">Armed Away</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-15 border border-slate-200 rounded-2xl px-5 py-5 mt-5 shadow-sm">
          {securityItems.map((item) => (
            <div className="flex flex-col items-center">
              <div>{item.icon}</div>
              <div>
                <p className="font-bold">{item.name}</p>
              </div>
              <div>
                <p>{item.status}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-5">
          <div className="flex justify-between mt-2">
            <p className="font-bold">Recent Camera</p>
            <p className="text-blue-600 font-semibold">View All</p>
          </div>
          <img
            className="h-full w-full rounded-2xl px-1 py-1 object-cover"
            src={smarthomeRecentCamera}
          />
          <img
            className="h-full w-full rounded-2xl px-1 py-1 object-cover"
            src={smarthomeRecentCamera}
          />
        </div>
      </div>
    </>
  );
}

export default SecurityOverview;
