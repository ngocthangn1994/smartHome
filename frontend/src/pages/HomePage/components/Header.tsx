import smartHomeLogo from "../../../assets/branding/smarthome_logo.png";
import { NavLink } from "react-router-dom";
import { RiAccountPinBoxLine, RiAccountCircleLine } from "react-icons/ri";
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";
function Header() {
  const currentPage = "text-blue-600 font-bold";
  const menu = [
    { path: "/", name: "Home" },
    { path: "/features", name: "Features" },
    { path: "/about", name: "About" },
  ];
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <header className="w-full max-w-full border border-slate-200 px-2 py-1">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center min-w-0">
            <div>
              <NavLink to="/">
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                  src={smartHomeLogo}
                />
              </NavLink>
            </div>
            <div className="flex min-w-0 text-3xl font-bold">
              <p>Nguyen</p>
              <p className="text-blue-800">Shield</p>
            </div>
          </div>
          <div className="hidden xl:flex items-center gap-10 font-medium">
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
          <div className="hidden xl:flex lg:gap-10">
            <div>
              <NavLink to="/auth/login">
                <div className="flex items-center justify-center gap-1 border border-blue-300 px-3 py-1 rounded-xl hover:shadow-sm hover:border-blue-500">
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
                <div className="flex items-center justify-center gap-1 border border-blue-300 bg-blue-600 px-2 py-1 rounded-xl px-3 py-1 hover:shadow-sm hover:bg-blue-700">
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
          <button
            onClick={() => setIsMenu(!isMenu)}
            type="button"
            className="shrink-0 xl:hidden"
          >
            <TiThMenuOutline className="w-10 h-10" />
          </button>
        </div>
        {isMenu && (
          <div>
            <div className="space-y-3">
              <div>
                {menu.map((item) => (
                  <div className="border-b border-slate-200 px-5 py-2">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? currentPage : "text-slate-600"
                      }
                      key={item.name}
                      to={item.path}
                    >
                      {item.name}
                    </NavLink>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-10">
                <button>
                  <NavLink to="/auth/login">
                    <span className="flex items-center gap-1 px-1 py-1 border border-blue-200 rounded-xl hover:shadow-sm hover:border-blue-500">
                      <RiAccountCircleLine className="w-10 h-10 p-2 text-blue-600" />
                      <p>
                        <p className="text-blue-600">Log In</p>
                      </p>
                    </span>
                  </NavLink>
                </button>
                <button>
                  <NavLink to="/auth/register">
                    <span className="flex items-center gap-1 border border-blue-300 bg-blue-600 px-2 py-1 rounded-xl px-3 py-1 hover:shadow-sm hover:bg-blue-700">
                      <RiAccountPinBoxLine className="w-10 h-10 p-2 text-white" />

                      <p className="text-white">Create Account</p>
                    </span>
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
