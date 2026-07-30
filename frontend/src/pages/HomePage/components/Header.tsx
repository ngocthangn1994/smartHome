import smartHomeLogo from "../../../assets/smarthome_logo.png";
import { NavLink } from "react-router-dom";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiAccountPinBoxLine } from "react-icons/ri";

function Header() {
  const currentPage = "text-blue-600 font-bold";
  const menu = [
    { path: "/", name: "Home" },
    { path: "/features", name: "Features" },
    { path: "/about", name: "About" },
  ];
  return (
    <>
      <div className="flex justify-between items-center px-5 py-3 border border-slate-200 shadow-sm text-slate-600">
        <div className="flex items-center">
          <NavLink to="/">
            <img className="w-20 h-20" src={smartHomeLogo} />
          </NavLink>
          <div className="flex text-3xl font-bold">
            <p>Nguyen</p>
            <p className="text-blue-800">Shield</p>
          </div>
        </div>
        <div className="flex items-center gap-10 font-medium">
          {menu.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? currentPage : "text-slate-600"
              }
              key={item.name}
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="flex gap-10">
          <div>
            <NavLink to="/auth/login">
              <div className="flex items-center justify-center gap-1 border border-blue-300 px-2 py-1 rounded-xl w-sm hover:shadow-sm hover:border-blue-500">
                <div>
                  <RiAccountCircleLine className="w-10 h-10 p-2 text-blue-600" />
                </div>
                <div>
                  <p className="text-blue-600">Log In</p>
                </div>
              </div>
            </NavLink>
          </div>
          <div>
            <NavLink to="/auth/register">
              <div className="flex items-center justify-center gap-1 border border-blue-300 bg-blue-600 px-2 py-1 rounded-xl w-sm hover:shadow-sm hover:bg-blue-700">
                <div>
                  <RiAccountPinBoxLine className="w-10 h-10 p-2 text-white" />
                </div>
                <div>
                  <p className="text-white">Create Account</p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
