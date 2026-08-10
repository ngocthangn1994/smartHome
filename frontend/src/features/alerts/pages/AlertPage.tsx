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
      <div className="w-screen min-h-screen bg-indigo-50">
        <UserHeader />
        <div className="grid lg:grid-cols-[0.3fr_1.7fr]">
          <div>
            <SideBarHelper />
          </div>
          <div className="bg-indigo-50 px-10 py-10 space-y-3">
            <Header user={user} page="alerts" />
            <SummaryDevices devices={devices} />
            <div>
              <AlertMenu />
              <div className="gap-3">
                <AlertList />
                <div>
                  <AlertOverview alerts={alerts} />
                  <AlertRecentActivity />
                  <AlertQuickAction />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default AlertPage;
