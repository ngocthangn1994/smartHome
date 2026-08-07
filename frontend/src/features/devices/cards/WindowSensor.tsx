import smartHomeWindowSensor from "../../../assets/devices/smarthome_windowsensor.png";
import type { IDevice } from "../../../types";
import { useState } from "react";
import WindowSensorControl from "../control/WindowSensorControl";
interface WindowSensorProps {
  device: IDevice;
}
function WindowSensor({ device }: WindowSensorProps) {
  const [control, setControl] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between">
        <div>
          <img src={smartHomeWindowSensor} />
          <p className="text-green-600 font-bold">Locked</p>
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => setControl(true)}
            className="border w-full rounded-2xl border-slate-200 shadow-sm py-2 text-blue-600 font-bold hover:bg-blue-600 hover:text-white"
          >
            Unlock
          </button>
        </div>
      </div>
      {control && (
        <WindowSensorControl
          device={device}
          onClose={() => setControl(false)}
        />
      )}
    </>
  );
}

export default WindowSensor;
