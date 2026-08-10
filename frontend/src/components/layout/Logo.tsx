import { NavLink } from "react-router-dom";
import smartHomeLogo from "../../assets/branding/smarthome_logo.png";

function Logo() {
  return (
    <>
      <NavLink to="/dashboard">
        <div className="flex items-center">
          <img className="w-15 h-15 md:w-20 md:h-20" src={smartHomeLogo} />
          <div className="flex text-xl md:text-3xl font-bold">
            <p>Nguyen</p>
            <p className="text-blue-800">Shield</p>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default Logo;
