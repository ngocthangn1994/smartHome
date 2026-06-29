// import { useState } from "react";
// import type { IDevice } from "../types";

// type Props = {
//   device: IDevice;
// };

// function ThermostatControl({ device }: Props) {
//   const [targetTemp, setTargetTemp] = useState(76);
//   const [mode, setMode] = useState("Cool");

//   return (
//     <div className="text-center">
//       <p className="text-sm text-slate-400 font-semibold">{device.area}</p>

//       <div className="mx-auto mt-6 w-64 h-64 rounded-full bg-sky-100 border-[14px] border-sky-200 flex flex-col items-center justify-center">
//         <p className="text-7xl font-bold text-sky-900">{targetTemp}</p>
//         <p className="text-slate-500">Cooling To</p>
//       </div>

//       <div className="mt-5 flex justify-center items-center gap-6">
//         <button
//           onClick={() => setTargetTemp((prev) => prev - 1)}
//           className="w-14 h-14 rounded-full bg-white shadow border text-3xl"
//         >
//           −
//         </button>

//         <span className="text-3xl font-bold">{targetTemp}°</span>

//         <button
//           onClick={() => setTargetTemp((prev) => prev + 1)}
//           className="w-14 h-14 rounded-full bg-white shadow border text-3xl"
//         >
//           +
//         </button>
//       </div>

//       <div className="mt-6 bg-sky-100 rounded-3xl p-4 text-left">
//         <p className="text-sm text-slate-500 font-bold">Mode</p>
//         <select
//           value={mode}
//           onChange={(e) => setMode(e.target.value)}
//           className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2"
//         >
//           <option>Cool</option>
//           <option>Heat</option>
//           <option>Off</option>
//           <option>Fan Only</option>
//         </select>
//       </div>

//       <div className="mt-4 bg-slate-100 rounded-3xl p-4 space-y-3 text-left">
//         <div className="flex justify-between">
//           <span className="font-semibold text-slate-600">
//             Indoor temperature
//           </span>
//           <span className="font-bold">76°</span>
//         </div>

//         <div className="flex justify-between">
//           <span className="font-semibold text-slate-600">Indoor humidity</span>
//           <span className="font-bold">62%</span>
//         </div>

//         <div className="flex justify-between">
//           <span className="font-semibold text-slate-600">Status</span>
//           <span className="font-bold capitalize">{device.status}</span>
//         </div>
//       </div>

//       <button className="mt-5 w-full bg-sky-500 text-white font-bold py-3 rounded-2xl hover:bg-sky-600">
//         Apply Changes
//       </button>
//     </div>
//   );
// }

// export default ThermostatControl;

import { useState } from "react";
import type { IDevice } from "../types";
import api from "../api/api";

type Props = {
  device: IDevice;
};

function CameraControl({ device }: Props) {
  const [viewMode, setViewMode] = useState<"snapshot" | "stream">("snapshot");
  const [snapshotVersion, setSnapshotVersion] = useState(Date.now());
  const [imageError, setImageError] = useState(false);

  const cameraEntityId = device.haEntityId;

  const snapshotUrl = `${api.getCameraSnapshotUrl(cameraEntityId)}?t=${snapshotVersion}`;
  const streamUrl = api.getCameraStreamUrl(cameraEntityId);

  const imageSrc = viewMode === "snapshot" ? snapshotUrl : streamUrl;

  const handleRefreshSnapshot = () => {
    setImageError(false);
    setSnapshotVersion(Date.now());
  };

  return (
    <div className="space-y-5">
      <div className="text-center">
        <p className="text-sm text-slate-400 font-semibold">{device.area}</p>
        <h3 className="text-2xl font-bold text-slate-800">{device.name}</h3>
        <p className="text-sm text-slate-500">Entity: {device.haEntityId}</p>
      </div>

      <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
        {imageError ? (
          <div className="h-64 flex items-center justify-center text-center px-5">
            <div>
              <p className="text-4xl mb-2">📷</p>
              <p className="font-bold text-slate-700">Camera unavailable</p>
              <p className="text-sm text-slate-500">
                Check Home Assistant entity ID or camera connection.
              </p>
            </div>
          </div>
        ) : (
          <img
            src={imageSrc}
            alt={viewMode === "snapshot" ? "Camera snapshot" : "Camera stream"}
            onError={() => setImageError(true)}
            className="w-full h-64 object-cover"
          />
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => {
            setImageError(false);
            setViewMode("snapshot");
            setSnapshotVersion(Date.now());
          }}
          className={`rounded-2xl py-3 font-bold border ${
            viewMode === "snapshot"
              ? "bg-sky-500 text-white border-sky-500"
              : "bg-white text-slate-700 border-slate-200"
          }`}
        >
          Snapshot
        </button>

        <button
          onClick={() => {
            setImageError(false);
            setViewMode("stream");
          }}
          className={`rounded-2xl py-3 font-bold border ${
            viewMode === "stream"
              ? "bg-sky-500 text-white border-sky-500"
              : "bg-white text-slate-700 border-slate-200"
          }`}
        >
          Live Stream
        </button>
      </div>

      {viewMode === "snapshot" && (
        <button
          onClick={handleRefreshSnapshot}
          className="w-full bg-slate-900 text-white font-bold py-3 rounded-2xl hover:bg-slate-800"
        >
          Refresh Snapshot
        </button>
      )}

      <div className="bg-slate-100 rounded-3xl p-4 space-y-3 text-left">
        <div className="flex justify-between">
          <span className="font-semibold text-slate-600">Status</span>
          <span className="font-bold capitalize">{device.status}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-slate-600">Motion</span>
          <span className="font-bold">
            {device.state?.motionDetected ? "Detected" : "Clear"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold text-slate-600">Power</span>
          <span className="font-bold capitalize">
            {device.state?.power || "unknown"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CameraControl;
