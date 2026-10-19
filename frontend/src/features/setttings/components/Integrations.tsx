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
      <div className="h-full min-w-0 bg-white rounded-2xl p-4 sm:p-5 text-slate-600 space-y-3">
        <div className="flex gap-3 items-center">
          <LuCombine />
          <p className="text-xl font-bold">Intergrations</p>
        </div>
        <div>
          <p className="font-medium">Manage connected services and platforms</p>
        </div>
        <div className="space-y-3">
          {intergration.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-3"
            >
              <span className="shrink-0">{item.icon}</span>
              <p className="flex-1 min-w-0">{item.name}</p>
              <p className="hidden sm:block text-green-600 font-bold">
                Connected
              </p>
              <button className="shrink-0 px-3 py-2 border border-slate-200 rounded-2xl">
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
