import { useEffect, useState } from "react";
import api from "../../../api/api";
import Header from "../../../components/layout/Header";
import SummaryDevices from "../../dashboard/components/SummaryDevices";
import { useAuth } from "../../../context/AuthContext";
import type { IDevice } from "../../../types";
import DeviceToolbar from "../../devices/components/DeviceToolbar";
import DeviceList from "../../devices/components/DeviceList";
import DeviceHealthOverview from "../../devices/components/DeviceHealthOverview";
import RecentMotion from "../components/RecentMotion";
import Recording from "../components/Recording";
import QuickAction from "../components/QuickAction";
import UserHeader from "../../../components/layout/UserHeader";
import SideBarHelper from "../../../components/layout/SideBarHelper";
function CameraPage() {
  const [devices, setDevices] = useState<IDevice[]>([]);

  const { user } = useAuth();
  const [selectedType, setSelectedType] = useState<any>("all");

  useEffect(() => {
    async function loadData() {
      try {
        const [devicesResponse] = await Promise.all([api.getDevices()]);

        setDevices(devicesResponse.data ?? []);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, []);

  const cameras = devices.filter(
    (device) =>
      device.deviceType === "door_bell" || device.deviceType === "camera",
  );
  return (
    <>
      <div className="w-full min-h-screen bg-indigo-50">
        <UserHeader />
        <div className="grid grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)]">
          <div className="hidden xl:block">
            <SideBarHelper />
          </div>
          <div className="min-w-0 bg-indigo-50 px-4 py-6 sm:px-6 lg:px-10 lg:py-10 space-y-5">
            <Header user={user} page="cameras" />
            <SummaryDevices devices={devices} />
            <DeviceToolbar
              selectedType={selectedType}
              onFilterDevice={(type) => setSelectedType(type)}
            />
            <div className="grid grid-cols-1 2xl:grid-cols-[1.4fr_0.7fr] gap-5">
              <div className="min-w-0 space-y-5">
                <DeviceList devices={cameras} />
              </div>
              <div className="h-fit bg-white px-4 py-4 sm:px-5 sm:py-5 border border-slate-200 shadow-sm rounded-2xl text-slate-600 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-1 gap-5">
                <DeviceHealthOverview devices={devices} />
                <div>
                  <RecentMotion />
                  <Recording />
                </div>
              </div>
            </div>
            <QuickAction />
          </div>
        </div>
      </div>
    </>
  );
}

export default CameraPage;
