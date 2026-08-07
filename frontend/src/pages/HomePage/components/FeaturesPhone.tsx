import { TbCircleCheckFilled } from "react-icons/tb";
import smartHomePhone from "../../../assets/landing/smarthome_cellphone.png";
import { FcAndroidOs } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function FeaturesPhone() {
  const securityList = [
    { name: "Easy setup and user-friendly interface" },
    { name: "Secure cloud connection with end-to-end encryption" },
    { name: "Works with a wide range of smart devices" },
    { name: "Regular updates and 24/7 system monitoring" },
  ];

  const operationSystem = [
    {
      icon: <FaApple className="text-white h-12 w-12" />,
      name: "Download on the",
      brand: "App Store",
    },
    {
      icon: <FcAndroidOs className="h-12 w-12" />,
      name: "GET IT ON",
      brand: "Android",
    },
  ];
  return (
    <>
      <section className="text-slate-600 grid grid-cols-2 mt-5 p-10 gap-10">
        <div className="flex items-center ring-1 ring-slate-100 p-5 rounded-xl shadow-sm gap-3">
          <p className="font-bold text-4xl w-sm text-center">
            Build for Your Comfort and Security
          </p>
          <div className="space-y-10">
            {securityList.map((item) => (
              <div className="flex items-center">
                <TbCircleCheckFilled className="w-8 h-8 p-1 text-blue-600" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="ring-1 ring-slate-100 p-5 rounded-xl shadow-sm">
          <div className="grid grid-cols-[0.9fr_1.1fr] gap-10">
            <div className="space-y-5">
              <p className="font-bold text-4xl text-center">
                Control Everything From Your Phone
              </p>
              <p className="text-xl text-center">
                The NguyenShield app puts your home in the palm of your hand.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {operationSystem.map((item) => (
                  <div className="bg-black rounded-2xl text-white flex items-center justify-center px-3 py-3">
                    {item.icon}
                    <div>
                      <p>{item.name}</p>
                      <p className="font-bold text-2xl">{item.brand}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={smartHomePhone}
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesPhone;
