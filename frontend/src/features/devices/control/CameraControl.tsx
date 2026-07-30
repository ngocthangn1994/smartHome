import { useState } from "react";
import type { IDevice } from "../../../types";
import api from "../../../api/api";

type Props = {
  device: IDevice;
  onClose: () => void;
};

function CameraControl({ device, onClose }: Props) {
  const [viewMode, setViewMode] = useState<"snapshot" | "stream">("snapshot");
  const [snapshotVersion, setSnapshotVersion] = useState(Date.now());
  const [imageError, setImageError] = useState(false);

  const cameraEntityId = device.haEntityId;

  const snapshotUrl = cameraEntityId
    ? `${api.getCameraSnapshotUrl(cameraEntityId)}?t=${snapshotVersion}`
    : "";
  const streamUrl = cameraEntityId
    ? api.getCameraStreamUrl(cameraEntityId)
    : "";

  const imageSrc = viewMode === "snapshot" ? snapshotUrl : streamUrl;

  const handleRefreshSnapshot = () => {
    setImageError(false);
    setSnapshotVersion(Date.now());
  };

  return (
    <>
      {" "}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-400 bg-white px-5 py-5">
          <div className="border-b border-slate-200 mb-5">
            <div className="flex justify-between items-center mb-5">
              <button
                onClick={() => onClose()}
                className="bg-blue-100 p-2 rounded-full ring-1 ring-blue-200 text-slate-900 font-bold hover:bg-blue-200 shadow-sm hover:shadow-lg hover:ring-blue-300"
              >
                X
              </button>

              <p className="text-[1.2rem] font-semibold">{device.name}</p>

              {/* Empty div keeps title centered */}
              <div className="w-8"></div>
            </div>
          </div>{" "}
          <div className="space-y-5">
            <div className="text-center">
              <p className="text-sm text-slate-400 font-semibold">
                {device.area}
              </p>
              <h3 className="text-2xl font-bold text-slate-800">
                {device.name}
              </h3>
              <p className="text-sm text-slate-500">
                Entity: {device.haEntityId}
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              {imageError ? (
                <div className="h-64 flex items-center justify-center text-center px-5">
                  <div>
                    <p className="text-4xl mb-2">📷</p>
                    <p className="font-bold text-slate-700">
                      Camera unavailable
                    </p>
                    <p className="text-sm text-slate-500">
                      Check Home Assistant entity ID or camera connection.
                    </p>
                  </div>
                </div>
              ) : (
                <img
                  src={imageSrc}
                  alt={
                    viewMode === "snapshot"
                      ? "Camera snapshot"
                      : "Camera stream"
                  }
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
        </div>
      </div>
    </>
  );
}

export default CameraControl;
