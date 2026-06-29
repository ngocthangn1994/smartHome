import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

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
      navigate("/");
    } catch (error) {
      throw new Error("Can't register");
    }
  };
  return (
    <>
      <main className="w-screen h-screen bg-slate-900">
        <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />{" "}
        <div className="absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />{" "}
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <section className="min-h-screen flex items-center justify-center">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] w-6xl border border-white/10 rounded-[2rem] overflow-hidden text-white">
            <div className="mx-5 my-5 space-y-5">
              <div className="bg-white/10 border border-white/10 flex gap-2 max-w-sm rounded-2xl items-center hover:bg-white/12">
                <span className="h-8 w-8 bg-white rounded-full text-center">
                  🏚️
                </span>
                <h3 className="font-semibold">Smart Home DashBoard</h3>
              </div>
              <div>
                <h1 className="max-w-lg text-5xl font-bold leading-tight tracking-tight">
                  Create your smart home account.
                </h1>
                <p className="mt-5 max-w-md text-base leading-7">
                  Start manage monitor live device status, manage automation,
                  alerts from one clean dashboard.
                </p>
              </div>
              <div className="bg-white/10 shadow-sm rounded-2xl px-3 py-3 space-y-3 hover:bg-white/12 border border-white/12">
                <div>
                  <h3 className="font-semibold">Account setup</h3>
                  <p className="text-xl">Everything ready in one minute</p>
                </div>
                <div className="bg-white/15 rounded-2xl px-2 py-2 hover:bg-white/17">
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center">
                      <span className="bg-white/10 rounded-full px-1 py-1">
                        🔐
                      </span>
                    </div>
                    <div>
                      <h3>Secure Account Access</h3>
                      <p>Protect your dashboard with personal login</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/15 rounded-2xl px-2 py-2 hover:bg-white/17">
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center">
                      <span className="bg-white/20 rounded-full px-1 py-1">
                        🛂
                      </span>
                    </div>
                    <div>
                      <h3>Control All Devices</h3>
                      <p>
                        Access and monitor to all smart devices at one place.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/15 rounded-2xl px-2 py-2 hover:bg-white/17">
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center">
                      <span className="bg-white/20 rounded-full px-1 py-1">
                        🕰️
                      </span>
                    </div>
                    <div>
                      <h3>Real Time Alert</h3>
                      <p>Smart Detect Alert: Smoke, Motion, Battery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-sky-50 px-5 py-5 rounded-2xl shadow-sm border border-slate-200 hover:bg-sky-100">
              <div className="text-slate-600">
                <h3 className="text-xl text-blue-700">GET STARTED</h3>
                <h3 className="font-bold text-2xl">Create Account</h3>
                <p>
                  Enter your information and start manage your devices today.
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-5 mt-5 px-5 text-slate-600"
              >
                <div>
                  <label className="mb-2 block font-semibold text-slate-600">
                    Full Name:{" "}
                  </label>
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none shadow-sm transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="type your name here..."
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-slate-600">
                    Email Account:{" "}
                  </label>
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none shadow-sm transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com..."
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-slate-600">
                    Password:{" "}
                  </label>
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none shadow-sm transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    value={passWord}
                    onChange={(e) => setPassWord(e.target.value)}
                    type="password"
                    required
                    placeholder="create your password"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-600 w-full rounded-2xl px-2 py-1 border border-slate-200 text-white font-semibold text-[1.2rem] hover:bg-blue-700"
                  >
                    Register
                  </button>
                  <div className="flex gap-3 mt-5 justify-center">
                    <p>Already have account!</p>
                    <Link
                      to="/auth/login"
                      className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    >
                      Login
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
