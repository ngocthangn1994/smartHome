import { useEffect, useState } from "react";
import api from "../../api/api";
import Header from "../../components/layout/Header";
import SummaryDevices from "../dashboard/SummaryDevices";
import SideBarHelper from "../../components/layout/SideBarHelper";
import { useAuth } from "../../context/AuthContext";
import type { IAutomationRule, IAlert, IDevice } from "../../types";
import SecurityMenu from "./components/SecurityMenu";
import DeviceList from "../devices/DeviceList";
import SecurityHealthOverview from "./components/SecurityHealthOverview";
import SecurityRecentActivity from "./components/SecurityRecentActivity";
import SecurityQuickAction from "./components/SecurityQuickAction";
import type { securityType } from "./components/SecurityMenu";

function SecurityPage() {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [automationRules, setAutomationRules] = useState<IAutomationRule[]>([]);
  const [alerts, setAlerts] = useState<IAlert[]>([]);

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedType, setSelectedType] = useState<securityType>("all");
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

  const filterDevice = devices.filter((device) => {
    if (selectedType === "all") {
      return true;
    }
    return device.deviceType === selectedType;
  });

  return (
    <>
      <div className="w-screen min-h-screen grid grid-cols-[0.3fr_1.7fr] bg-indigo-50">
        <div>
          <SideBarHelper />
        </div>
        <div className="bg-indigo-50 px-10 py-10 space-y-5">
          <Header user={user} page="history" />
          <SummaryDevices devices={devices} />
          <SecurityMenu
            selectedType={selectedType}
            onFilterDevice={setSelectedType}
          />
          <div className="grid grid-cols-[1.5fr_0.5fr] gap-3">
            <DeviceList devices={filterDevice} />
            <div>
              <SecurityHealthOverview devices={devices} />
              <SecurityRecentActivity />
              <SecurityQuickAction />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecurityPage;
