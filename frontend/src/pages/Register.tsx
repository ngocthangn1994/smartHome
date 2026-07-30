import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import smarthomeRegister from "../assets/smarthome_register.png";
import smartHomeLogo from "../assets/smarthome_logo.png";
import { FaMobileAlt, FaDesktop, FaRobot, FaBell } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEyeLowVision,
  FaCircleUser,
  FaCheck,
} from "react-icons/fa6";

function Register() {
  const { register } = useAuth();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [passWord, setPassWord] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      await register(name, email, passWord);
      navigate("/dashboard");
    } catch (error) {
      throw new Error("Can't register");
    }
  };
  return (
    <>
      <main className="w-screen h-screen bg-white">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <section className="min-h-screen flex items-center justify-center">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] w-6xl border border-slate-200 transition shadow-sm hover:shadow-2xl rounded-[2rem] overflow-hidden text-white">
            <div className="relative w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={smarthomeRegister}
              />
              <NavLink to="/">
                <div className="absolute top-4 left-5 object-contain z-5 flex items-center">
                  <img src={smartHomeLogo} alt="Logo" className="w-20  h-20 " />
                  <div className="flex items-center text-white justify-center">
                    <p className="font-bold text-xl">Nguyen</p>
                    <p className="font-bold text-xl">Shield</p>
                  </div>
                </div>
              </NavLink>

              <div className="absolute text-white top-30 left-10 ">
                <div className="font-bold text-4xl ">
                  <p>Your home,</p>
                  <div className="flex gap-2">
                    <p className="text-sky-400">smarter</p>
                    <p>and safer</p>
                  </div>
                </div>
                <div>
                  <p className="w-sm mt-5 text-white/ font-semibold">
                    Control your devices, monitor your home, and manage
                    everything from one simple dashboard.
                  </p>
                </div>
              </div>
              <div className="absolute text-white top-80 left-10 space-y-3 flex flex-col items-start">
                <div className="flex justify-center items-center gap-3">
                  <FaMobileAlt className="bg-white/10 w-12 h-12 px-2 py-2 rounded-full" />
                  <p className="text-white/60">Control devices from anywhere</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <FaDesktop className="bg-white/10 w-12 h-12 px-2 py-2 rounded-full" />
                  <p className="text-white/60">
                    Monitor your home in real time
                  </p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <FaRobot className="bg-white/10 w-12 h-12 px-2 py-2 rounded-full" />
                  <p className="text-white/60">Automate daily routines</p>
                </div>

                <div className="flex justify-center items-center gap-3">
                  <FaBell className="bg-white/10 w-12 h-12 px-2 py-2 rounded-full" />
                  <p className="text-white/60">
                    Receive instant security alerts
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white px-5 py-5 rounded-2xl shadow-sm text-slate-900">
              <NavLink to="/">
                <div className="flex items-center">
                  <img src={smartHomeLogo} alt="Logo" className="w-20  h-20 " />
                  <div className="flex items-center text-slate-900 justify-center">
                    <p className="font-bold text-xl">Nguyen</p>
                    <p className="text-xl">Shield</p>
                  </div>
                </div>
              </NavLink>

              <div className="px-5 space-y-3">
                <p className="text-4xl font-bold">Create your account</p>
                <p className="text-slate-600">
                  Set up your account to start managing your home.
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-5 mt-5 px-5 text-slate-600"
              >
                <div>
                  <label className="mb-2 block font-semibold text-slate-600">
                    Full Name:
                  </label>
                  <div className="border border-slate-200 rounded-2xl flex items-center justify-center px-3">
                    <FaCircleUser className="w-6 h-6" />
                    <input
                      className="w-full px-4 py-3.5 text-slate-600 outline-none transition placeholder:text-slate-400 text-xl"
                      type="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Nguyen Dev"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-slate-600">
                    Email Account:{" "}
                  </label>
                  <div className="border border-slate-200 rounded-2xl flex items-center justify-center px-3">
                    <FaEnvelope className="w-6 h-6" />

                    <input
                      className="w-full px-4 py-3.5 text-slate-600 outline-none transition placeholder:text-slate-400 text-xl"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@gmail.com..."
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-slate-600">
                    Password:{" "}
                  </label>
                  <div className="flex justify-center items-center border border-slate-200 rounded-2xl px-3">
                    <FaLock className="w-6 h-6" />
                    <input
                      className="text-xl w-full px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400"
                      value={passWord}
                      onChange={(e) => setPassWord(e.target.value)}
                      type="password"
                      required
                      placeholder="create your password"
                    />
                    <FaEyeLowVision className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-1 gap-1">
                    <div className="h-1 flex-1 rounded-full bg-green-500"></div>
                    <div className="h-1 flex-1 rounded-full bg-green-500"></div>
                    <div className="h-1 flex-1 rounded-full bg-green-500"></div>
                    <div className="h-1 flex-1 rounded-full bg-green-500"></div>
                    <div className="h-1 flex-1 rounded-full bg-green-500"></div>
                    <div className="h-1 flex-1 rounded-full bg-slate-200"></div>
                    <div className="h-1 flex-1 rounded-full bg-slate-200"></div>
                  </div>
                  <p className="text-xs text-slate-500">Strong</p>
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-slate-600">
                    Confirm Password:{" "}
                  </label>
                  <div className="flex justify-center items-center border border-slate-200 rounded-2xl px-3">
                    <FaLock className="w-6 h-6" />
                    <input
                      className="text-xl w-full px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400"
                      type="password"
                      required
                      placeholder="create your password"
                    />
                    <FaEyeLowVision className="w-6 h-6" />
                  </div>
                </div>
                <div className="bg-blue-50 py-2 px-2 space-y-1 text-slate-600 rounded-2xl shadow-sm">
                  <p className="font-bold">Password must include: </p>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <p>At least 8 characters</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <p>One uppercase letters</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <p>One number</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheck className="text-green-600" />
                    <p>One special characters</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <div className="w-full flex gap-1">
                    <p>I agree to the</p>
                    <p className="text-blue-600 font-semibold">
                      Tearms of Service
                    </p>
                    <p>and</p>
                    <p className="text-blue-600 font-semibold">
                      Privacy Policy
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 w-full rounded-2xl px-2 py-2 border border-slate-200 text-white font-semibold text-[1.2rem] hover:bg-blue-700"
                  >
                    Create account
                  </button>
                  <div className="flex gap-3 mt-5 justify-center">
                    <p>Already have account!</p>
                    <Link
                      to="/auth/login"
                      className="text-blue-600 hover:text-blue-800 cursor-pointer font-bold"
                    >
                      Log in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Register;
