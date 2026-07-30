import { useEffect, useState } from "react";
import api from "../../api/api";
import Header from "../../components/layout/Header";
import SummaryDevices from "../dashboard/SummaryDevices";
import SideBarHelper from "../../components/layout/SideBarHelper";
import { useAuth } from "../../context/AuthContext";
import type { IDevice } from "../../types";
import DeviceToolbar from "../devices/components/DeviceToolbar";
import DeviceList from "../devices/DeviceList";
import DeviceHealthOverview from "../devices/components/DeviceHealthOverview";
import RecentMotion from "./components/RecentMotion";
import Recording from "./components/Recording";
import QuickAction from "./components/QuickAction";

function CameraPage() {
  const [devices, setDevices] = useState<IDevice[]>([]);

  const { user } = useAuth();
  const [selectedType, setSelectedType] = useState<any>("all");

  useEffect(() => {
    async function loadData() {
      try {
        const [devicesResponse] = await Promise.all([api.getDevices()]);

        setDevices(devicesResponse.data ?? []);
        // Ensure automationResponse.data is an array before setting state
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, []);

  const camera = devices.filter(
    (device) =>
      device.deviceType === "door_bell" || device.deviceType === "camera",
  );
  return (
    <>
      <div className="w-screen min-h-screen grid grid-cols-[0.3fr_1.7fr] bg-indigo-50">
        <div>
          <SideBarHelper />
        </div>
        <div className="bg-indigo-50 px-10 py-10">
          <Header user={user} page="cameras" />
          <SummaryDevices devices={devices} />
          <DeviceToolbar
            selectedType={selectedType}
            onFilterDevice={(type) => setSelectedType(type)}
          />
          <div className="grid grid-cols-[1.4fr_0.7fr] mt-5 gap-3">
            <div className="space-y-5">
              <DeviceList devices={camera} />
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
    </>
  );
}

export default CameraPage;
