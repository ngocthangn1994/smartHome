import type { IDevice } from "../types";

type DeviceCardProps = {
  device: IDevice;
  onControl: (device: IDevice) => void;
  onSettings: (device: IDevice) => void;
};

const deviceIcons = {
  camera: "📷",
  thermostat: "🌡️",
  door_bell: "🔔",
  smart_plug: "🔌",
  smoke_detector: "💨",
};

const deviceNames = {
  thermostat: "Thermostat",
  smoke_detector: "Smoke Detector",
  door_bell: "Door Bell",
  camera: "Camera",
  smart_plug: "Smart Plug",
};

function DeviceCard({ device, onControl, onSettings }: DeviceCardProps) {
  const onlineBadge =
    "bg-green-100 ring-1 ring-green-400 rounded-2xl px-2 py-1 text-green-600 font-bold";
  const offlineBadge =
    "bg-red-100 ring-1 ring-red-400 rounded-2xl px-2 py-1 text-red-600 font-bold";
  return (
    <>
      <div className="bg-white border border-slate-200 shadow-sm px-3 py-3 rounded-2xl space-y-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
        <div>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="flex justify-center items-center text-center">
                <span className="bg-white h-8 w-8 border border-slate-300 rounded-full ">
                  {deviceIcons[device.deviceType]}
                </span>
              </div>
              <div>
                <p className="font-bold">{device.area}</p>
                <p className="text-gray-400 font-bold">
                  {deviceNames[device.deviceType]}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <span
                className={
                  device.status === "online" ? onlineBadge : offlineBadge
                }
              >
                {device.status}
              </span>
            </div>
          </div>
        </div>
        <div className="border border-slate-200 px-5 py-5 rounded-xl space-y-5">
          <div className="grid grid-cols-2">
            <div>
              <p className="text-gray-400 font-bold">AREA</p>
              <p className="block max-w-full truncate font-bold">
                {device.area}
              </p>
            </div>
            <div>
              <p className="text-gray-400 font-bold">System</p>
              <p className="font-bold">Home</p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2">
              <p className="text-gray-400 font-bold">ENTITY ID</p>
              <p className="text-blue-300 font-semibold rounded-full">HA</p>
            </div>
            <div className="mt-3">
              <span className="block max-w-full truncate text-xs text-gray-400 border border-slate-200 py-1 px-5 rounded-2xl">
                {device.haEntityId}
              </span>
            </div>
          </div>
        </div>
        <div className="mb-3 flex justify-between">
          <div>
            <span
              onClick={() => onControl(device)}
              className="bg-sky-50 ring-1 ring-sky-300 text-slate-600 shadow-sm font-bold px-3 py-3 rounded-2xl hover:bg-sky-100 hover:ring-sky-400"
            >
              Control Device
            </span>
          </div>
          <div>
            <span
              onClick={() => onSettings(device)}
              className="bg-blue-50 border border-slate-300 shadow-sm rounded-2xl px-1 py-1 hover:border-slate-400 hover:bg-blue-100 hover:shadow-lg"
            >
              ⚙️
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeviceCard;

// import type { IDevice } from "../types";

// type DeviceCardProps = {
//   device: IDevice;
//   onControl: (device: IDevice) => void;
//   onSettings: (device: IDevice) => void;
// };

// const deviceIcons: Record<string, string> = {
//   camera: "📷",
//   thermostat: "🌡️",
//   door_bell: "🔔",
//   smart_plug: "🔌",
//   smoke_detector: "💨",
// };

// const deviceNames: Record<string, string> = {
//   thermostat: "Thermostat",
//   smoke_detector: "Smoke Detector",
//   door_bell: "Door Bell",
//   camera: "Camera",
//   smart_plug: "Smart Plug",
// };

// function DeviceCard({ device, onControl, onSettings }: DeviceCardProps) {
//   const onlineBadge =
//     "bg-green-100 ring-1 ring-green-400 rounded-2xl px-2 py-1 text-green-600 font-bold";

//   const offlineBadge =
//     "bg-red-100 ring-1 ring-red-400 rounded-2xl px-2 py-1 text-red-600 font-bold";

//   return (
//     <div className="border border-slate-200 shadow-sm px-3 py-3 rounded-2xl space-y-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
//       <div>
//         <div className="flex justify-between">
//           <div className="flex gap-3">
//             <div className="flex justify-center items-center text-center">
//               <span className="flex h-8 w-8 items-center justify-center bg-white border border-slate-300 rounded-full">
//                 {deviceIcons[device.deviceType] ?? "🏠"}
//               </span>
//             </div>

//             <div>
//               <p className="font-bold">{device.area}</p>
//               <p className="text-gray-400 font-bold">
//                 {deviceNames[device.deviceType] ?? device.deviceType}
//               </p>
//             </div>
//           </div>

//           <div className="flex justify-center items-center">
//             <span
//               className={
//                 device.status === "online" ? onlineBadge : offlineBadge
//               }
//             >
//               {device.status}
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="border border-slate-200 px-5 py-5 rounded-xl space-y-5">
//         <div className="grid grid-cols-2">
//           <div>
//             <p className="text-gray-400 font-bold">AREA</p>
//             <p className="block max-w-full truncate font-bold">{device.area}</p>
//           </div>

//           <div>
//             <p className="text-gray-400 font-bold">System</p>
//             <p className="font-bold">Home</p>
//           </div>
//         </div>

//         <div>
//           <div className="grid grid-cols-2">
//             <p className="text-gray-400 font-bold">ENTITY ID</p>
//             <p className="text-blue-300 font-semibold rounded-full">HA</p>
//           </div>

//           <div className="mt-3">
//             <span className="block max-w-full truncate text-xs text-gray-400 border border-slate-200 py-1 px-5 rounded-2xl">
//               {device.haEntityId}
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="mb-3 flex justify-between items-center">
//         <button
//           type="button"
//           onClick={() => onControl(device)}
//           className="bg-sky-50 ring-1 ring-sky-300 text-slate-600 shadow-sm font-bold px-3 py-3 rounded-2xl hover:bg-sky-100 hover:ring-sky-400"
//         >
//           Control Device
//         </button>

//         <button
//           type="button"
//           onClick={() => onSettings(device)}
//           className="bg-blue-50 border border-slate-300 shadow-sm rounded-2xl px-3 py-2 hover:border-slate-400 hover:bg-blue-100 hover:shadow-lg"
//         >
//           ⚙️
//         </button>
//       </div>
//     </div>
//   );
// }

// export default DeviceCard;
