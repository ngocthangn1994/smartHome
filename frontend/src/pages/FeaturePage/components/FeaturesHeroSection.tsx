import smartHomeHomePage from "../../../assets/smarthome_homepage.png";
import { GiPolarStar } from "react-icons/gi";

function FeaturesHeroSection() {
  return (
    <>
      <section className="md:grid grid-cols-[1.2fr_0.8fr] text-slate-600">
        <div className="p-5 space-y-5">
          <div className="flex items-center">
            <GiPolarStar className="w-10 h-10 p-2 text-green-600" />
            <p className="font-medium">Features</p>
          </div>
          <div className="text-6xl w-full md:text-7xl font-bold">
            <p>Powerful Features for</p>
            <p className="text-blue-600">a Smarter Home</p>
          </div>
          <div className="text-sm mt-3">
            <p>
              NguyenShield brings all your smart devices together in one place.
              More control, more security, more convenience.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden w-full h-64 sm:h-full">
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

export default FeaturesHeroSection;
