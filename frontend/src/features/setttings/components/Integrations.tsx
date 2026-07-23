import { LuCombine } from "react-icons/lu";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function Integrations() {
  const intergration = [
    { icon: <SiHomeassistantcommunitystore />, name: "Home Assistant" },
    { icon: <FaGoogle />, name: "Google Assistant" },
    { icon: <FaAmazon />, name: "Amazon Alexa" },
    { icon: <FaApple />, name: "Apple Home" },
  ];
  return (
    <>
      <div className="bg-white rounded-2xl px-5 py-5 text-slate-600 space-y-3">
        <div className="flex gap-3 items-center">
          <LuCombine />
          <p className="text-xl font-bold">Intergrations</p>
        </div>
        <div>
          <p className="font-medium">Manage connected services and platforms</p>
        </div>
        <div>
          {intergration.map((item) => (
            <div className="flex items-center justify-between">
              <span>{item.icon}</span>
              <p>{item.name}</p>
              <p className="text-green-600 font-bold">Connected</p>
              <button className="px-2 py-2 border border-slate-200 rounded-2xl">
                Manage
              </button>
            </div>
          ))}
        </div>
        <div>
          <p className="text-blue-600 font-bold">View All Integrations</p>
        </div>
      </div>
    </>
  );
}
export default Integrations;
