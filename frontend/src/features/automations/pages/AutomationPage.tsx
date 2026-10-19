import { useEffect, useState } from "react";
import api from "../../../api/api";
import Header from "../../../components/layout/Header";
import SummaryDevices from "../../dashboard/components/SummaryDevices";
import { useAuth } from "../../../context/AuthContext";
import type { IAutomationRule, IDevice } from "../../../types";
import AutomationMenu from "../../../features/automations/components/AutomationMenu";
import AutomationList from "../../../features/automations/components/AutomationList";
import AutomationHealthOverview from "../../automations/components/AutomationHealthOverView";
import RecentActivity from "../components/RecentActivity";
import SuggestedAutomation from "../components/SuggestedAutomation";
import QuickActions from "../components/QuickActions";
import UserHeader from "../../../components/layout/UserHeader";
import SideBarHelper from "../../../components/layout/SideBarHelper";
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
      <div className="w-full min-h-screen bg-indigo-50">
        <UserHeader />
        <div className="grid grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)]">
          <div className="hidden xl:block">
            <SideBarHelper />
          </div>
          <div className="min-w-0 bg-indigo-50 px-4 py-6 sm:px-6 lg:px-10 lg:py-10 space-y-5">
            <Header user={user} page="automations" />
            <SummaryDevices devices={devices} />
            <AutomationMenu />
            <div className="grid grid-cols-1 2xl:grid-cols-[1.2fr_0.8fr] gap-5">
              <div className="min-w-0">
                <AutomationList
                  automationRules={automationRules}
                  handleDelete={handleDelete}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-1 gap-5 h-fit">
                <AutomationHealthOverview automationRules={automationRules} />
                <RecentActivity />
                <SuggestedAutomation />
                <QuickActions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AutomationPage;
