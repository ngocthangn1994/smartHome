import type { ActionType, IAutomationRule, TriggerType } from "../../../types";
import type { ReactNode } from "react";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { FaHouseFire } from "react-icons/fa6";
import { FaTemperatureHigh } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { GiMatterStates } from "react-icons/gi";
import { IoFlashOff } from "react-icons/io5";
import { CiMonitor } from "react-icons/ci";
import { GoAlert } from "react-icons/go";
import { FaCircle } from "react-icons/fa";
import { HiMiniPencil } from "react-icons/hi2";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
interface AutomationListProps {
  automationRules: IAutomationRule[];
  handleDelete: (id: string) => void;
}

function AutomationList({
  automationRules,
  handleDelete,
}: AutomationListProps) {
  const triggerTypeData: Record<
    TriggerType,
    { icon: ReactNode; name: string }
  > = {
    smoke_detected: {
      icon: (
        <FaHouseFire className="bg-red-100 w-8 h-8 p-2 rounded-xl text-red-600" />
      ),
      name: "Smoke Detected",
    },
    motion_detected: {
      icon: (
        <FaPersonWalkingDashedLineArrowRight className="bg-green-100 w-8 h-8 p-2 rounded-xl text-green-600" />
      ),
      name: "Motion Detected",
    },
    state_change: {
      icon: (
        <GiMatterStates className="bg-red-100 w-8 h-8 p-2 rounded-xl text-red-600" />
      ),
      name: "State Change",
    },
    temperature: {
      icon: (
        <FaTemperatureHigh className="bg-blue-100 w-8 h-8 p-2 rounded-xl text-blue-600" />
      ),
      name: "Temperature",
    },
    time: {
      icon: (
        <CiTimer className="bg-slate-100 w-8 h-8 p-2 rounded-xl text-salte-600" />
      ),
      name: "Time",
    },
  };
  const actionTypeData: Record<ActionType, { icon: ReactNode; name: string }> =
    {
      turn_on: {
        icon: (
          <CiMonitor className="bg-blue-100 w-8 h-8 p-2 rounded-xl text-blue-600" />
        ),
        name: "Turn On",
      },
      turn_off: {
        icon: (
          <IoFlashOff className="bg-slate-100 w-8 h-8 p-2 rounded-xl text-salte-600" />
        ),
        name: "Turn Off",
      },
      set_temperature: {
        icon: (
          <FaTemperatureHigh className="bg-green-100 w-8 h-8 p-2 rounded-xl text-green-600" />
        ),
        name: "Set Temperature",
      },
      send_alert: {
        icon: (
          <GoAlert className="bg-orange-100 w-8 h-8 p-2 rounded-xl text-orange-600" />
        ),
        name: "Send Alert",
      },
    };

  return (
    <>
      <div className="space-y-3">
        {automationRules.map((item) => (
          <div
            key={item._id}
            className="text-slate-600 bg-white rounded-2xl px-5 py-5 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {triggerTypeData[item.triggerType].icon}
                <p className="font-bold">{item.name}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 px-5 py-2 rounded-2xl flex items-center gap-2">
                  <FaCircle className="text-green-600" />
                  <p>Active</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="border border-slate-200  rounded-xl hover:ring-1 hover:ring-slate-200">
                    <HiMiniPencil className="w-8 h-8 p-2" />
                  </button>
                  <button
                    className="border border-slate-200  rounded-xl  hover:ring-1 hover:ring-red-200"
                    type="button"
                    onClick={() => handleDelete(item._id)}
                  >
                    <FaRegTrashAlt className=" w-8 h-8 p-2" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="border border-slate-200 rounded-xl px-5 py-2 flex items-center gap-3 w-lg justify-between">
                <div className="flex items-center gap-3">
                  <MdDevices className="w-8 h-8 bg-blue-100 p-2 rounded-xl" />
                  <div>
                    <p className="text-slate-600">Trigger Device</p>
                    <p className="font-medium">{item.triggerDevice}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {triggerTypeData[item.triggerType].icon}
                  <div>
                    <p className="text-slate-600">Trigger Type</p>
                    <p className="font-medium">
                      {triggerTypeData[item.triggerType].name}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <FaArrowRight />
              </div>
              <div className="border border-slate-200 rounded-xl px-5 py-2 flex items-center gap-3 w-lg justify-between">
                <div className="flex items-center gap-3">
                  <MdDevices className="w-8 h-8 bg-blue-100 p-2 rounded-xl" />
                  <div>
                    <p className="text-slate-600">Action Device</p>
                    <p className="font-medium">{item.actionDevice}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {actionTypeData[item.actionType].icon}
                  <div>
                    <p className="text-slate-600">Action Type</p>
                    <p className="font-medium">
                      {actionTypeData[item.actionType].name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AutomationList;
