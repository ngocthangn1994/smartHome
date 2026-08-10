import { FaPowerOff } from "react-icons/fa6";
import smartHomeSamrtPlug from "../../../assets/devices/smarthome_smartplug.png";
import type { IDevice } from "../../../types";
import { useState } from "react";
import SmartPlugControl from "../control/SmartPlugControl";

interface SmartPlugProp {
  device: IDevice;
}
function SmartPlug({ device }: SmartPlugProp) {
  const [control, setControl] = useState(false);

  return (
    <>
      <div>
        <img src={smartHomeSamrtPlug} />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-green-600 font-bold">{device.status}</p>
          <p className="text-slate-600">{device.batteryLevel}% battery</p>
        </div>
        <button onClick={() => setControl(true)}>
          <FaPowerOff className="px-3 py-3 rounded-full w-11 h-11 bg-blue-600 text-white" />
        </button>
      </div>

      {control && (
        <SmartPlugControl device={device} onClose={() => setControl(false)} />
      )}
    </>
  );
}

export default SmartPlug;
