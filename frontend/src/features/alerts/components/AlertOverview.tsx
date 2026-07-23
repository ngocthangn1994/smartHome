import HealthRow from "../../../components/layout/HealthRow";
import DonutChart from "../../../components/layout/DonutChart";
import type { IAlert } from "../../../types";

interface AlertOverviewProps {
  alerts: IAlert[];
}

function AlertOverview({ alerts }: AlertOverviewProps) {
  const alertsHigh = alerts.filter((alert) => {
    alert.severity === "high";
  });
  const alertMedium = alerts.filter((alert) => {
    alert.severity === "medium";
  });
  const alertLow = alerts.length - alertsHigh.length - alertMedium.length;
  const sectionData = [
    {
      value: alertsHigh.length,
      color: "#0cef5f",
    },
    {
      value: alertMedium.length,
      color: "#a3a3a3",
    },
    {
      value: alertLow,
      color: "#f1eb29",
    },
  ];

  const healthRowData = [
    {
      color: "text-blue-600",
      name: "High Severity",
      number: alertsHigh.length,
      percent: Math.ceil(alertsHigh.length / alerts.length) * 100,
    },
    {
      color: "text-slate-600",
      name: "Medium Severity",
      number: alertMedium.length,
      percent: Math.ceil(alertMedium.length / alerts.length) * 100,
    },
    {
      color: "text-yellow-300",
      name: "Low Severity",
      number: alertLow,
      percent: Math.ceil(alertLow / alerts.length) * 100,
    },
  ];

  return (
    <>
      <div className="bg-white p-5 rounded-2xl">
        <p className="text-xl font-bold">Alerts Health Overview</p>
        <div className="grid sm:grid-cols-[auto_1fr] gap-5 items-center text-center mt-5">
          <div className="flex justify-center sm:justify-start">
            <DonutChart
              total={alerts.length}
              centerLabel="Alerts"
              sections={sectionData}
            />
          </div>
          <HealthRow data={healthRowData} />
        </div>
      </div>
    </>
  );
}

export default AlertOverview;
