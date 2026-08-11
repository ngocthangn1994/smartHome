import { useEffect, useState } from "react";
import api from "../../../api/api";
import Header from "../../../components/layout/Header";
import SummaryDevices from "../../dashboard/components/SummaryDevices";
import { useAuth } from "../../../context/AuthContext";
import type { IDevice } from "../../../types";
import SecurityMenu from "../components/SecurityMenu";
import DeviceList from "../../devices/components/DeviceList";
import SecurityHealthOverview from "../../security/components/SecurityHealthOverview";
import SecurityRecentActivity from "../../security/components/SecurityRecentActivity";
import SecurityQuickAction from "../../security/components/SecurityQuickAction";
import type { securityType } from "../components/SecurityMenu";
import UserHeader from "../../../components/layout/UserHeader";
import SideBarHelper from "../../../components/layout/SideBarHelper";
function SecurityPage() {
  const [devices, setDevices] = useState<IDevice[]>([]);

  const { user } = useAuth();

  const [selectedType, setSelectedType] = useState<securityType>("all");
  useEffect(() => {
    async function loadData() {
      const [devicesResponse] = await Promise.all([api.getDevices()]);
      setDevices(devicesResponse.data ?? []);
    }

    loadData();
  }, []);

  const securityDevices = devices.filter((device) => {
    if (
      device.deviceType === "camera" ||
      device.deviceType === "door_bell" ||
      device.deviceType === "door_lock" ||
      device.deviceType === "window_sensor" ||
      device.deviceType === "smoke_detector" ||
      device.deviceType === "water_leak_sensor" ||
      device.deviceType === "motion_sensor"
    ) {
      return device;
    }
  });
  const filterDevice = securityDevices.filter((device) => {
    if (selectedType === "all") {
      return true;
    }
    return device.deviceType === selectedType;
  });

  return (
    <>
      <div className="w-screen min-h-screen bg-indigo-50">
        <UserHeader />
        <div className="grid grid-cols-1 xl:grid-cols-[0.3fr_1.7fr]">
          <div className="hidden xl:block">
            <SideBarHelper />
          </div>

          <div className="bg-indigo-50 px-10 py-10 space-y-3">
            <Header user={user} page="security" />
            <SummaryDevices devices={devices} />
            <SecurityMenu
              selectedType={selectedType}
              onFilterDevice={setSelectedType}
            />
            <div className="grid grid-cols-1 md:grid-cols-[1.5fr_0.5fr] gap-2">
              <DeviceList devices={filterDevice} />
              <div>
                <SecurityHealthOverview devices={devices} />
                <SecurityRecentActivity />
                <SecurityQuickAction />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecurityPage;
