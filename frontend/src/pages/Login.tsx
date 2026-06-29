import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

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
      navigate("/");
    } catch (error) {
      setErrorMessage("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <main className="relative min-h-screen bg-slate-950">
        <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />{" "}
        <div className="absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />{" "}
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <section className="mx-auto flex max-w-6xl min-h-screen items-center justify-center">
          <div className="w-full grid border border-white lg:grid-cols-[1.1fr_0.9fr] bg-white rounded-[2rem] shadow-2xl overflow-hidden">
            <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-10 text-white">
              <div className="flex h-full flex-col ml-5">
                <div className="inline-flex items-center border border-white/10 w-sm rounded-2xl px-2 mt-5 py-1 gap-3 bg-white/10 hover:bg-white/15">
                  <span className="flex justify-center items-center w-8 h-8 rounded-full bg-white text-2xl">
                    🏡
                  </span>
                  <h3 className="font-semibold text-slate-200">
                    Smart Home Dashboard
                  </h3>
                </div>
                <h1 className="max-w-lg text-5xl font-bold leading-tight tracking-tight">
                  Control your entire home from one secure place.
                </h1>
                <p className="mt-5 max-w-md text-base leading-7">
                  Monitor live device status, manage automation, and receive
                  smart alerts from one clean dashboard.
                </p>

                <div className="border border-white/20 bg-white/10 px-2 py-2 rounded-[2rem] mt-5 hover:bg-white/12 shadow-sm">
                  <div className="flex justify-between px-5 py-5">
                    <div>
                      <h3 className="font-semibold text-[1.2rem]">
                        🏠 Home Dasboard
                      </h3>
                      <p>Smart Devices Controller</p>
                    </div>
                    <div className="bg-white/5 px-2 py-2 rounded-xl text-center shadow-lg">
                      <p className="font-semibold">Devices</p>
                      <span>10</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-5 text-center mb-5">
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-2xl font-bold">5</p>
                      <p className="mt-1 text-xs text-slate-300">Online</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-2xl font-bold">7</p>
                      <p className="mt-1 text-xs text-slate-300">Offline</p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-2xl font-bold">3</p>
                      <p className="mt-1 text-xs text-slate-300">Alert</p>
                    </div>

                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-2xl font-bold">2</p>
                      <p className="mt-1 text-xs text-slate-300">
                        Smoke Detected
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <p className="text-2xl font-bold">1</p>
                      <p className="mt-1 text-xs text-slate-300">
                        Motion Detected
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3 mb-5">
                    <div className="bg-white/5 px-1 py-1 rounded-xl text-center hover:bg-white/10">
                      <p>Thermostat</p>
                      <div className="grid grid-cols-2 gap-1">
                        <p className="text-[0.8rem] bg-white/15 rounded-full px-1 py-1 hover:bg-white/20">
                          Increase ℃
                        </p>
                        <p className="text-[0.8rem] bg-white/15 rounded-full px-1 py-1 hover:bg-white/20">
                          Decrease ℃
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/5 px-2 py-2 rounded-xl text-center hover:bg-white/10">
                      <p>Smoke Detector</p>
                      <span className="text-[0.8rem] bg-white/15 rounded-full px-2 py-1 hover:bg-white/20">
                        Toggle
                      </span>
                    </div>
                    <div className="bg-white/5 px-2 py-2 rounded-xl text-center hover:bg-white/10">
                      <p>Camera</p>
                      <span className="text-[0.8rem] bg-white/15 rounded-full px-2 py-1 hover:bg-white/20">
                        Toggle
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-sky-50 max-w-2xl px-5 py-5 rounded-2xl shadow-sm border border-slate-200 hover:bg-sky-100">
              <div className="text-center text-slate-600">
                <span className="text-2xl">🏠</span>
                <h3 className="font-semibold text-2xl">Welcome Back</h3>
                <p className="text-blue-600">Sign In</p>
                <p>
                  Enter your account information to manage your smart home
                  devices.
                </p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="space-y-5 mt-5 px-5 text-slate-600"
              >
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email address:
                  </label>
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@gmai.com..."
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Password:
                  </label>
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    value={passWord}
                    onChange={(e) => setPassWord(e.target.value)}
                    type="password"
                    required
                  />
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
                    className="bg-blue-600 w-full rounded-2xl px-2 py-1 border border-slate-200 text-white font-semibold text-[1.2rem] hover:bg-blue-700"
                  >
                    {isLoading ? "Signing In" : "Sign in to Dashboard"}
                  </button>
                  <div className="flex gap-3 mt-5 justify-center">
                    <p>Don't have account yet?</p>
                    <Link
                      to="/auth/register"
                      className="text-blue-600 hover:text-blue-800 cursor-pointer"
                    >
                      Register
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
