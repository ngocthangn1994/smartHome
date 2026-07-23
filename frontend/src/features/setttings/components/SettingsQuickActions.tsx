import { IoIosSave } from "react-icons/io";
import { MdBackup } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { MdPreview } from "react-icons/md";

function SettingsQuickActions() {
  const actions = [
    {
      icon: <IoIosSave />,
      name: "Save All Changes",
      message: "Apply all settings",
    },
    { icon: <MdBackup />, name: "Run Backup Now", message: "Backup your data" },
    {
      icon: <FaHouseUser />,
      name: "Manage Users",
      message: "Add or remove users",
    },
    {
      icon: <MdPreview />,
      name: "Review Sessions",
      message: "View active sessions",
    },
  ];
  return (
    <>
      <div className="bg-white px-5 py-5 rounded-2xl">
        <p className="text-xl font-bold">Quick Actions</p>
        <div className="grid grid-cols-2 mt-5">
          {actions.map((item) => (
            <div className="space-y-2 border border-slate-200 shadow-sm px-5 py-5 rounded-2xl flex flex-col justify-center items-center gap-1">
              <span className="text-blue-600">{item.icon}</span>
              <div>
                <p className="font-bold">{item.name}</p>
                <p>{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SettingsQuickActions;
