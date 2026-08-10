import { useEffect, useState } from "react";
import api from "../../../api/api";
import Header from "../../../components/layout/Header";
import SummaryDevices from "../../../features/dashboard/components/SummaryDevices";
import SideBarHelper from "../../../components/layout/SideBarHelper";
import { useAuth } from "../../../context/AuthContext";
import type { IAlert, IDevice } from "../../../types";
import DeviceToolbar from "../components/DeviceToolbar";
import DeviceList from "../components/DeviceList";
import DeviceHealthOverview from "../components/DeviceHealthOverview";
import RecentAdded from "../components/RecentAdded";
import RecentActivity from "../components/RecentActivity";
import type { DeviceType } from "../../../types";
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
      <div className="w-screen min-h-screen md:grid-cols-[0.3fr_1.7fr] bg-indigo-50">
        <div className="bg-indigo-50 px-10 py-10">
          <Header user={user} page="devices" />
          <SummaryDevices devices={devices} />
          <DeviceToolbar
            selectedType={selectedType}
            onFilterDevice={setSelectedType}
          />
          <div className="grid gtrid-cols-1 md:grid-cols-[1.4fr_0.7fr] mt-5 gap-3">
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
