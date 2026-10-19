import { FaCircle } from "react-icons/fa";

function SettingsOverview() {
  return (
    <>
      <div className="h-full space-y-3 bg-white p-4 sm:p-5 rounded-2xl text-slate-600">
        <p className="text-xl font-bold">Settings Overview</p>
        <div className="flex flex-wrap justify-center sm:justify-between gap-5 items-center">
          <div className="shrink-0 p-3 md:p-4 bg-green-600 rounded-full">
            <div className="w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center bg-white rounded-full">
              <p className="font-bold text-3xl">87%</p>
              <p>Healthy</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <FaCircle className="text-green-600" />
                <p className="font-bold">Security</p>
              </div>
              <p className="text-green-600">Execellent</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <FaCircle className="text-blue-600" />
                <p className="font-bold">Integrations</p>
              </div>
              <p className="text-green-600">Good</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <FaCircle className="text-yellow-300" />
                <p className="font-bold">Notifications</p>
              </div>
              <p className="text-green-600">Good</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                <FaCircle className="text-red-600" />
                <p className="font-bold">System</p>
              </div>
              <p className="text-green-600">Needs Attention</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SettingsOverview;
