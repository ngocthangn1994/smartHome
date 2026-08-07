import smartHomeAdvanceSecurity from "../../../assets/landing/smarthome_advancesecurity.png";
import { FaHouseLock } from "react-icons/fa6";
import { BiShieldQuarter } from "react-icons/bi";
import { TbBellCog } from "react-icons/tb";
import { FaKey } from "react-icons/fa";
import { HiArrowCircleRight } from "react-icons/hi";

function AdvanceSecurity() {
  const securityList = [
    {
      icon: (
        <FaHouseLock className="bg-sky-50 text-sky-600 rounded-full w-20 h-20 p-3" />
      ),
      name: "Security Connection",
      description: "End-to-end encryption protects your data at all times",
    },
    {
      icon: (
        <BiShieldQuarter className="bg-green-50 text-green-600 rounded-full w-20 h-20 p-3" />
      ),
      name: "Privacy First",
      description: "Your data is private and never shared with third parites.",
    },
    {
      icon: (
        <TbBellCog className="bg-orange-50 text-orange-600 rounded-full w-20 h-20 p-3" />
      ),
      name: "Real-Time Alerts",
      description:
        "Instant notifications for any unusual activity or security threats",
    },
    {
      icon: (
        <FaKey className="bg-purple-50 text-purple-600 rounded-full w-20 h-20 p-3" />
      ),
      name: "Access Control",
      description:
        "Manage who can access your home with roles, permissions & logs.",
    },
  ];
  return (
    <>
      <section className="mt-10 text-slate-600 space-y-5">
        <div className="text-center">
          <p className="text-4xl font-bold">
            Advanced Security for Your Peace of Mind
          </p>
          <p className="text-xl">
            NguyenShield keeps your home and data protected with
            enterprice-grade security
          </p>
        </div>

        <div className="sm:flex items-center gap-5 mt-10">
          <div>
            <img
              src={smartHomeAdvanceSecurity}
              className="rounded-r-4xl object-cover"
            />
          </div>
          <div>
            <HiArrowCircleRight className="hidden sm:block w-20 h-20 sm:w-40 sm:h-40 text-slate-700" />
          </div>
          <div className="flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-5">
              {securityList.map((item) => (
                <div className="flex flex-col items-center border border-slate-200 p-1 rounded-xl shadow-sm">
                  <p>{item.icon}</p>
                  <p className="font-bold">{item.name}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdvanceSecurity;
