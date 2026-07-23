import { FaRegUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";
import { MdIntegrationInstructions } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

function SettingsMenu() {
  const menu = [
    { icon: <FaRegUserCircle />, name: "Profile" },
    { icon: <FaHome />, name: "Home" },
    { icon: <IoIosNotifications />, name: "Notification" },
    { icon: <MdOutlineSecurity />, name: "Security" },
    { icon: <MdIntegrationInstructions />, name: "Integrations" },
    { icon: <CiSettings />, name: "System" },
  ];
  return (
    <>
      <div className="bg-white rounded-2xl px-5 py-5 flex gap-5 justify-between">
        {menu.map((item) => (
          <div className="flex gap-2 items-center hover:text-blue-600">
            <span>{item.icon}</span>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SettingsMenu;
