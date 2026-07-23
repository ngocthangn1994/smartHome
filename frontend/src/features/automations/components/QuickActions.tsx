import { HiOutlineDuplicate } from "react-icons/hi";
import { FaRegCirclePause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

function QuickActions() {
  const quickActions = [
    {
      icon: <CiCirclePlus className="text-3xl text-blue-600" />,
      name: "Create Automation",
    },
    {
      icon: <HiOutlineDuplicate className="text-3xl text-blue-600" />,
      name: "Duplicate",
    },
    {
      icon: <FaPlay className="text-2xl text-green-600" />,
      name: "Run All",
    },
    {
      icon: <FaRegCirclePause className="text-3xl text-red-600" />,
      name: "Pause All",
    },
  ];

  return (
    <div className="rounded-2xl bg-white p-4">
      <p className="text-xl font-bold">Quick Actions</p>

      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {quickActions.map((item) => (
          <button
            key={item.name}
            className="
              flex min-h-28 flex-col
              items-center justify-center
              gap-2 rounded-2xl
              border border-slate-200
              px-3 py-4 text-center
              transition hover:bg-slate-50
            "
          >
            <span className="flex items-center justify-center">
              {item.icon}
            </span>

            <span className="text-sm font-medium text-slate-700">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;
