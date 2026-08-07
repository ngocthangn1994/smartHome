import smartHomeHomePage from "../../../assets/smarthome_homepage.png";
import { IoShieldHalfSharp } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { SlEnergy } from "react-icons/sl";
import { MdOutlineCellWifi } from "react-icons/md";
import { NavLink } from "react-router-dom";

function HeroSection() {
  const featureMenu = [
    {
      icon: (
        <IoShieldCheckmarkOutline className="text-green-600 w-15 h-15 md:w-12 md:h-12 p-2 bg-green-50 rounded-full" />
      ),
      name: "Secure by Design",
    },
    {
      icon: (
        <SlEnergy className="text-green-600 w-15 h-15 md:w-12 md:h-12 p-2 bg-green-50 rounded-full" />
      ),
      name: "Energy Smart",
    },
    {
      icon: (
        <MdOutlineCellWifi className="text-green-600 w-15 h-15 md:w-12 md:h-12 p-2 bg-green-50 rounded-full" />
      ),
      name: "Always Connected",
    },
  ];
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] text-slate-600 w-full">
        <div className="p-10 space-y-3">
          <div className="flex items-center md:justify-center border border-slate-200 shadow-sm w-sm md:w-lg rounded-xl">
            <IoShieldHalfSharp className="w-10 h-10 p-2 text-green-600" />
            <p className="font-medium">Smart Home. Safer Home. Smarter You.</p>
          </div>
          <div className="text-5xl md:text-7xl xl:text-9xl w-full">
            <div className="flex gap-2 font-bold">
              <p>Smarter</p>
              <p className="text-blue-600">Living,</p>
            </div>
            <div className="flex gap-2 font-bold">
              <p className="text-blue-600">Safer</p>
              <p>Home.</p>
            </div>
          </div>
          <div className="text-sm sm:mt-5 w-full">
            <p>
              NguyenShield connects your devices, protects your home, and gives
              you total control - anytime, anywhere
            </p>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-3">
            <NavLink to="/auth/login">
              <button className="w-full flex flex-nowrap items-center justify-center gap-1 border border-blue-300 bg-blue-600 px-3 py-1 rounded-xl">
                <RiAccountCircleLine className="w-10 h-10 p-2 text-white" />
                <p className="text-white">Log In</p>
              </button>
            </NavLink>
            <NavLink to="/auth/register">
              <button className="w-full flex items-center justify-center gap-1 border border-blue-300 font-medium px-3 py-1 rounded-xl">
                <RiAccountPinBoxLine className="w-10 h-10 p-2 text-blue-600" />
                <p className="text-blue-600">Create Account</p>
              </button>
            </NavLink>
          </div>
          <div className="flex justify-between text-center w-3/4">
            {featureMenu.map((item) => (
              <div className="flex items-center gap-1">
                {item.icon}
                <p className="font-bold text-sm md:text-xl">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-80 md:h-full overflow-hidden">
          <img
            src={smartHomeHomePage}
            alt="Modern smart home"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-white via-white/60 to-transparent" />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
