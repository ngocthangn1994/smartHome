import smartHomeWaterLeakSensor from "../../../assets/smarthome_waterleaksensor.png";
import type { IDevice } from "../../../types";
import CameraControl from "../control/CameraControl";
import { useState } from "react";
interface WaterLeakSensorProp {
  device: IDevice;
}
function WaterLeakSensor({ device }: WaterLeakSensorProp) {
  const [control, setControl] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between text-slate-600">
        <div>
          <img src={smartHomeWaterLeakSensor} />
          <p className="text-green-600 font-bold">Dry</p>
        </div>
        <div>
          <p>No leaks detected</p>
        </div>
      </div>
      {control && (
        <CameraControl device={device} onClose={() => setControl(false)} />
      )}
    </>
  );
}

export default WaterLeakSensor;
