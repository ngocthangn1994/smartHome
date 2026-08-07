import type { IDevice } from "../../../types";
import DonutChart from "../../../components/ui/DonutChart";
import HealthRow from "../../../components/ui/HealthRow";
interface DeviceHealthOverviewProps {
  devices: IDevice[];
}
function DeviceHealthOverview({ devices }: DeviceHealthOverviewProps) {
  const deviceOnline = devices.filter((device) => {
    return device.status == "online";
  });
  const onlinePercent = Math.floor(
    (deviceOnline.length / devices.length) * 100,
  );
  const deviceOffline = devices.length - deviceOnline.length;
  const offlinePercent = 100 - onlinePercent;
  const lowBattery = devices.filter((device) => {
    if (device.batteryLevel !== undefined && device.batteryLevel < 20) {
      return true;
    }
  });
  const lowBatteryPercent = Math.ceil(
    (lowBattery.length / devices.length) * 100,
  );
  const sectionData = [
    {
      value: onlinePercent,
      color: "#0cef5f",
    },
    {
      value: offlinePercent,
      color: "#a3a3a3",
    },
    {
      value: lowBatteryPercent,
      color: "#f1eb29",
    },
  ];

  const healthRowData = [
    {
      color: "text-blue-600",
      name: "Online",
      number: deviceOnline.length,
      percent: onlinePercent,
    },
    {
      color: "text-slate-600",
      name: "Offline",
      number: deviceOffline,
      percent: offlinePercent,
    },
    {
      color: "text-yellow-300",
      name: "Low Battery",
      number: lowBattery.length,
      percent: lowBatteryPercent,
    },
  ];
  return (
    <>
      <div className="bg-white rounded-2xl p-5">
        <p className="text-xl font-bold">Device Health Overview</p>
        <div className="grid sm:grid-cols-[auto_1fr] gap-5 items-center text-center mt-5">
          <div className="flex justify-center sm:justify-start">
            <DonutChart
              total={devices.length}
              centerLabel="devices"
              sections={sectionData}
            />
          </div>
          <HealthRow data={healthRowData} />
        </div>
      </div>
    </>
  );
}
export default DeviceHealthOverview;
