import smartHomeSmokeDetector from "../../../assets/smarthome_smoke_detector.png";
import { IoIosNotificationsOff } from "react-icons/io";
import type { IDevice } from "../../../types";
import SmokeControl from "../control/SmokeControl";
import { useState } from "react";
interface SmokeDetectorProp {
  device: IDevice;
}

function SmokeDetector({ device }: SmokeDetectorProp) {
  const [control, setControl] = useState(false);
  return (
    <>
      <div>
        <img src={smartHomeSmokeDetector} />
      </div>
      <div className="flex justify-between">
        <div>
          <p
            className={
              device.state.smokeDetected == false
                ? "text-green-600 font-bold"
                : "text-red-600 font-bold"
            }
          >
            {device.state.smokeDetected == false ? "Safe" : "Warning"}
          </p>
          <p
            className={
              device.state.smokeDetected == false
                ? "text-slate-600"
                : "text-red-600 text-2xl"
            }
          >
            {device.state.smokeDetected == false ? "Clear" : "Fire Detected"}
          </p>
        </div>
        <button onClick={() => setControl(true)}>
          <IoIosNotificationsOff className="px-3 py-3 rounded-full w-11 h-11 bg-blue-600 text-white" />
        </button>
      </div>
      {control && (
        <SmokeControl device={device} onClose={() => setControl(false)} />
      )}
    </>
  );
}

export default SmokeDetector;
