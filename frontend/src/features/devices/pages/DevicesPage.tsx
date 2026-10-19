import { useEffect, useState } from "react";
import api from "../../../api/api";
import Header from "../../../components/layout/Header";
import SummaryDevices from "../../../features/dashboard/components/SummaryDevices";
import { useAuth } from "../../../context/AuthContext";
import type { IAlert, IDevice } from "../../../types";
import DeviceToolbar from "../components/DeviceToolbar";
import DeviceList from "../components/DeviceList";
import DeviceHealthOverview from "../components/DeviceHealthOverview";
import RecentAdded from "../components/RecentAdded";
import RecentActivity from "../components/RecentActivity";
import type { DeviceType } from "../../../types";
import UserHeader from "../../../components/layout/UserHeader";
import SideBarHelper from "../../../components/layout/SideBarHelper";
type DeviceFilter = DeviceType | "all" | "security";

function DevicesPage() {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [alerts, setAlerts] = useState<IAlert[]>([]);
  const [selectedType, setSelectedType] = useState<DeviceFilter>("all");
  const { user } = useAuth();

  const securityDevices = [
    "door_lock",
    "window_sensor",
    "garage_lock",
    "camera",
  ];
  const filterDevice = (type: DeviceFilter) => {
    return devices.filter((device) => {
      if (type === "all") {
        return true;
      }
      if (type === "security") {
        return securityDevices.includes(device.deviceType);
      }
      return device.deviceType.includes(type);
    });
  };
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
        console.log(error);
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
            <Header user={user} page="devices" />
            <SummaryDevices devices={devices} />
            <DeviceToolbar
              selectedType={selectedType}
              onFilterDevice={setSelectedType}
              onDeviceAdded={(device) =>
                setDevices((previous) => [...previous, device])
              }
            />
            <div className="grid grid-cols-1 2xl:grid-cols-[1.4fr_0.7fr] gap-5">
              <div className="min-w-0 space-y-5">
                <DeviceList devices={filterDevice(selectedType)} />
              </div>
              <div className="h-fit bg-white px-4 py-4 sm:px-5 sm:py-5 border border-slate-200 shadow-sm rounded-2xl text-slate-600 space-y-3">
                <DeviceHealthOverview devices={filterDevice(selectedType)} />
                <RecentAdded />
                <div className="mt-5">
                  <RecentActivity alerts={alerts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DevicesPage;
