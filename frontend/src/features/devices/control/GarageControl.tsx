import { useState } from "react";
import type { IDevice } from "../../../types";
import api from "../../../api/api";

type GarageControlProps = {
  device: IDevice;
  onClose: () => void;
};

function GarageControl({ device, onClose }: GarageControlProps) {
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
    <>
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

              <div className="w-8"></div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl bg-sky-50 px-5 py-7 text-center ring-1 ring-sky-200">
              <span className="text-6xl">🏘️</span>

              <p className="mt-3 text-2xl font-bold text-slate-800">
                {device.name}
              </p>

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
                <p className="font-bold capitalize text-green-600">
                  {device.status}
                </p>
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
        </div>
      </div>
    </>
  );
}

export default GarageControl;
