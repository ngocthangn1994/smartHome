import { FaPagelines } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiSkillshare } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { SiExpressdotcom } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";

import smartHomeAvatar from "../../../assets/smarthome_avatar.png";
function Information() {
  const coreValues = [
    {
      icon: (
        <MdOutlineSecurity className="w-15 h-15 p-3 bg-blue-100 text-blue-600 rounded-full" />
      ),
      name: "Security First",
      description: "We build with security at the core of everything we do.",
    },
    {
      icon: (
        <FaRegLightbulb className="w-15 h-15 p-3 bg-green-100 text-green-600 rounded-full" />
      ),
      name: "Innovation",
      description: "We continuously improve and embrace new technologies.",
    },
    {
      icon: (
        <FaRegFaceSmileBeam className="w-15 h-15 p-3 bg-orange-100 text-orange-600 rounded-full" />
      ),
      name: "Simplicity",
      description: "We create simple, easy-to-use experience.",
    },
    {
      icon: (
        <FaHandshake className="w-15 h-15 p-3 bg-purple-100 text-purple-600 rounded-full" />
      ),
      name: "Trust",
      description: "We earn your trush through transparency and reliability.",
    },
  ];

  const technologyList = [
    { icon: <FaReact className="text-blue-500 w-10 h-10 " />, name: "React" },
    {
      icon: <BsTypescript className="text-blue-500 w-10 h-10 " />,
      name: "Typescript",
    },
    {
      icon: <FaNodeJs className="text-green-500 w-10 h-10 " />,
      name: "NodeJs",
    },
    {
      icon: <SiExpressdotcom className="text-slate-900 w-10 h-10 " />,
      name: "Express",
    },
    {
      icon: <TbBrandMongodb className="text-blue-700 w-10 h-10 " />,
      name: "MongoDB",
    },
    {
      icon: <BiLogoTailwindCss className="text-purple-600 w-10 h-10 " />,
      name: "Tailwindcss",
    },
  ];
  return (
    <>
      <section className="mt-10 p-20 text-slate-600">
        <div className="grid grid-cols-4 gap-10 items-center">
          <div className="space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-1">
                <FaPagelines className="text-green-600 w-8 h-8" />
                <p className="font-bold text-2xl">Our Mission</p>
              </div>

              <p>
                To empower every homeowner with intelligent tools that enhance
                security, save energy and simplify daily living.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-1">
                <FaPagelines className="text-green-600 w-8 h-8" />
                <p className="font-bold text-2xl">Our Vision</p>
              </div>

              <p>
                A world where every home is connected, protected, and truly
                smart.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <IoDiamond className="text-green-600 w-8 h-8" />
              <p className="font-bold text-2xl">Our Core Values</p>
            </div>
            <div className="space-y-2 mt-2">
              {coreValues.map((item) => (
                <div>
                  <div className="flex items-center gap-5">
                    {item.icon}
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3">
              <FaPeopleGroup className="w-8 h-8" />
              <p className="font-bold text-2xl">Meet the Team</p>
            </div>
            <div>
              <img src={smartHomeAvatar} />
            </div>
            <div className="text-center">
              <p className="font-bold">Nguyen Ngoc</p>
              <p>Full-stack Software Engineer</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <SiSkillshare className="w-8 h-8 text-blue-600" />
              <p className="font-bold text-2xl">Build With Modern Technology</p>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-10">
              {technologyList.map((item) => (
                <div className="flex gap-3 items-center border border-slate-200 rounded-2xl px-2 py-2 justify-center shadow-sm">
                  {item.icon}
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Information;
