import { MdLocalPolice } from "react-icons/md";
import { MdDevicesOther } from "react-icons/md";
import { SlEnergy } from "react-icons/sl";
import { FaBuildingShield } from "react-icons/fa6";

function Detail() {
  const detail = [
    {
      icon: (
        <MdLocalPolice className="w-15 h-15 p-2 bg-sky-100 rounded-full text-blue-600" />
      ),
      name: "Homes Protected",
      description: "Trusted by thousands of users",
    },
    {
      icon: (
        <MdDevicesOther className="w-15 h-15 p-2 bg-green-100 rounded-full text-green-600" />
      ),
      name: "Smart Devices",
      description: "Compatible and growing",
    },
    {
      icon: (
        <SlEnergy className="w-15 h-15 p-2 bg-purple-100 rounded-full text-purple-600" />
      ),
      name: "System Uptime",
      description: "Always here when you need it",
    },
    {
      icon: (
        <FaBuildingShield className="w-15 h-15 p-2 bg-orange-100 rounded-full text-orange-600" />
      ),
      name: "Always Protecting",
      description: "Monitoring your home anytime",
    },
  ];
  return (
    <>
      <div className="text-slate-600 mt-10 border border-slate-200 p-10 gap-2 grid grid-cols-2 xl:grid-cols-4 space-y-3">
        {detail.map((item) => (
          <div className="flex items-center gap-3 text-center">
            {item.icon}
            <div>
              <p className="font-bold text-xl">{item.name}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Detail;
