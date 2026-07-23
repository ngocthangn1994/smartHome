import { useEffect, useState } from "react";
import api from "../../api/api";
import Header from "../../components/layout/Header";
import SummaryDevices from "../dashboard/SummaryDevices";
import SideBarHelper from "../../components/layout/SideBarHelper";
import { useAuth } from "../../context/AuthContext";
import type { IAutomationRule, IAlert, IDevice } from "../../types";
import DeviceToolbar from "./components/DeviceToolbar";
import DeviceList from "./DeviceList";
import DeviceHealthOverview from "./components/DeviceHealthOverview";
import RecentAdded from "./components/RecentAdded";
import RecentActivity from "../devices/components/RecentActivity";
import type { DeviceType } from "../../types";
type DeviceFilter = DeviceType | "all" | "security";

function DevicesPage() {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [automationRules, setAutomationRules] = useState<IAutomationRule[]>([]);
  const [alerts, setAlerts] = useState<IAlert[]>([]);
  const [selectedType, setSelectedType] = useState<DeviceFilter>("all");
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const securityDevices = [
    "door_lock",
    "window_sensor",
    "garage_lock",
    "camera",
  ];
  const filterDevice = (type: DeviceFilter) => {
    return devices.filter((device) => {
      if (selectedType === "all") {
        return true;
      }
      if (selectedType === "security") {
        return securityDevices.includes(device.deviceType);
      }
      return device.deviceType.includes(selectedType);
    });
  };
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
          <Header user={user} page="devices" />
          <SummaryDevices devices={devices} />
          <DeviceToolbar
            selectedType={selectedType}
            onFilterDevice={setSelectedType}
          />
          <div className="grid grid-cols-[1.4fr_0.7fr] mt-5 gap-3">
            <div className="space-y-5">
              <DeviceList devices={filterDevice(selectedType)} />
            </div>
            <div className="bg-white px-5 py-5 border border-slate-200 shadow-sm rounded-2xl text-slate-600 space-y-3">
              <DeviceHealthOverview devices={filterDevice(selectedType)} />
              <RecentAdded />
              <div className="mt-5">
                <RecentActivity alerts={alerts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DevicesPage;
