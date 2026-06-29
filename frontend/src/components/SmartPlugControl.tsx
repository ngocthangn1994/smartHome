// // // src/components/SmartPlugControl.tsx

// // import { useState } from "react";
// // import type { IDevice } from "../types";

// // type SmartPlugControlProps = {
// //   device: IDevice;
// // };

// // function SmartPlugControl({ device }: SmartPlugControlProps) {
// //   const [isOn, setIsOn] = useState(device.status === "online");

// //   function handleToggle() {
// //     setIsOn((prev) => !prev);

// //     // later you can call backend here:
// //     // api.controlDevice(device._id, { action: isOn ? "turn_off" : "turn_on" });
// //   }

// //   return (
// //     <div>
// //       <div className="text-center bg-sky-50 border border-sky-200 rounded-3xl p-8">
// //         <div className="text-6xl">🔌</div>

// //         <h2 className="text-2xl font-bold mt-4">{device.name}</h2>

// //         <p className="text-slate-500 mt-1">{device.area}</p>

// //         <p className="mt-4 text-lg font-bold">
// //           Power:{" "}
// //           <span className={isOn ? "text-green-600" : "text-red-500"}>
// //             {isOn ? "ON" : "OFF"}
// //           </span>
// //         </p>
// //       </div>

// //       <button
// //         type="button"
// //         onClick={handleToggle}
// //         className={
// //           isOn
// //             ? "mt-6 w-full bg-red-500 text-white font-bold py-4 rounded-2xl hover:bg-red-600"
// //             : "mt-6 w-full bg-green-500 text-white font-bold py-4 rounded-2xl hover:bg-green-600"
// //         }
// //       >
// //         {isOn ? "Turn Off" : "Turn On"}
// //       </button>

// //       <div className="mt-5 bg-slate-100 rounded-2xl p-4 space-y-3">
// //         <div className="flex justify-between">
// //           <span className="font-semibold text-slate-600">Status</span>
// //           <span className="font-bold">{device.status}</span>
// //         </div>

// //         <div className="flex justify-between">
// //           <span className="font-semibold text-slate-600">Entity ID</span>
// //           <span className="text-xs text-slate-500 truncate max-w-[150px]">
// //             {device.haEntityId}
// //           </span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default SmartPlugControl;

// import type { IDevice } from "../types";

// type SmartPlugControl = {
//   device: IDevice;
// };

// function SmartPlugControl({ device }: SmartPlugControl) {
//   return (
//     <>
//       <div className="space-y-5">
//         <div className="bg-sky-50 ring-1 ring-sky-200 px-5 py-7 rounded-2xl text-center">
//           <span className="text-6xl">🔌</span>
//           <p className="font-bold text-2xl">Bedroom Smart Plug</p>
//           <p className="text-gray-500">Bedroom</p>
//           <div className="flex justify-center items-center mt-2 gap-2">
//             <p className="font-bold">Power:</p>
//             <p className="text-green-600 font-bold">ON</p>
//           </div>
//         </div>
//         <div className="bg-red-500 rounded-2xl px-2 py-3 text-center hover:bg-red-600">
//           <button className="text-white font-semibold">Turn Off</button>
//         </div>
//         <div className="bg-sky-50 px-5 py-7">
//           <div className="flex justify-between">
//             <p className="text-gray-500 font-bold">Status</p>
//             <p className="text-green-600 font-bold">online</p>
//           </div>
//           <div className="flex justify-between">
//             <p className="text-gray-500 font-bold">Entity ID</p>
//             <p className="text-gray-500 text-sm">{device.haEntityId}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default SmartPlugControl;

import { useState } from "react";
import type { IDevice } from "../types";
import api from "../api/api";

type SmartPlugControlProps = {
  device: IDevice;
};

function SmartPlugControl({ device }: SmartPlugControlProps) {
  const [power, setPower] = useState(device.state?.power ?? "unknown");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isOn = power === "on";
  const deviceId = (device as any).id ?? (device as any)._id;

  const handleTogglePower = async () => {
    try {
      setIsLoading(true);
      setError("");

      const response = isOn
        ? await api.turnOffDevice(deviceId)
        : await api.turnOnDevice(deviceId);

      const updatedPower =
        response?.data?.state?.power ?? (isOn ? "off" : "on");

      setPower(updatedPower);
    } catch (error) {
      console.error(error);
      setError("Failed to control smart plug.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-sky-50 px-5 py-7 text-center ring-1 ring-sky-200">
        <span className="text-6xl">🔌</span>

        <p className="mt-3 text-2xl font-bold text-slate-800">{device.name}</p>

        <p className="text-gray-500">{device.area}</p>

        <div className="mt-3 flex items-center justify-center gap-2">
          <p className="font-bold text-slate-700">Power:</p>

          <p
            className={`font-bold ${isOn ? "text-green-600" : "text-red-500"}`}
          >
            {isOn ? "ON" : "OFF"}
          </p>
        </div>
      </div>

      {error && (
        <p className="text-center text-sm font-semibold text-red-500">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={handleTogglePower}
        disabled={isLoading}
        className={`w-full rounded-2xl px-2 py-3 text-center font-semibold text-white shadow-sm transition duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${
          isOn
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {isLoading ? "Updating..." : isOn ? "Turn Off" : "Turn On"}
      </button>

      <div className="space-y-3 rounded-2xl bg-sky-50 px-5 py-5">
        <div className="flex justify-between gap-4">
          <p className="font-bold text-gray-500">Status</p>
          <p className="font-bold capitalize text-green-600">{device.status}</p>
        </div>

        <div className="flex justify-between gap-4">
          <p className="font-bold text-gray-500">Power</p>
          <p className="font-bold capitalize text-slate-700">{power}</p>
        </div>

        <div className="flex justify-between gap-4">
          <p className="font-bold text-gray-500">Entity ID</p>
          <p className="max-w-[170px] truncate text-sm text-gray-500">
            {device.haEntityId}
          </p>
        </div>

        <div className="flex justify-between gap-4">
          <p className="font-bold text-gray-500">Last Updated</p>
          <p className="text-sm text-gray-500">
            {device.state?.lastUpdatedAt
              ? new Date(device.state.lastUpdatedAt).toLocaleString()
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SmartPlugControl;
