import { FaFire, FaRegSnowflake, FaFan, FaRobot } from "react-icons/fa6";
import { RiRemoteControl2Line } from "react-icons/ri";
import { useState } from "react";
import type { IDevice } from "../../../types";
import ThermostatControl from "../control/ThermostatControl";
interface ThermostatProp {
  device: IDevice;
}

function Thermostat({ device }: ThermostatProp) {
  const [showControl, setShowControl] = useState(false);
  const nameMode: Record<string, string> = {
    heat: "Heating",
    cool: "Cooling",
    fan_only: "Fan Only",
    auto: "Auto",
  };
  const iconMode: Record<string, any> = {
    heat: <FaFire className="text-red-600" />,
    cool: <FaRegSnowflake className="text-blue-600" />,
    fan_only: <FaFan className="text-orange-600" />,
    auto: <FaRobot />,
  };
  return (
    <>
      <div>
        <div className="flex justify-center h-[250px]">
          <div className="relative w-65 h-65 ">
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full"
            >
              <circle
                cx="100"
                cy="100"
                r="72"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="340 452"
                transform="rotate(135 100 100)"
              />

              {/* Blue active part */}
              <circle
                cx="100"
                cy="100"
                r="72"
                fill="none"
                stroke="#4f46e5"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="190 452"
                transform="rotate(135 100 100)"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-start">
                <span className="text-4xl font-medium text-slate-900">
                  {device.state.currentTemperature}
                </span>

                <span className="mt-2 text-xs font-medium text-slate-900">
                  °F
                </span>
              </div>
            </div>

            <p className="absolute bottom-0 left-0 right-0 text-center text-[10px] text-slate-500 font-bold">
              {device.state.targetTemperature}
            </p>
          </div>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center gap-2">
            {device.state.hvacMode && iconMode[device.state.hvacMode]}
            <p
              className={`font-bold ${device.state.hvacMode && device.state.hvacMode === "cool" ? "text-blue-600" : "text-red-600"}`}
            >
              {device.state.hvacMode && nameMode[device.state.hvacMode]}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center px-5 mt-7">
          <button
            onClick={() => setShowControl(true)}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2.5 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 active:scale-95"
          >
            <RiRemoteControl2Line className="text-xl" />
            Control
          </button>
        </div>
      </div>
      {showControl && (
        <ThermostatControl
          device={device}
          onClose={() => setShowControl(false)}
        />
      )}
    </>
  );
}

export default Thermostat;
