import { CiSettings } from "react-icons/ci";
import { MdOutlineBackup } from "react-icons/md";
import { FaFileExport } from "react-icons/fa";

function BackupSystem() {
  return (
    <>
      <div className="bg-white px-5 py-5 rounded-2xl space-y-3">
        <div className="flex items-center gap-2">
          <CiSettings />
          <p className="font-bold text-xl">Backup & System</p>
        </div>
        <div className="space-y-3">
          <div>
            <div className="flex items-center gap-2">
              <MdOutlineBackup className="w-8 h-8 px-1 py-1 rounded-full bg-slate-200" />
              <div>
                <p className="font-bold">Automatic Backup</p>
                <p>Automatically back up your data daily</p>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <p className="font-bold">Last Backup</p>
            <p>May 7, 2026, 7:30 AM </p>
            <span className="bg-green-100 text-green-600 px-2 py-2 rounded-2xl font-bold">
              Success
            </span>
          </div>
          <div>
            <div>
              <div className="flex items-center gap-2">
                <FaFileExport className="w-8 h-8 px-1 py-1 rounded-full bg-slate-200" />
                <div>
                  <p className="font-bold">Export Data</p>
                  <p>Download a copy of your data</p>
                </div>
                <button className="px-2 py-2  font-bold border border-slate-200 rounded-2xl">
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <p className="font-bold">Storage Usage</p>
            <p className="text-sm ">3.2 GB of 10 GB used</p>
          </div>
          <div className="w-full h-1 bg-slate-600">
            <div className="w-1/2 h-1 bg-blue-600"></div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold">Update Channel</p>
          <select className="border border-slate-200 px-2 py-2 rounded-2xl">
            <option>Stable (Recommended)</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default BackupSystem;
