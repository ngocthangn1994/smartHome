import { FaSketch } from "react-icons/fa6";
import Logo from "./Logo";
import MenuList from "./MenuList";
function SideBarHelper() {
  return (
    <>
      <div className="bg-white h-full px-2 py-2">
        <MenuList />
        <div className="bg-indigo-50 text-center px-5 py-5 rounded-2xl space-y-3 hidden md:block">
          <div className="flex justify-center">
            <FaSketch className="px-3 py-3 rounded-full w-12 h-12 text-blue-600 bg-white shadow-sm" />
          </div>
          <div className="text-slate-600">
            <p className="text-2xl text-slate-900 font-semibold">
              Make your home
            </p>
            <p className="text-2xl font-semibold">even smarter</p>
            <p>Discover smart automations</p>
            <p> to save time and energy.</p>
          </div>
          <button className="bg-blue-600 text-white font-semibold px-10 py-3 rounded-xl mt-5">
            Explore Automations
          </button>
        </div>
      </div>
    </>
  );
}

export default SideBarHelper;
