import { FaCircle } from "react-icons/fa";

function SettingsOverview() {
  return (
    <>
      <div className="space-y-3 bg-white px-5 py-5 rounded-2xl text-slate-600">
        <p className="text-xl font-bold">Settings Overview</p>
        <div className="flex justify-between gap-3 items-center gap-3">
          <div className="px-3 md:px-4 py-3 md:py-4 bg-green-600 rounded-full">
            <div className="px-4 md:px-10  py-4 md:py-10  bg-white rounded-full">
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
