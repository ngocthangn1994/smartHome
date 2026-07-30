import { useEffect, useState } from "react";
import api from "../../api/api";
import Header from "../../components/layout/Header";
import SummaryDevices from "../dashboard/SummaryDevices";
import SideBarHelper from "../../components/layout/SideBarHelper";
import { useAuth } from "../../context/AuthContext";
import type { IDevice } from "../../types";
import HistoryMenu from "./components/HistoryMenu";
import HistoryList from "./components/HistoryList";
import HistoryOverview from "./components/HistoryOverview";
import HistoryRecentActivity from "./components/HisrtoryRecentActivity";
function HistoryPage() {
  const [devices, setDevices] = useState<IDevice[]>([]);

  const { user } = useAuth();

  useEffect(() => {
    async function loadData() {
      const [devicesResponse] = await Promise.all([api.getDevices()]);
      setDevices(devicesResponse.data ?? []);
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
          <Header user={user} page="history" />
          <SummaryDevices devices={devices} />
          <HistoryMenu />
          <div className="grid grid-cols-[1.5fr_0.5fr] gap-5">
            <HistoryList />
            <div>
              <HistoryOverview />

              <HistoryRecentActivity />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryPage;
