import smartHomeHomePage from "../../../assets/smarthome_homepage.png";
import { IoShieldHalfSharp } from "react-icons/io5";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
import { FaUserSecret } from "react-icons/fa";

function HeroSection() {
  const featureMenu = [
    {
      icon: (
        <IoShieldCheckmarkOutline className="text-blue-600 w-20 h-20 md:w-10 md:h-10 p-2 bg-blue-50 rounded-full" />
      ),
      name: "Secure",
      description: "Your data and privacy are our top priority",
    },
    {
      icon: (
        <SlEnergy className="text-green-600 w-20 h-20 md:w-10 md:h-10 p-2 bg-green-50 rounded-full" />
      ),
      name: "Reliable",
      description: "Built for real-time performance you can trust",
    },
    {
      icon: (
        <FaUserSecret className="text-purple-600 w-20 h-20 md:w-10 md:h-10 p-2 bg-purple-50 rounded-full" />
      ),
      name: "User First",
      description:
        "Designed to be simple intuitive, and powerful for everyone.",
    },
  ];
  return (
    <>
      <section className="w-full md:grid grid-cols-[0.9fr_1.2fr] text-slate-600">
        <div className="p-3 space-y-5">
          <div className="flex items-center justify-center border border-slate-200 shadow-sm rounded-xl">
            <IoShieldHalfSharp className="w-10 h-10 p-2 text-green-600" />
            <p className="font-medium">Our Story, Our Mission, Our Promise.</p>
          </div>
          <div className="space-y-1">
            <div className="text-4xl md:text-7xl flex gap-2 font-bold">
              <p>About</p>
              <p className="text-blue-600">NguyenShield,</p>
            </div>
            <div className="text-3xl flex gap-2 font-bold">
              <p className="text-blue-600">Building</p>
              <p>a safer, smarter life for every home</p>
            </div>
          </div>
          <div className="text-xs md:text-xl">
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
              <div className="flex items-center gap-1">
                {item.icon}
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-xs md:text-[1rem]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden w-full h-64 md:h-full">
          <img
            src={smartHomeHomePage}
            alt="Modern smart home"
            className="absolute w-full h-64 md:h-full object-cover object-center"
          />

          <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-white via-white/60 to-transparent" />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
