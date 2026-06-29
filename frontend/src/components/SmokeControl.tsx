// // import type { IDevice } from "../types";

// // type Props = {
// //   device: IDevice;
// // };

// // function SmokeControl({ device }: Props) {
// //   return (
// //     <div>
// //       <div className="text-center bg-green-50 border border-green-200 rounded-3xl p-8">
// //         <div className="text-6xl">🔥</div>
// //         <h2 className="text-3xl font-bold mt-3">Clear</h2>
// //         <p className="text-slate-500">No smoke detected</p>
// //       </div>

// //       <div className="mt-5 space-y-3">
// //         <div className="flex justify-between bg-slate-100 p-4 rounded-2xl">
// //           <span className="font-semibold">Status</span>
// //           <span>{device.status}</span>
// //         </div>

// //         <div className="flex justify-between bg-slate-100 p-4 rounded-2xl">
// //           <span className="font-semibold">Battery</span>
// //           <span>95%</span>
// //         </div>

// //         <div className="flex justify-between bg-slate-100 p-4 rounded-2xl">
// //           <span className="font-semibold">Last Alert</span>
// //           <span>None</span>
// //         </div>
// //       </div>

// //       <button className="mt-5 w-full bg-red-500 text-white font-bold py-3 rounded-2xl">
// //         Test Alert
// //       </button>
// //     </div>
// //   );
// // }

// // export default SmokeControl;

// import type { IDevice } from "../types";

// type SmokeControlProps = {
//   device: IDevice;
// };

// function SmokeControl({ device }: SmokeControlProps) {
//   return (
//     <>
//       <div className="space-y-5">
//         <div className="bg-green-50 w-full ring-1 ring-green-200 rounded-2xl px-5 py-5 text-center">
//           <span className="text-6xl">🔥</span>
//           <p className="font-bold text-4xl">Clear</p>
//           <p className="text-gray-500 text-sm">No smoke detected</p>
//         </div>
//         <div className="bg-slate-100 rounded-2xl flex justify-between px-5 py-2 text-slate-600">
//           <p className="font-semibold">Status</p>
//           <p>online</p>
//         </div>
//         <div className="bg-slate-100 rounded-2xl flex justify-between px-5 py-2 text-slate-600">
//           <p className="font-semibold">Battery</p>
//           <p>92%</p>
//         </div>
//         <div className="bg-slate-100 rounded-2xl flex justify-between px-5 py-2 text-slate-600">
//           <p className="font-semibold">Last Alert</p>
//           <p>None</p>
//         </div>
//         <div className="mt-10 bg-green-100 rounded-2xl px-2 py-2 text-center ring-1 ring-green-200 hover:ring-green-300 hover:bg-green-200">
//           <button className="font-semibold text-xl text-green-600">
//             Test Alert
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SmokeControl;

import { useState } from "react";
import type { IDevice } from "../types";

type SmokeControlProps = {
  device: IDevice;
};

function SmokeControl({ device }: SmokeControlProps) {
  const [testMode, setTestMode] = useState(false);

  const smokeDetected = device.state?.smokeDetected ?? false;

  const hasDanger = smokeDetected || testMode;

  return (
    <div className="space-y-5">
      <div
        className={`w-full rounded-2xl px-5 py-6 text-center ring-1 ${
          hasDanger ? "bg-red-50 ring-red-200" : "bg-green-50 ring-green-200"
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
  );
}

export default SmokeControl;
