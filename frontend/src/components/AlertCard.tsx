import type { IAlert } from "../types";
type AlertCardProps = {
  alerts: IAlert[];
};

const iconAlert = {
  smoke_detected: "🔥",
  motion_detected: "🥷",
  battery_low: "🪫",
  offline: "📴",
};

const severityType = {
  low: "bg-orange-50 text-orange-500 font-bold px-2 py-2 rounded-2xl ring-1 ring-orange-100",
  medium:
    "bg-orange-100 text-orange-500 font-bold px-2 py-2 rounded-2xl ring-1 ring-orange-200",
  high: "bg-red-200 text-red-500 font-bold px-2 py-2 rounded-2xl ring-1 ring-orange-300",
  critical:
    "bg-red-300 text-red-500 font-bold px-2 py-2 rounded-2xl ring-1 ring-red-400",
};

function AlertCard({ alerts }: AlertCardProps) {
  const criticals = alerts.filter((alert) => alert.severity === "critical");
  return (
    <>
      <div>
        <div className="border border-slate-200 rounded-2xl px-3 py-3">
          <div>
            <div className="flex justify-between items-center space-y-5">
              <div className="flex gap-3 justify-center items-center">
                <span className="text-2xl bg-red-100 rounded-full p-1 py-1">
                  🚨
                </span>
                <div>
                  <h3 className="text-slate-600 text-2xl font-bold">Alerts</h3>
                  <p className="text-xs text-gray-500">
                    Recent smart home warnings and system events
                  </p>
                </div>
              </div>
              <div className="grid grid-rows text-center gap-2">
                <p className="text-2xl font-bold bg-red-50 rounded-2xl text-slate-600">
                  {alerts.length}
                </p>
                <p className="text-xs text-gray-500">Total alerts</p>
              </div>
            </div>
            <div className="grid grid-cols-2 text-center gap-4">
              <div className="text-red-500 bg-red-50 rounded-2xl px-2 py-2">
                <p className="font-bold text-2xl">{criticals.length}</p>
                <p className="text-xs">Critical</p>
              </div>
              <div className="text-green-500 bg-green-50 rounded-2xl px-2 py-2">
                <p className="font-bold text-2xl">Check</p>
                <p className="text-xs">System Status</p>
              </div>
            </div>
          </div>
          {alerts.map((alert) => (
            <div className="bg-white border border-slate-200 rounded-2xl px-2 py-2 mt-5 shadow-sm space-y-2 hover:border-slate-300 hover:shadow-lg transition duration-300 hover:-translate-y-1">
              <div className="flex justify-between items-center border-b border-slate-200 py-2 gap-3">
                <span className="bg-red-50 text-2xl border border-red-100 rounded-full px-1 py-1">
                  {iconAlert[alert.type]}
                </span>
                <div>
                  <p className="text-slate-600 font-bold">{alert.message}</p>
                </div>
                <span className={severityType[alert.severity]}>
                  {alert.severity}
                </span>
              </div>
              <div className="py-2 text-gray-500">
                <p>Created at: {alert.createdAt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AlertCard;
