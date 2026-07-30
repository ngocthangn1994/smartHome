import { FaHouseDamage } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { IoIosPhonePortrait } from "react-icons/io";

function HowItWorkSection() {
  const featuresMenu = [
    {
      icon: (
        <FaHouseDamage className="w-20 h-20 p-3 rounded-full bg-white text-sky-600 ring-1 ring-sky-300" />
      ),
      name: "Connect",
      description: "Add your devices to NguyenShield in minutes",
      number: 1,
    },
    {
      icon: (
        <FaShieldAlt className="w-20 h-20 p-3 rounded-full bg-white text-green-600 ring-1 ring-green-300" />
      ),
      name: "Control",
      description: "Manage and automate everything from one app",
      number: 2,
    },
    {
      icon: (
        <SlEnergy className="w-20 h-20 p-3 rounded-full bg-white text-purple-600 ring-1 ring-purple-300" />
      ),
      name: "Protect",
      description: "Enjoy a smarter, safer home every day",
      number: 3,
    },
  ];
  return (
    <>
      <section className="mt-3 space-y-5 px-50 text-slate-600 mt-10 bg-sky-50 p-5 py-10">
        <div className="text-center">
          <span className="text-blue-600 font-bold">HOW IT WORKS</span>
          <p className="text-2xl font-bold">Simple Steps to a Smarter Home</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-10">
          {featuresMenu.map((item) => (
            <div className="flex gap-3 items-center">
              <div>
                <span className="text-white bg-blue-600 rounded-full px-3 py-1">
                  {item.number}
                </span>
                <p>{item.icon}</p>
              </div>

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

export default HowItWorkSection;
