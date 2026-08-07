import { useEffect, useState } from "react";
import api from "../../../api/api";
import Header from "../../../components/layout/Header";
import DeviceList from "../../../features/devices/components/DeviceList";
import SideBarHelper from "../../../components/layout/SideBarHelper";
import SummaryDevices from "../../dashboard/components/SummaryDevices";
import SecurityOverview from "../../dashboard/components/SecurityOverview";
import EnergyOverview from "../../dashboard/components/EnergyOverview";
import RecentActivity from "../../dashboard/components/RecentAcitivity";
import Automation from "../../dashboard/components/Automations";
import { useAuth } from "../../../context/AuthContext";
import type { IAutomationRule, IAlert, IDevice } from "../../../types";
function Dashboard() {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [automationRules, setAutomationRules] = useState<IAutomationRule[]>([]);
  const [alerts, setAlerts] = useState<IAlert[]>([]);

  const { user } = useAuth();

  useEffect(() => {
    async function loadData() {
      try {
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
          <Header user={user} page="dashboard" />
          <SummaryDevices devices={devices} />
          <div className="grid grid-cols-[1.3fr_0.7fr] mt-5 gap-5">
            <div className="border border-slate-200 bg-white rounded-2xl px-5 py-5">
              <p className="font-bold text-xl mb-5">My Deivces</p>
              <DeviceList devices={devices} />
            </div>
            <SecurityOverview devices={devices} />
          </div>
          <div className="grid grid-cols-[1fr_1fr_2fr] mt-5 gap-5">
            <EnergyOverview />
            <Automation automationRules={automationRules} />
            <RecentActivity alerts={alerts} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
