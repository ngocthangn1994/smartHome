import { useEffect, useState } from "react";
import api from "../../api/api";
import Header from "../../components/layout/Header";
import SummaryDevices from "../dashboard/SummaryDevices";
import SideBarHelper from "../../components/layout/SideBarHelper";
import { useAuth } from "../../context/AuthContext";
import type { IAutomationRule, IAlert, IDevice } from "../../types";
import RecentActivity from "../devices/components/RecentActivity";
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
  const [automationRules, setAutomationRules] = useState<IAutomationRule[]>([]);
  const [alerts, setAlerts] = useState<IAlert[]>([]);

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const [devicesResponse, automationResponse, alertsResponse] =
          await Promise.all([
            api.getDevices(),
            api.getAutomationRules(),
            api.getAlerts(),
          ]);

        setDevices(devicesResponse.data ?? []);
        setAlerts(alertsResponse.data ?? []);
        // Ensure automationResponse.data is an array before setting state
        const automationData = automationResponse.data;
        if (Array.isArray(automationData)) {
          setAutomationRules(automationData);
        } else if (automationData) {
          setAutomationRules([automationData]);
        } else {
          setAutomationRules([]);
        }
      } catch (error) {
        console.error(error);
        setErrorMessage("Unable to load dashboard data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

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
                <ProfileInformation />
                <HomePreferences />
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
    </>
  );
}

export default SettingPage;
