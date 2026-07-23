import smartHomeMotionSensor from "../../../assets/smarthome_motionsensor.png";
import { FaCircle } from "react-icons/fa6";
import type { IDevice } from "../../../types";
import CameraControl from "../control/CameraControl";
import { useState } from "react";
interface WaterLeakSensorProp {
  device: IDevice;
}
function MotionSensor({ device }: WaterLeakSensorProp) {
  const [control, setControl] = useState(false);

  return (
    <>
      <div className="flex h-[350px] flex-col justify-between text-slate-600">
        <div>
          <div>
            <img src={smartHomeMotionSensor} />
            <p className="text-green-600 font-bold">Clear</p>
          </div>
          <div>
            <p>Last motion: 2h ago</p>
          </div>
        </div>
      </div>
      {control && (
        <CameraControl device={device} onClose={() => setControl(false)} />
      )}
    </>
  );
}

export default MotionSensor;
