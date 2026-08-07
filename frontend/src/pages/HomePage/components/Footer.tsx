import smartHomeLogo from "../../../assets/branding/smarthome_logo.png";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaEarthAfrica } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <section className="mt-10 text-slate-600 px-5 py-5 space-y-3">
        <div className="flex items-center">
          <NavLink to="/">
            <img className="w-15 h-15" src={smartHomeLogo} />
          </NavLink>
          <span className="flex text-2xl font-bold">
            <p>Nguyen</p>
            <p className="text-blue-800">Shield</p>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 py-2">
          <div className="border-b border-slate-200">
            <p className="font-bold">Quick Links</p>
            <NavLink to="/">
              <p>Home</p>
            </NavLink>
            <NavLink to="/features">
              <p>Features</p>
            </NavLink>
            <NavLink to="/about">
              <p>About</p>
            </NavLink>
          </div>
          <div className="hidden sm:block border-b border-slate-200 py-2">
            <p className="font-bold">Account</p>
            <NavLink to="/auth/login">
              <p>Log In</p>
            </NavLink>
            <NavLink to="/auth/register">
              <p>Create Account</p>
            </NavLink>
          </div>
          <div className="border-b border-slate-200 py-2">
            <p className="font-bold">Contact</p>
            <div className="flex items-center gap-3">
              <MdEmail />
              <p>ngoc.nguyen.engineer@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEarthAfrica />
              <p>HomeDeviceControl.com</p>
            </div>
          </div>
        </div>

        <p className="sm:flex gap-3 text-xs">
          <p>Smarter Living. Safer Home</p>
          <p>@ 2025 NguyenShield. All rights reserved</p>
        </p>
      </section>
    </>
  );
}

export default Footer;
