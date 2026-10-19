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
      <div className="flex flex-1 flex-col justify-between gap-3">
        <div>
          <img
            className="mx-auto w-full max-h-56 object-contain"
            src={smartHomeGarage}
          />
          <p className="text-green-600 font-bold">Locked</p>
        </div>
        <div className="text-center">
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
