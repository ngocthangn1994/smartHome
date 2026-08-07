import {
  FaHouseChimneyUser,
  FaAngleDown,
  FaSearchengin,
  FaBell,
  FaGrav,
} from "react-icons/fa6";
import type { IUser } from "../../types";
import { useNavigate } from "react-router-dom";
type PageName =
  | "dashboard"
  | "devices"
  | "cameras"
  | "automations"
  | "alerts"
  | "history"
  | "security"
  | "settings";
interface HeaderProps {
  page: PageName;
  user: IUser | null;
}

import api from "../../api/api";
function Header({ user, page }: HeaderProps) {
  const navigate = useNavigate();
  const headerGreeting = {
    dashboard: {
      greet: `Welcome back, ${user?.name ?? "User"}! 👋`,
      message:
        "Here's a quick overview of your smart home. Everything is at your fingertips.",
    },

    devices: {
      greet: "🏠 Smart Devices",
      message:
        "Manage, monitor, and control all your connected smart devices from one convenient place.",
    },

    cameras: {
      greet: "📹 Security Cameras",
      message:
        "View live camera feeds, monitor recordings, and stay informed with instant motion detection.",
    },

    automations: {
      greet: "⚡ Automations",
      message:
        "Create powerful automation rules to make your smart home work for you automatically.",
    },

    alerts: {
      greet: "🚨 Alerts & Notifications",
      message:
        "Stay informed with real-time alerts for smoke, motion, water leaks, security events, and more.",
    },

    history: {
      greet: "📜 Activity History",
      message:
        "Review recent device activity, automation events, and security logs anytime.",
    },

    security: {
      greet: "🛡️ Home Security",
      message:
        "Protect your home by managing locks, sensors, alarms, and other security devices.",
    },

    settings: {
      greet: "⚙️ Settings",
      message:
        "Customize your profile, manage your home, configure devices, and personalize your experience.",
    },
  };

  const handleMenu = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (value === "profile") {
      navigate("/settings");
      return;
    }
    if (value === "dashboard") {
      navigate("/dashboard");
      return;
    }
    if (value === "logout") {
      await api.logout();
      navigate("/");
    }
  };
  return (
    <>
      <div className="flex justify-between items-center mb-10 text-slate-600">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {headerGreeting[page].greet}
          </h1>

          {headerGreeting[page].message && (
            <p className="max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
              {headerGreeting[page].message}
            </p>
          )}
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex gap-3 items-center text-slate-600 border border-slate-200 px-2 py-2 rounded-2xl bg-white">
            <FaHouseChimneyUser className="w-10 h-10" />
            <span className="text-xl font-bold ">My Home</span>
            <FaAngleDown />
          </div>
          <div className="flex justify-between border border-slate-200 bg-white px-5 py-2 rounded-2xl text-slate-600 text-xl">
            <input
              className="outline-none"
              placeholder="Search devices, rooms..."
            />
            <FaSearchengin className="w-10 h-10" />
          </div>
          <FaBell className="w-12 h-12 bg-white px-2 py-2 rounded-full shadow-sm ring-1 ring-indigo-200" />
          <div className="flex gap-3 items-center text-slate-600 border border-slate-200 px-5 py-2 rounded-2xl bg-white">
            <FaGrav className="w-10 h-10" />
            <select onChange={handleMenu}>
              <option value="dashboard">Dashboard</option>
              <option value="profile">Profile</option>
              <option value="logout">Log out</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
