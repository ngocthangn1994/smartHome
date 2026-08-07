import smartHomeSmartLight from "../../../assets/devices/smarthome_smartlight.png";
import type { IDevice } from "../../../types";
import { FiSun } from "react-icons/fi";

import CameraControl from "../control/CameraControl";
import { useState } from "react";
interface SmartLightProp {
  device: IDevice;
}
function SmartLight({ device }: SmartLightProp) {
  const [brightness, setBrightness] = useState(80);
  const [control, setControl] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between text-slate-600">
        <div>
          <img src={smartHomeSmartLight} />
          <p className="text-green-600 font-bold">On</p>
        </div>
        <div className="flex items-center gap-3">
          <FiSun className="shrink-0 text-lg text-slate-500" />
          <input
            type="range"
            value={brightness}
            onChange={(e: any) => setBrightness(e.target.value)}
            className="w-full h-1 cursor-pointer"
          />
          <span>{brightness}%</span>
        </div>
      </div>
      {control && (
        <CameraControl device={device} onClose={() => setControl(false)} />
      )}
    </>
  );
}

export default SmartLight;
