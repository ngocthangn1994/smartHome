import DonutChart from "../../../components/ui/DonutChart";
import type { IAutomationRule } from "../../../types";
import HealthRow from "../../../components/ui/HealthRow";

interface AutomationHealthOverViewProps {
  automationRules: IAutomationRule[];
}
function AutomationHealthOverview({
  automationRules,
}: AutomationHealthOverViewProps) {
  const activeAutomationRules = automationRules.filter((automationRule) => {
    return automationRule.enable === true;
  });
  const inactiveAutomationRules =
    automationRules.length - activeAutomationRules.length;
  const sectionData = [
    {
      value: activeAutomationRules.length,
      color: "#1477f0",
    },
    {
      value: inactiveAutomationRules,
      color: "#a3a3a3",
    },
    {
      value: 0,
      color: "#f1eb29",
    },
  ];
  const healthRowData = [
    {
      color: "text-blue-600",
      name: "Online",
      number: activeAutomationRules.length,
      percent:
        Math.ceil(activeAutomationRules.length / automationRules.length) * 100,
    },
    {
      color: "text-slate-600",
      name: "Offline",
      number: inactiveAutomationRules,
      percent:
        Math.ceil(inactiveAutomationRules / automationRules.length) * 100,
    },
    {
      color: "text-yellow-300",
      name: "Low Battery",
      number: 0,
      percent: 0,
    },
  ];
  return (
    <>
      <div className="bg-white p-5 rounded-2xl">
        <p className="text-xl font-bold">Automation Health Overview</p>
        <div className="grid sm:grid-cols-[auto_1fr] gap-5 items-center text-center mt-5">
          <div className="flex justify-center sm:justify-start">
            <DonutChart
              total={automationRules.length}
              centerLabel="AutomationRules"
              sections={sectionData}
            />
          </div>
          <HealthRow data={healthRowData} />
        </div>
      </div>
    </>
  );
}
export default AutomationHealthOverview;
