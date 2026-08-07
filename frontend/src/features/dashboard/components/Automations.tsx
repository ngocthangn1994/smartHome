import type { IAutomationRule } from "../../../types";

interface AutomationProps {
  automationRules: IAutomationRule[];
}

function Automation({ automationRules }: AutomationProps) {
  const iconTriggerType = {
    smoke_detected: "🔥",
    motion_detected: "🥷🏻",
    state_change: "🏘️",
    temperature: "❄️",
    time: "🕰️",
  };
  return (
    <>
      <div className="w-full border border-slate-200 rounded-2xl px-5 bg-white shadow-sm text-slate-600 px-5 py-8">
        <div className="flex justify-between">
          <p className="text-xl font-bold">Automations</p>
          <p className="text-blue-600 font-semibold">View All</p>
        </div>
        <div className="space-y-5">
          {automationRules.map((automationRule) => (
            <div className="flex justify-between items-center mt-5">
              <div className="flex gap-5 items-center">
                <span className="bg-orange-50 px-1 py-1 rounded-full">
                  {iconTriggerType[automationRule.triggerType]}
                </span>
                <div>
                  <p className="font-semibold">{automationRule.name}</p>
                  <p></p>
                </div>
              </div>
              <button className="w-10 h-6 bg-blue-600 rounded-2xl px-1">
                <div className="w-4 h-4 rounded-full bg-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Automation;
