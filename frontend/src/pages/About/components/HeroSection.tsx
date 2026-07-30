import smartHomeHomePage from "../../../assets/smarthome_homepage.png";
import { IoShieldHalfSharp } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
import { FaUserSecret } from "react-icons/fa";

function HeroSection() {
  const featureMenu = [
    {
      icon: (
        <IoShieldCheckmarkOutline className="text-blue-600 w-10 h-10 p-2 bg-blue-50 rounded-full" />
      ),
      name: "Secure",
      description: "Your data and privacy are our top priority",
    },
    {
      icon: (
        <SlEnergy className="text-green-600 w-10 h-10 p-2 bg-green-50 rounded-full" />
      ),
      name: "Reliable",
      description: "Built for real-time performance you can trust",
    },
    {
      icon: (
        <FaUserSecret className="text-purple-600 w-10 h-10 p-2 bg-purple-50 rounded-full" />
      ),
      name: "User First",
      description:
        "Designed to be simple intuitive, and powerful for everyone.",
    },
  ];
  return (
    <>
      <section className="grid grid-cols-[0.7fr_1.3fr] text-slate-600">
        <div className="p-10 space-y-10">
          <div className="flex items-center justify-center border border-slate-200 shadow-sm w-lg rounded-xl">
            <IoShieldHalfSharp className="w-10 h-10 p-2 text-green-600" />
            <p className="font-medium">Our Story, Our Mission, Our Promise.</p>
          </div>
          <div className="w-full space-y-1">
            <div className="text-7xl flex gap-2 font-bold">
              <p>About</p>
              <p className="text-blue-600">NguyenShield,</p>
            </div>
            <div className="text-3xl flex gap-2 font-bold">
              <p className="text-blue-600">Building</p>
              <p>a safer, smarter life for every home</p>
            </div>
          </div>
          <div className="text-sm w-full text-xl w-xl">
            <p>
              NguyenShield was created with a simple idea: smart technology
              should make life easier, safer, and more comfortable for everyone.
            </p>
            <p>
              Our all-in-one platform helps you monitor, control and automate
              your home from anywhere, giving you total peace of mind
            </p>
          </div>

          <div className="flex justify-between">
            {featureMenu.map((item) => (
              <div className="flex items-center gap-3">
                {item.icon}
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden h-full w-full">
          <img
            src={smartHomeHomePage}
            alt="Modern smart home"
            className="absolute w-full h-full object-cover object-center"
          />

          <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-white via-white/60 to-transparent" />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
