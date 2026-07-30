import { useEffect, useState } from "react";
import api from "../../api/api";
import Header from "../../components/layout/Header";
import SummaryDevices from "../dashboard/SummaryDevices";
import SideBarHelper from "../../components/layout/SideBarHelper";
import { useAuth } from "../../context/AuthContext";
import type { IDevice, IHome } from "../../types";
import SettingsMenu from "./components/SettingsMenu";
import SettingsOverview from "./components/SettingsOverview";
import ProfileInformation from "./components/ProfileInformation";
import HomePreferences from "./components/HomePreferences";
import NotificationPreferences from "./components/NotificationPreferences";
import SettingRecentActivity from "./components/SettingRecentActivity.tsx";
import SecuritySettings from "./components/SecuritySettings.tsx";
import Integrations from "./components/Integrations.tsx";
import BackupSystem from "./components/BackupSystem.tsx";
import SettingsQuickActions from "./components/SettingsQuickActions.tsx";
function SettingPage() {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [home, setHome] = useState<IHome>();
  const [name, setName] = useState("User");
  const [email, setEmail] = useState("user@gmail.com");
  const [phone, setPhone] = useState("+1 (832)-591-6062");
  const { user } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [homeName, setHomeName] = useState("Ngoc's Smart Home");
  const [address, setAddress] = useState("15106 gaines meadow court");

  useEffect(() => {
    async function loadData() {
      setErrorMessage("");
      const [devicesResponse] = await Promise.all([api.getDevices()]);
      setDevices(devicesResponse.data ?? []);
    }

    loadData();
  }, []);

  useEffect(() => {
    async function loadUser() {
      if (user) {
        setName(user?.name);
        setEmail(user?.email);
      }
    }
    loadUser();
  }, []);
  const onSave = async () => {
    if (!user?._id) {
      setErrorMessage("User ID is missing.");
      return;
    }
    try {
      setErrorMessage("");
      await api.updateUser(user?._id, {
        name,
        email,
      });
    } catch (error) {
      setErrorMessage("Can't save the information");
    }
  };

  useEffect(() => {
    async function loadHome() {
      if (!user?.homeId) {
        return;
      }

      try {
        const response = await api.getHomeById(user.homeId);

        if (response.data) {
          setHome(response.data);
          setHomeName(response.data.name ?? "");
          setAddress(response.data.address ?? "");
        }
      } catch (error) {
        console.error("Unable to load home:", error);
        setErrorMessage("Unable to load home information.");
      }
    }

    loadHome();
  }, [user?.homeId]);

  const homeSave = async () => {
    console.log("Save clicked");
    console.log("Current home:", home);
    console.log("Sending:", {
      name: homeName,
      address,
    });

    if (!home?._id) {
      setErrorMessage("Missing the home ID.");
      return;
    }

    try {
      setErrorMessage("");

      const response = await api.updateHome(home._id, {
        name: homeName,
        address,
      });

      console.log("Updated home response:", response);

      if (response.data) {
        setHome(response.data);
        setHomeName(response.data.name ?? "");
        setAddress(response.data.address ?? "");
      }

      alert("Home information saved successfully.");
    } catch (error) {
      console.error("Home update failed:", error);

      setErrorMessage(
        error instanceof Error ? error.message : "Can't save home.",
      );
    }
  };
  return (
    <>
      <div className="w-screen min-h-screen grid grid-cols-[0.3fr_1.7fr] bg-indigo-50">
        <div>
          <SideBarHelper />
        </div>
        <div className="bg-indigo-50 px-10 py-10">
          <Header user={user} page="settings" />
          <SummaryDevices devices={devices} />
          <div className="grid grid-cols-[1.4fr_0.7fr] mt-5 gap-3">
            <div className="space-y-5">
              <SettingsMenu />
              <div className="flex gap-3">
                <ProfileInformation
                  name={name}
                  email={email}
                  phone={phone}
                  onSave={onSave}
                  setName={setName}
                  setEmail={setEmail}
                  setPhone={setPhone}
                />
                <HomePreferences
                  homeName={homeName}
                  address={address}
                  setHomeName={setHomeName}
                  setAddress={setAddress}
                  homeSave={homeSave}
                />
                <NotificationPreferences />
              </div>
              <div className="flex gap-3">
                <SecuritySettings />
                <Integrations />
                <BackupSystem />
              </div>
            </div>
            <div className="space-y-5">
              <SettingsOverview />
              <SettingRecentActivity />
              <SettingsQuickActions />
            </div>
          </div>
        </div>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

export default SettingPage;
