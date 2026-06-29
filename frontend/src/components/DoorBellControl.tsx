import type { IDevice } from "../types";
import api from "../api/api";
import { useState } from "react";
type DoorBellControlProps = {
  device: IDevice;
};
function DoorBellControl({ device }: DoorBellControlProps) {
  const [viewMode, setViewMode] = useState<"stream" | "snapshot">("stream");
  const [error, setError] = useState("");

  const liveBackground =
    "bg-blue-500 text-white font-bold rounded-2xl px-3 py-3";
  const normalBackground =
    "bg-slate-100 text-slate-700 font-bold rounded-2xl px-3 py-3";

  const deviceId = device._id;
  const streamCamera = api.getCameraStreamUrl(deviceId);
  const snapshot = api.getCameraSnapshotUrl(deviceId);

  const imgSrc = viewMode === "stream" ? streamCamera : snapshot;

  return (
    <>
      <div className="space-y-5">
        <div className="text-center">
          <p className="text-gray-500">Front Door</p>
          <h3 className="font-bold text-xl">Ring Front Door DoorBell</h3>
          <p className="text-gray-500">{device.haEntityId}</p>
        </div>
        <div className="bg-slate-100 shadow-sm rounded-2xl overflow-hidden">
          {error ? (
            <div className="w-full h-72 text-center text-slate-600">
              <p className="text-2xl">🔔</p>
              <p className="font-bold text-xl">Can't load the Image</p>
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          ) : imgSrc ? (
            <img
              src={imgSrc}
              onError={() => setError("Camera image cannot load")}
              onLoad={() => setError("")}
              alt="Camera DoorBell View"
              className="w-full h-72 object-cover"
            />
          ) : (
            <div className="flex h-72 w-full items-center justify-center text-slate-500">
              No camera view loaded
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setViewMode("stream")}
            className={
              viewMode === "stream" ? liveBackground : normalBackground
            }
          >
            Live View
          </button>
          <button
            onClick={() => setViewMode("snapshot")}
            className={
              viewMode === "snapshot" ? liveBackground : normalBackground
            }
          >
            Snapshot
          </button>
        </div>
        <div className="bg-slate-100 px-3 py-3 text-slate-600 rounded-2xl shadow-sm">
          <div className="flex justify-between">
            <p>Status</p>
            <p className="text-slate-700 font-bold">{device.status}</p>
          </div>
          <div className="flex justify-between">
            <p>Motion</p>
            <p className="text-green-600 font-bold">Clear</p>
          </div>
          <div className="flex justify-between">
            <p>Battery</p>
            <p className="font-bold">90%</p>
          </div>
          <div className="flex justify-between">
            <p>EntityId</p>
            <p className="text-sm">{device.haEntityId}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoorBellControl;
