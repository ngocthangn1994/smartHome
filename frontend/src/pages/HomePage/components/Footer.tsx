import smartHomeLogo from "../../../assets/branding/smarthome_logo.png";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaEarthAfrica } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <section className="mt-10 text-slate-600 px-50 flex justify-between items-center">
        <div>
          <div className="flex items-center">
            <NavLink to="/">
              <img className="w-15 h-15" src={smartHomeLogo} />
            </NavLink>
            <div className="flex text-2xl font-bold">
              <p>Nguyen</p>
              <p className="text-blue-800">Shield</p>
            </div>
          </div>
          <p>Smarter Living. Safer Home</p>
          <p>@ 2025 NguyenShield. All rights reserved</p>
        </div>
        <div>
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
        <div>
          <p className="font-bold">Account</p>
          <NavLink to="/auth/login">
            <p>Log In</p>
          </NavLink>
          <NavLink to="/auth/register">
            <p>Create Account</p>
          </NavLink>
        </div>
        <div>
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
      </section>
    </>
  );
}

export default Footer;
