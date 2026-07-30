import { FaHouseDamage } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { IoIosPhonePortrait } from "react-icons/io";

function FeaturesSection() {
  const featuresMenu = [
    {
      icon: (
        <FaHouseDamage className="w-20 h-20 p-3 rounded-full bg-yellow-100 text-yellow-600" />
      ),
      name: "Control Everything",
      description: "Mange lights, locks, cameras, and more from one place.",
    },
    {
      icon: (
        <FaShieldAlt className="w-20 h-20 p-3 rounded-full bg-orange-100 text-orange-600" />
      ),
      name: "Advanced Security",
      description: "Real-time alrts, smart blocks, and 24/7 protection.",
    },
    {
      icon: (
        <SlEnergy className="w-20 h-20 p-3 rounded-full bg-slate-100 text-silver-600" />
      ),
      name: "Save Energy",
      description: "Monitor usage and automate to lower your bills",
    },
    {
      icon: (
        <IoIosPhonePortrait className="w-20 h-20 p-3 rounded-full bg-green-100 text-green-600" />
      ),
      name: "Access Anywhere",
      description: "Stay connected and in control from your phone.",
    },
  ];
  return (
    <>
      <section className="space-y-5 px-50 text-slate-600 mt-10">
        <div className="text-center">
          <span className="bg-slate-100 text-xl text-blue-600 font-medium px-2 py-2 rounded-xl">
            Features
          </span>
          <p className="text-2xl mt-5 font-bold">
            Everything You Need for a Smarter Home
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {featuresMenu.map((item) => (
            <div className="border border-slate-200 flex flex-col items-center text-center p-5 rounded-xl shadow-sm">
              <p>{item.icon}</p>
              <div className="w-xs">
                <p className="font-bold">{item.name}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default FeaturesSection;
