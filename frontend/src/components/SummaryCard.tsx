import type { IAlert, IDevice, IHome, IUser } from "../types";

export type SummaryCardProps = {
  devices: IDevice[];
  alerts: IAlert[];
  homes: IHome[];
  users: IUser[];
};

function SummaryCard({ devices, alerts, homes, users }: SummaryCardProps) {
  const onlineDevices = devices.filter((device) => device.status === "online");
  const smokeDetected = alerts.filter(
    (alert) => alert.type === "smoke_detected",
  );
  const motionDetected = alerts.filter(
    (alert) => alert.type === "motion_detected",
  );
  return (
    <>
      <div className="border border-slate-200 grid grid-rows-[0.8fr_1.2fr] rounded-2xl overflow-hidden hover:border-slate-300 shadow-sm hover:shadow-lg transition duration-300">
        <div className="border border-slate-200 px-5 py-3 bg-sky-50">
          <div>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <div>
                  <span className="bg-blue-300 px-2 py-2 rounded-full">🏡</span>
                </div>
                <div>
                  <h3 className="font-bold">Home Overview</h3>
                  <p className="text-slate-600">
                    Quick summy of smart home activity
                  </p>
                </div>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <span className="border border-slate-100 px-2 py-2 rounded-2xl shadow-sm ring-1 ring-slate-100">
                  {homes.length} homes
                </span>
                <span className="border border-slate-100 px-2 py-2 rounded-2xl shadow-sm ring-1 ring-slate-100">
                  {users.length} users
                </span>
                <span className="bg-yellow-50 text-red-600 border border-slate-300 px-2 py-2 rounded-2xl ring-1 ring-yellow-100">
                  Need Review
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 px-5 py-5">
          <div className="bg-white border shadow-sm border-slate-200 w-3xs px-5 py-5 rounded-2xl transition-all hover:-translate-y-1 ease-out duration-300 hover:border-slate-300 hover:shadow-lg">
            <div className="flex justify-between">
              <span className="bg-blue-100 w-8 h-8 px-1 py-1 rounded-full">
                📱
              </span>
              <p className="text-4xl font-bold text-blue-600">
                {onlineDevices.length}
              </p>
            </div>
            <div>
              <p className="font-bold">Devices</p>
              <p className="text-xs">Connected Service</p>
            </div>
          </div>
          <div className="bg-white border shadow-sm border-slate-200 w-3xs px-5 py-5 rounded-2xl transition-all hover:-translate-y-1 ease-out duration-300 hover:border-slate-300 hover:shadow-lg">
            <div className="flex justify-between">
              <span className="bg-orange-100 w-8 h-8 px-1 py-1 rounded-full">
                🚨
              </span>
              <p className="text-4xl font-bold text-orange-500">
                {alerts.length}
              </p>
            </div>
            <div>
              <p className="font-bold">Alerts</p>
              <p className="text-xs">Connected Service</p>
            </div>
          </div>
          <div className="bg-white border shadow-sm border-slate-200 w-3xs px-5 py-5 rounded-2xl transition-all hover:-translate-y-1 ease-out duration-300 hover:border-slate-300 hover:shadow-lg">
            <div className="flex justify-between">
              <span className="bg-red-100 w-8 h-8 px-1 py-1 rounded-full">
                🔥
              </span>
              <p className="text-4xl font-bold text-red-600">
                {smokeDetected.length}
              </p>
            </div>
            <div>
              <p className="font-bold">Smoke Detected</p>
              <p className="text-xs">Connected Service</p>
            </div>
          </div>
          <div className="bg-white border shadow-sm border-slate-200 w-3xs px-5 py-5 rounded-2xl transition-all hover:-translate-y-1 ease-out duration-300 hover:border-slate-300 hover:shadow-lg">
            <div className="flex justify-between">
              <span className="bg-blue-100 w-8 h-8 px-1 py-1 rounded-full">
                🥷
              </span>
              <p className="text-4xl font-bold text-slate-600">
                {motionDetected.length}
              </p>
            </div>
            <div>
              <p className="font-bold">Motion Detected</p>
              <p className="text-xs">Connected Service</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SummaryCard;
