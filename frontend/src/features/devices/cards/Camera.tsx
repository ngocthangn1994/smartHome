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
      <div className="flex h-[350px] flex-col justify-between">
        <div>
          <div>{<img className="rounded-xl" src={cameraImage?.img} />}</div>
          <div className="flex gap-2 items-center mt-2 justify-center">
            <FaCircle className="text-orange-300" />
            <p className="text-slate-600">
              {device.state.motionDetected == false
                ? "Motion Detected"
                : "No Motion"}
            </p>
          </div>
        </div>
        <button
          onClick={() => setControl(true)}
          className="w-full rounded-xl border py-2 border-slate-200 shadow-sm"
        >
          View Live
        </button>
      </div>
      {control && (
        <CameraControl device={device} onClose={() => setControl(false)} />
      )}
    </>
  );
}

export default Camera;
