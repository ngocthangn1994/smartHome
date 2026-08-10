import { useEffect, useState } from "react";
import api from "../../api/api";
import Header from "../../components/layout/Header";
import SummaryDevices from "../dashboard/components/SummaryDevices";
import { useAuth } from "../../context/AuthContext";
import type { IAlert, IDevice } from "../../types";
import RecentActivity from "../devices/components/RecentActivity";
import UserHeader from "../../components/layout/UserHeader";
function EnergyPage() {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [alerts, setAlerts] = useState<IAlert[]>([]);

  const { user } = useAuth();

  useEffect(() => {
    async function loadData() {
      try {
        const [devicesResponse, alertsResponse] = await Promise.all([
          api.getDevices(),
          api.getAlerts(),
        ]);

        setDevices(devicesResponse.data ?? []);
        setAlerts(alertsResponse.data ?? []);
      } catch (error) {
        console.error("Failed to load data:", error);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <div className="w-screen min-h-screen bg-indigo-50">
        <UserHeader />
        <div className="bg-indigo-50 px-10 py-10">
          <Header user={user} page={"energy" as any} />
          <SummaryDevices devices={devices} />
          <div className="grid grid-cols-[1.4fr_0.7fr] mt-5 gap-3">
            <div className="space-y-5"></div>
            <div className="bg-white px-5 py-5 border border-slate-200 shadow-sm rounded-2xl text-slate-600 space-y-3">
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

export default EnergyPage;
