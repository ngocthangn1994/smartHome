import { useEffect, useState } from "react";
import api from "../../../api/api";
import Header from "../../../components/layout/Header";
import SummaryDevices from "../../dashboard/components/SummaryDevices";
import { useAuth } from "../../../context/AuthContext";
import type { IAlert, IDevice } from "../../../types";
import AlertMenu from "../components/AlertMenu";
import AlertList from "../components/AlertList";
import AlertOverview from "../components/AlertOverview";
import AlertRecentActivity from "../components/AlertRecentActivity";
import AlertQuickAction from "../components/AlertQuickActions";
import UserHeader from "../../../components/layout/UserHeader";
import SideBarHelper from "../../../components/layout/SideBarHelper";
function AlertPage() {
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
        console.error(error);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-indigo-50">
        <UserHeader />
        <div className="grid grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)]">
          <div className="hidden xl:block">
            <SideBarHelper />
          </div>
          <div className="min-w-0 bg-indigo-50 px-4 py-6 sm:px-6 lg:px-10 lg:py-10 space-y-5">
            <Header user={user} page="alerts" />
            <SummaryDevices devices={devices} />
            <div className="space-y-5">
              <AlertMenu />
              <AlertList />
              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                <AlertOverview alerts={alerts} />
                <AlertRecentActivity />
                <AlertQuickAction />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlertPage;
