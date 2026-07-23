import { useState } from "react";
import type { IDevice } from "../../../types";

type SmokeControlProps = {
  device: IDevice;
  onClose: () => void;
};

function SmokeControl({ device, onClose }: SmokeControlProps) {
  const [testMode, setTestMode] = useState(false);

  const smokeDetected = device.state?.smokeDetected ?? false;

  const hasDanger = smokeDetected || testMode;

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

              {/* Empty div keeps title centered */}
              <div className="w-8"></div>
            </div>
          </div>
          <div className="space-y-5">
            <div
              className={`w-full rounded-2xl px-5 py-6 text-center ring-1 ${
                hasDanger
                  ? "bg-red-50 ring-red-200"
                  : "bg-green-50 ring-green-200"
              }`}
            >
              <span className="text-6xl">{hasDanger ? "🚨" : "🔥"}</span>

              <p
                className={`mt-2 text-4xl font-bold ${
                  hasDanger ? "text-red-700" : "text-green-700"
                }`}
              >
                {hasDanger ? "Alert" : "Clear"}
              </p>

              <p className="text-sm text-gray-500">
                {hasDanger ? "Smoke or danger detected" : "No smoke detected"}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 px-5 py-3 text-slate-600">
              <div className="flex justify-between">
                <p className="font-semibold">Status</p>
                <p className="capitalize">{device.status}</p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-100 px-5 py-3 text-slate-600">
              <div className="flex justify-between">
                <p className="font-semibold">Battery</p>
                <p>{device.batteryLevel ?? "N/A"}%</p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-100 px-5 py-3 text-slate-600">
              <div className="flex justify-between">
                <p className="font-semibold">Smoke</p>
                <p className={smokeDetected ? "font-bold text-red-600" : ""}>
                  {smokeDetected ? "Detected" : "Clear"}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-100 px-5 py-3 text-slate-600">
              <div className="flex justify-between">
                <p className="font-semibold">Last Updated</p>
                <p>
                  {device.state?.lastUpdatedAt
                    ? new Date(device.state.lastUpdatedAt).toLocaleString()
                    : "N/A"}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setTestMode((prev) => !prev)}
              className={`w-full rounded-2xl px-2 py-3 text-center text-xl font-semibold shadow-sm transition duration-200 ${
                testMode
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-green-100 text-green-700 ring-1 ring-green-200 hover:bg-green-200"
              }`}
            >
              {testMode ? "Stop Test Alert" : "Test Alert"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SmokeControl;
