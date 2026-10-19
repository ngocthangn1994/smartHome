import smartHomeDoorLock from "../../../assets/devices/smarthome_doorlock.png";
import type { IDevice } from "../../../types";
import DoorLockControl from "../control/DoorLockControl";
import { useState } from "react";
interface DoorLockProp {
  device: IDevice;
}
function DoorLock({ device }: DoorLockProp) {
  const [control, setControl] = useState(false);

  return (
    <>
      <div className="flex flex-1 flex-col justify-between gap-3">
        <div>
          <img
            className="mx-auto w-full max-h-56 object-contain"
            src={smartHomeDoorLock}
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
        <DoorLockControl device={device} onClose={() => setControl(false)} />
      )}
    </>
  );
}

export default DoorLock;
