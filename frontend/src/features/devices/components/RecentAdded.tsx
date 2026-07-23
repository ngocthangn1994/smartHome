import {
  FaPlug,
  FaLightbulb,
  FaGlassWaterDroplet,
  FaCircle,
} from "react-icons/fa6";

function RecentAdded() {
  const devices = [
    {
      name: "Smart Plug (Bedroom)",
      icon: <FaPlug className="bg-slate-200 w-8 h-8 rounded-full px-2 py-2" />,
    },
    {
      name: "Smart Light (Office)",
      icon: (
        <FaLightbulb className="bg-slate-200 w-8 h-8 rounded-full px-2 py-2" />
      ),
    },
    {
      name: "Water Leak Sensor (Basement)",
      icon: (
        <FaGlassWaterDroplet className="bg-slate-200 w-8 h-8 rounded-full px-2 py-2" />
      ),
    },
  ];
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">Recent Added</p>
          <p className="text-blue-600 font-semibold">View All</p>
        </div>
        <div className="mt-5 space-y-3">
          {devices.map((device) => (
            <div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {device.icon}
                  {device.name}
                </div>
                <FaCircle className="text-green-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RecentAdded;
