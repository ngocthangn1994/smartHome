import { CiBellOn } from "react-icons/ci";
import { SiSpringsecurity } from "react-icons/si";
import { FaFolderOpen } from "react-icons/fa";
import { LuDoorOpen } from "react-icons/lu";
import { CiWarning } from "react-icons/ci";
import { FaGetPocket } from "react-icons/fa";

function AlertList() {
  const list = [
    {
      iconName: <CiBellOn className="text-red-600" />,
      name: "Smoke Detected",
      device: "Hallway Smokie Detector",
      description: "Smoke was detected in the hallway",
      iconSeverity: <SiSpringsecurity className="text-red-600 w-5 h-5" />,
      severity: "Critical",
      iconStatus: <FaFolderOpen />,
      status: "Open",
      Time: "9:41 AM",
    },
    {
      iconName: <LuDoorOpen className="text-yellow-600" />,
      name: "Front door opened",
      device: "Front Door Lock",
      description: "Front door was opened remotely",
      iconSeverity: <CiWarning className="text-red-600 w-5 h-5" />,
      severity: "Warning",
      iconStatus: <FaGetPocket />,
      status: "Acknowledged",
      Time: "8:41 AM",
    },
    {
      iconName: <CiBellOn className="text-red-600" />,
      name: "Smoke Detected",
      device: "Hallway Smokie Detector",
      description: "Smoke was detected in the hallway",
      iconSeverity: <SiSpringsecurity className="text-red-600 w-5 h-5" />,
      severity: "Critical",
      iconStatus: <FaFolderOpen />,
      status: "Open",
      Time: "9:41 AM",
    },
    {
      iconName: <LuDoorOpen className="text-yellow-600" />,
      name: "Front door opened",
      device: "Front Door Lock",
      description: "Front door was opened remotely",
      iconSeverity: <CiWarning className="text-red-600 w-5 h-5" />,
      severity: "Warning",
      iconStatus: <FaGetPocket />,
      status: "Acknowledged",
      Time: "8:41 AM",
    },
    {
      iconName: <CiBellOn className="text-red-600" />,
      name: "Smoke Detected",
      device: "Hallway Smokie Detector",
      description: "Smoke was detected in the hallway",
      iconSeverity: <SiSpringsecurity className="text-red-600 w-5 h-5" />,
      severity: "Critical",
      iconStatus: <FaFolderOpen />,
      status: "Open",
      Time: "9:41 AM",
    },
    {
      iconName: <LuDoorOpen className="text-yellow-600" />,
      name: "Front door opened",
      device: "Front Door Lock",
      description: "Front door was opened remotely",
      iconSeverity: <CiWarning className="text-red-600 w-5 h-5" />,
      severity: "Warning",
      iconStatus: <FaGetPocket />,
      status: "Acknowledged",
      Time: "8:41 AM",
    },
    {
      iconName: <CiBellOn className="text-red-600" />,
      name: "Smoke Detected",
      device: "Hallway Smokie Detector",
      description: "Smoke was detected in the hallway",
      iconSeverity: <SiSpringsecurity className="text-red-600 w-5 h-5" />,
      severity: "Critical",
      iconStatus: <FaFolderOpen />,
      status: "Open",
      Time: "9:41 AM",
    },
    {
      iconName: <LuDoorOpen className="text-yellow-600" />,
      name: "Front door opened",
      device: "Front Door Lock",
      description: "Front door was opened remotely",
      iconSeverity: <CiWarning className="text-red-600 w-5 h-5" />,
      severity: "Warning",
      iconStatus: <FaGetPocket />,
      status: "Acknowledged",
      Time: "8:41 AM",
    },
    {
      iconName: <CiBellOn className="text-red-600" />,
      name: "Smoke Detected",
      device: "Hallway Smokie Detector",
      description: "Smoke was detected in the hallway",
      iconSeverity: <SiSpringsecurity className="text-red-600 w-5 h-5" />,
      severity: "Critical",
      iconStatus: <FaFolderOpen />,
      status: "Open",
      Time: "9:41 AM",
    },
    {
      iconName: <LuDoorOpen className="text-yellow-600" />,
      name: "Front door opened",
      device: "Front Door Lock",
      description: "Front door was opened remotely",
      iconSeverity: <CiWarning className="text-red-600 w-5 h-5" />,
      severity: "Warning",
      iconStatus: <FaGetPocket />,
      status: "Acknowledged",
      Time: "8:41 AM",
    },
  ];
  return (
    <>
      <div className="bg-white p-4 sm:p-5 rounded-2xl text-slate-600 overflow-x-auto">
        <div className="min-w-[760px] grid grid-cols-6 gap-3 pb-3 border-b border-slate-200 font-bold text-slate-900">
          <p>Alert</p>
          <p>Device/Location</p>
          <p>Description</p>
          <p>Severity</p>
          <p>Status</p>
          <p>Time</p>
        </div>
        <div className="min-w-[760px] divide-y divide-slate-100">
          {list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-6 items-center gap-3 py-3"
            >
              <div className="flex items-center gap-3">
                <p>{item.iconName}</p>
                <p className="font-medium">{item.name}</p>
              </div>
              <div className="font-bold">{item.device}</div>
              <div>{item.description}</div>
              <div className="flex items-center gap-1">
                <span>{item.iconSeverity}</span>
                <div>{item.severity}</div>
              </div>
              <div>{item.status}</div>
              <div>{item.Time}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AlertList;
