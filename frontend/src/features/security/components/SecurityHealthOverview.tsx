import HealthRow from "../../../components/ui/HealthRow";
import DonutChart from "../../../components/ui/DonutChart";
import type { IDevice } from "../../../types";
interface SecurityHealthOverviewProps {
  devices: IDevice[];
}
function SecurityHealthOverview({ devices }: SecurityHealthOverviewProps) {
  const cameras = devices.filter((device) => {
    return device.deviceType === "camera";
  });
  const doorLock = devices.filter((device) => {
    return device.deviceType === "door_lock";
  });
  const waterLeakSensor = devices.filter((device) => {
    return device.deviceType === "door_lock";
  });
  const motionSensor = devices.filter((device) => {
    return device.deviceType === "motion_sensor";
  });
  const totalSecurityDevices =
    cameras.length +
    doorLock.length +
    waterLeakSensor.length +
    motionSensor.length;

  const sectionData = [
    {
      value: cameras.length,
      color: "#0cef5f",
    },
    {
      value: doorLock.length,
      color: "#a3a3a3",
    },
    {
      value: waterLeakSensor.length + motionSensor.length,
      color: "#f1eb29",
    },
  ];

  const healthRowData = [
    {
      color: "text-blue-600",
      name: "Cameras",
      number: cameras.length,
      percent: Math.ceil((cameras.length * 100) / totalSecurityDevices),
    },
    {
      color: "text-slate-600",
      name: "Door Lock",
      number: doorLock.length,
      percent: Math.ceil((doorLock.length * 100) / totalSecurityDevices),
    },
    {
      color: "text-yellow-300",
      name: "Other Security Devices",
      number: waterLeakSensor.length + motionSensor.length,
      percent: Math.ceil(
        ((waterLeakSensor.length + motionSensor.length) * 100) /
          totalSecurityDevices,
      ),
    },
  ];
  return (
    <>
      <div className="bg-white rounded-2xl p-5">
        <p className="text-xl font-bold">Security Health Overview</p>
        <div className="grid sm:grid-cols-[auto_1fr] gap-5 items-center text-center mt-5">
          <div className="flex justify-center sm:justify-start">
            <DonutChart
              total={totalSecurityDevices}
              centerLabel="Security"
              sections={sectionData}
            />
          </div>
          <HealthRow data={healthRowData} />
        </div>
      </div>
    </>
  );
}

export default SecurityHealthOverview;
