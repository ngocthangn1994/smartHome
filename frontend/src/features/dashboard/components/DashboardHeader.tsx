import Logo from "../../../components/layout/Logo";
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";
import { FaBell, FaGrav } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";
import SideBarHelper from "../../../components/layout/SideBarHelper";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  FaHouseChimneyUser,
  FaAngleDown,
  FaSearchengin,
} from "react-icons/fa6";
function DashboardHeader() {
  const [isMenu, setIsMenu] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const navigate = useNavigate();
  const handleMenu = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (value === "profile") {
      navigate("/settings");
      return;
    }
    if (value === "dashboard") {
      navigate("/dashboard");
      return;
    }
    if (value === "logout") {
      await api.logout();
      navigate("/");
    }
  };
  return (
    <>
      <div className="flex items-center bg-white px-5 justify-between">
        <div className="flex">
          <button
            onClick={() => setIsMenu(!isMenu)}
            type="button"
            className="shrink-0 xl:hidden"
          >
            <TiThMenuOutline className="w-10 h-10" />
          </button>
          <Logo />
        </div>
        <div className="flex items-center gap-3">
          <div className="lg:grid grid-cols-2 gap-3 hidden ">
            <div className="flex gap-3 items-center text-slate-600 border border-slate-200 px-2 py-2 rounded-2xl bg-white">
              <FaHouseChimneyUser className="w-10 h-10" />
              <span className="text-sm font-bold ">My Home</span>
              <FaAngleDown />
            </div>
            <div className="flex justify-between border border-slate-200 bg-white px-5 py-2 rounded-2xl">
              <input
                className="outline-none text-sm"
                placeholder="Search devices, rooms..."
              />
              <FaSearchengin className="w-10 h-10" />
            </div>
          </div>
          <button>
            <FaBell className="w-10 h-10 md:w-12 md:h-12 bg-white px-2 py-2 rounded-full shadow-sm ring-1 ring-indigo-200" />
          </button>
          <button onClick={() => setIsProfile(!isProfile)}>
            <FaGrav className="w-10 h-10" />
          </button>
          {isProfile === true && (
            <select
              onChange={handleMenu}
              className="border border-slate-200 p-2 rounded-xl"
            >
              <option value="dashboard">Dashboard</option>
              <option value="profile">Profile</option>
              <option value="logout">Log out</option>
            </select>
          )}
        </div>
      </div>
      {isMenu && (
        <div className="fixed top-0 left-0 h-screen w-[55%] bg-white shadow-xl z-50 xl:hidden">
          <button
            type="button"
            className="px-2 py-1"
            onClick={() => setIsMenu(false)}
          >
            <AiOutlineCloseCircle className="w-10 h-10 text-blue-600 hover:textr-blue-900" />
          </button>
          <SideBarHelper />
        </div>
      )}
    </>
  );
}

export default DashboardHeader;
