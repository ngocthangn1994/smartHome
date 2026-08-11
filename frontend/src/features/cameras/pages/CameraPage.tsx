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
      <div className="w-screen min-h-screen bg-indigo-50">
        <UserHeader />
        <div className="grid grid-cols-1 xl:grid-cols-[0.3fr_1.7fr]">
          <div className="hidden xl:block">
            <SideBarHelper />
          </div>
          <div className="bg-indigo-50 px-10 py-10">
            <Header user={user} page="cameras" />
            <SummaryDevices devices={devices} />
            <DeviceToolbar
              selectedType={selectedType}
              onFilterDevice={(type) => setSelectedType(type)}
            />
            <div className="grid xl:grid-cols-[1.4fr_0.7fr] mt-5 gap-3">
              <div className="space-y-5">
                <DeviceList devices={cameras} />
              </div>
              <div className="bg-white px-5 py-5 border border-slate-200 shadow-sm rounded-2xl text-slate-600 space-y-3">
                <DeviceHealthOverview devices={devices} />
                <div className="mt-5">
                  <RecentMotion />
                  <Recording />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <QuickAction />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CameraPage;
