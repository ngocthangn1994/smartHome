import smartHomeCamera from "../../../assets/devices/smarthome_camera.png";
import { FaCircle } from "react-icons/fa6";
import type { IDevice } from "../../../types";
import CameraControl from "../control/CameraControl";
import { useState } from "react";
interface CameraProp {
  device: IDevice;
}
function Camera({ device }: CameraProp) {
  const [control, setControl] = useState(false);
  const cameraShot = [
    { area: "Front Door", img: smartHomeCamera },
    { area: "Side House", img: smartHomeCamera },
    { area: "Backyard", img: smartHomeCamera },
  ];
  const cameraImage = cameraShot.find((camera) => camera.area === device.area);
  return (
    <>
      <div>
        <div className="flex flex-col justify-between h-[350px]">
          <div>{<img className="rounded-xl" src={cameraImage?.img} />}</div>
          <div className="flex items-center gap-3 mb-3">
            <FaCircle className="text-orange-300" />
            <p className="text-slate-600">
              {device.state.motionDetected == false
                ? "Motion Detected"
                : "No Motion"}
            </p>
          </div>
          <button
            onClick={() => setControl(true)}
            className="w-full rounded-xl border py-2 border-slate-200 shadow-sm"
          >
            View Live
          </button>
        </div>
      </div>
      {control && (
        <CameraControl device={device} onClose={() => setControl(false)} />
      )}
    </>
  );
}

export default Camera;
