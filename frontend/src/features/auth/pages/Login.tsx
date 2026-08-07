import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import smarthomeLogin from "../../../assets/landing/smarthome_login.png";
import smartHomeLogo from "../../../assets/branding/smarthome_logo.png";
import { FaMobileAlt, FaDesktop, FaRobot, FaBell } from "react-icons/fa";
import { FaEnvelope, FaLock, FaEyeLowVision, FaGoogle } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
function Login() {
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passWord, setPassWord] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    try {
      await login(email, passWord);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <main className="relative min-h-screen bg-slate-50">
        <section className="mx-auto flex max-w-6xl min-h-screen items-center justify-center">
          <div className="w-full grid border border-white lg:grid-cols-[1.1fr_0.9fr] bg-white rounded-[2rem] shadow-xl overflow-hidden hover:shadow-2xl">
            <div className="relative w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={smarthomeLogin}
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
              <div className="absolute text-white bottom-3 left-10 space-y-1 flex flex-col items-start">
                <div className="flex justify-center items-center gap-3">
                  <FaMobileAlt className="bg-white/30 w-12 h-12 px-2 py-2 rounded-full" />
                  <p className="text-white/60">Control devices from anywhere</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <FaDesktop className="bg-white/30 w-12 h-12 px-2 py-2 rounded-full" />
                  <p className="text-white/60">
                    Monitor your home in real time
                  </p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <FaRobot className="bg-white/30 w-12 h-12 px-2 py-2 rounded-full" />
                  <p className="text-white/60">Automate daily routines</p>
                </div>

                <div className="flex justify-center items-center gap-3">
                  <FaBell className="bg-white/30 w-12 h-12 px-2 py-2 rounded-full" />
                  <p className="text-white/60">
                    Receive instant security alerts
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-2xl px-10 py-5 rounded-2xl shadow-sm hover:shadow-lg">
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
                <p className="text-4xl font-bold">Welcome back</p>
                <p className="text-slate-600">
                  Sign in to manage your smart home securely.
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-5 mt-5 px-5 text-slate-600"
              >
                <div>
                  <label className="mb-2 block font-semibold text-slate-900">
                    Email address:
                  </label>
                  <div className="flex items-center border border-slate-300 rounded-2xl px-4 ring-1 ring-sky-100 hover:ring-sky-300 shadow-sm hover:shadow-lg">
                    <FaEnvelope className="text-slate-400" />
                    <input
                      className="w-full px-4 py-3.5 text-slate-600 text-xl outline-none placeholder:text-slate-400 "
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="user@gmai.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-slate-900">
                    Password:
                  </label>
                  <div className="flex justify-between items-center border border-slate-300 rounded-2xl px-4 ring-1 ring-sky-100 hover:ring-sky-300 shadow-sm hover:shadow-lg">
                    <div className="flex items-center">
                      <FaLock className="text-slate-400" />
                      <input
                        className="w-full px-4 py-3.5 text-slate-600 text-xl outline-none placeholder:text-slate-400"
                        value={passWord}
                        onChange={(e) => setPassWord(e.target.value)}
                        type="password"
                        required
                      />
                    </div>
                    <FaEyeLowVision className="text-slate-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm mb-3">
                    <label className="flex items-center gap-2 text-slate-600">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      Remember me
                    </label>

                    <button
                      type="button"
                      className="font-semibold text-blue-600 hover:text-blue-800"
                    >
                      Forgot password?
                    </button>
                  </div>
                  {errorMessage && (
                    <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                      {errorMessage}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-8 bg-blue-500 w-full rounded-2xl px-2 py-2 border border-slate-200 text-white font-semibold text-[1.2rem] hover:bg-blue-700"
                  >
                    {isLoading ? "Logging In" : "Log In"}
                  </button>
                  <div className="flex items-center justify-center mt-5 gap-3">
                    <div className="h-1 bg-slate-100 w-20"></div>
                    <p>or</p>
                    <div className="h-1 bg-slate-100 w-20"></div>
                  </div>
                  <div className="flex justify-center items-center gap-3 w-full border border-slate-200 rounded-2xl shadow-sm px-3 py-3 mt-5">
                    <FaGoogle className="text-red-600" />
                    <p className="text-slate-600 font-bold">
                      Continue with Google
                    </p>
                  </div>
                  <div className="flex gap-3 mt-10 justify-center">
                    <p>Don't have account yet?</p>
                    <Link
                      to="/auth/register"
                      className="text-blue-600 font-bold hover:text-blue-800 cursor-pointer"
                    >
                      Create one
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

export default Login;
