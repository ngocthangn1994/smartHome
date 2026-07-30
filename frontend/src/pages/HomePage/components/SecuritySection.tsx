import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaBuildingShield } from "react-icons/fa6";

function SecuritySection() {
  const securityList = [
    {
      icon: (
        <IoCheckmarkCircleSharp className="text-green-600 border border-slate-200 rounded-full w-8 h-8 p-1" />
      ),
      name: "End-to-end encryption",
    },
    {
      icon: (
        <IoCheckmarkCircleSharp className="text-green-600 border border-slate-200 rounded-full w-8 h-8 p-1" />
      ),
      name: "Smart threat detection",
    },
    {
      icon: (
        <IoCheckmarkCircleSharp className="text-green-600 border border-slate-200 rounded-full w-8 h-8 p-1" />
      ),
      name: "Privacy first, always",
    },
  ];
  return (
    <>
      <section className="flex items-center justify-between px-50 mt-20 bg-sky-50 py-5 text-slate-600">
        <div>
          <FaBuildingShield className="text-green-600 h-40 w-40 p-5 rounded-full border" />
        </div>
        <div className="w-4xl">
          <p className="text-blue-600 font-bold">
            BUILT FOR YOUR PEACE OF MIND
          </p>
          <p className="text-2xl font-bold">Security You Can Trust</p>
          <p>
            NguyenShield uses enterprise encryption and smart detection to keep
            your home and data safe - so you can focus on what matters
          </p>
        </div>
        <div className="space-y-2">
          {securityList.map((item) => (
            <div className="flex items-center gap-3">
              {item.icon}
              <p className="font-bold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default SecuritySection;
