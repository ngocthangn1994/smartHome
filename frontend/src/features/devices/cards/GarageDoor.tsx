import smartHomeGarage from "../../../assets/devices/smarthome_garage.png";
import type { IDevice } from "../../../types";
import { useState } from "react";
import GarageControl from "../control/GarageControl";

interface GarageDoorProps {
  device: IDevice;
}
function GarageDoor({ device }: GarageDoorProps) {
  const [control, setControl] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-between h-[350px]">
        <div>
          <img src={smartHomeGarage} />
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
        <GarageControl device={device} onClose={() => setControl(false)} />
      )}
    </>
  );
}

export default GarageDoor;
