import { useEffect, useState } from "react";
import api from "../../../api/api";
import Header from "../../../components/layout/Header";
import SummaryDevices from "../../dashboard/components/SummaryDevices";
import SideBarHelper from "../../../components/layout/SideBarHelper";
import { useAuth } from "../../../context/AuthContext";
import type { IAutomationRule, IDevice } from "../../../types";
import AutomationMenu from "../../../features/automations/components/AutomationMenu";
import AutomationList from "../../../features/automations/components/AutomationList";
import AutomationHealthOverview from "../../automations/components/AutomationHealthOverView";
import RecentActivity from "../components/RecentActivity";
import SuggestedAutomation from "../components/SuggestedAutomation";
import QuickActions from "../components/QuickActions";
function AutomationPage() {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [automationRules, setAutomationRules] = useState<IAutomationRule[]>([]);

  const { user } = useAuth();

  useEffect(() => {
    async function loadData() {
      try {
        const [devicesResponse, automationResponse] = await Promise.all([
          api.getDevices(),
          api.getAutomationRules(),
          api.getAlerts(),
        ]);

        setDevices(devicesResponse.data ?? []);
        const automationData = automationResponse.data;
        if (Array.isArray(automationData)) {
          setAutomationRules(automationData);
        } else if (automationData) {
          setAutomationRules([automationData]);
        } else {
          setAutomationRules([]);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, []);

  const handleDelete = async (id: string) => {
    await api.deleteAutomationById(id);
    setAutomationRules((previous) =>
      previous.filter((rule) => rule._id !== id),
    );
    console.log("Successfully delete automationRule by ID");
  };
  return (
    <>
      <div className="w-screen min-h-screen grid grid-cols-[0.3fr_1.7fr] bg-indigo-50">
        <div>
          <SideBarHelper />
        </div>
        <div className="bg-indigo-50 px-10 py-10">
          <Header user={user} page="automations" />
          <SummaryDevices devices={devices} />
          <AutomationMenu />
          <div className="grid grid-cols-[1.5fr_0.5fr] mt-5 gap-5">
            <div>
              <AutomationList
                automationRules={automationRules}
                handleDelete={handleDelete}
              />
            </div>
            <div className="space-y-3">
              <AutomationHealthOverview automationRules={automationRules} />
              <RecentActivity />
              <SuggestedAutomation />
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AutomationPage;
