import { FaFileShield, FaDownload, FaUsersViewfinder } from "react-icons/fa6";
import { MdOutlinePrivacyTip } from "react-icons/md";

function QuickAction() {
  const actions = [
    {
      icon: (
        <FaFileShield className="text-blue-600 w-8 h-8 bg-slate-200 px-2 py-2 rounded-full" />
      ),
      name: "Arm Cameras",
      mode: "Away Mode",
    },
    {
      icon: (
        <MdOutlinePrivacyTip className="text-blue-600 w-8 h-8 bg-slate-200 px-2 py-2 rounded-full" />
      ),
      name: "Privacy Mode",
      mode: "Disable All Feeds",
    },
    {
      icon: (
        <FaDownload className="text-blue-600 w-8 h-8 bg-slate-200 px-2 py-2 rounded-full" />
      ),
      name: "Download Clip",
      mode: "Save Recent Video",
    },
    {
      icon: (
        <FaUsersViewfinder className="text-blue-600 w-8 h-8 bg-slate-200 px-2 py-2 rounded-full" />
      ),
      name: "View Recording",
      mode: "Browse Timeline",
    },
  ];
  return (
    <>
      <div className="bg-white rounded-2xl px-5 py-5 flex justify-between grid grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-xl font-bold">Quick Actions</p>
          <div className="flex justify-between px-10 mt-5">
            {actions.map((item) => (
              <div className="text-slate-600">
                <div className="flex items-center gap-3">
                  <p>{item.icon}</p>
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p>{item.mode}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-l border-slate-200 ml-5 px-2">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center gap-3">
              <p className="text-xl font-bold">Recording Timeline</p>
              <p> (All Cameras)</p>
            </div>
            <select className="border border-slate-200 shadow-sm px-3 py-2 rounded-2xl">
              <option>Today</option>
            </select>
          </div>
          <div className="w-full rounded-2xl bg-white p-5 shadow-sm">
            {/* Timeline bar */}
            <div className="flex h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div className="w-[35%] bg-blue-600"></div>
              <div className="w-[7%] border-l-2 border-white bg-orange-400"></div>
              <div className="w-[8%] border-l-2 border-white bg-orange-500"></div>
              <div className="w-[6%] border-l-2 border-white bg-orange-500"></div>
              <div className="w-[5%] border-l-2 border-white bg-red-500"></div>
              <div className="w-[7%] border-l-2 border-white bg-orange-500"></div>
              <div className="w-[7%] border-l-2 border-white bg-red-500"></div>
              <div className="flex-1 bg-slate-200"></div>
            </div>

            {/* Time labels */}
            <div className="mt-3 flex justify-between text-xs font-medium text-slate-500">
              <span>12 AM</span>
              <span>4 AM</span>
              <span>8 AM</span>
              <span>12 PM</span>
              <span>4 PM</span>
              <span>8 PM</span>
              <span>12 AM</span>
            </div>

            {/* Legend */}
            <div className="mt-5 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-blue-600"></span>
                <span>Continuous</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-orange-500"></span>
                <span>Motion</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-red-500"></span>
                <span>Event</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-sm bg-slate-300"></span>
                <span>Offline</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickAction;
