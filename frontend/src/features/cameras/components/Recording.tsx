import { FaCircle } from "react-icons/fa6";

function Recording() {
  return (
    <>
      <div className="mt-5 text-slate-600">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">Storage & Recording</p>
          <p className="text-blue-600">Settings</p>
        </div>
        <div className="space-y-3">
          <p className="font-bold">Cloud Storage</p>
          <div className="flex justify-between">
            <p>128 GB of 200 GB used</p>
            <p className="font-bold">64%</p>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-2xl">
            <div className="h-2 w-1/2 bg-blue-600 rounded-2xl"></div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <FaCircle className="text-red-600" />
              <p className="text-red-600 font-bold">REC</p>
              <p>7 Cameras Recording</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Recording;
