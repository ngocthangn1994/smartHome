import { useEffect, useState } from "react";
import api from "../api/api";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import DeviceCardList from "../components/DeviceCardList";
import AlertCard from "../components/AlertCard";
import type { IDevice, IHome, IAlert, IUser } from "../types";
import FilterDeviceCard from "../components/FilterDeviceCard";

function Dashboard() {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [alerts, setAlerts] = useState<IAlert[]>([]);
  const [homes, setHomes] = useState<IHome[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const filterDevies = devices.filter((device) => {
    const searchText = search.trim().toLowerCase();
    const matchSearch =
      searchText == "" || device.name.toLowerCase().includes(searchText);
    const matchFilter = filter === "all" || device.deviceType === filter;

    return matchFilter && matchSearch;
  });
  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const [devicesResponse, alertsResponse, homesResponse, usersResponse] =
          await Promise.all([
            api.getDevices(),
            api.getAlerts(),
            api.getHomes(),
            api.getUsers(),
          ]);

        setDevices(devicesResponse.data ?? []);
        setAlerts(alertsResponse.data ?? []);
        setHomes(homesResponse.data ?? []);
        setUsers(usersResponse.data ?? []);
      } catch (error) {
        console.error(error);
        setErrorMessage("Unable to load dashboard data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 pb-10">
      <Header />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {errorMessage && (
          <div className="mt-6 rounded-3xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-semibold text-rose-700">
            {errorMessage}
          </div>
        )}

        {isLoading ? (
          <DashboardSkeleton />
        ) : (
          <>
            <SummaryCard
              devices={devices}
              alerts={alerts}
              homes={homes}
              users={users}
            />
            <FilterDeviceCard
              search={search}
              filter={filter}
              setSearch={setSearch}
              setFilter={setFilter}
              count={filterDevies.length}
            />
            <section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
              {/* Left sidebar */}
              <aside className="xl:sticky xl:top-6 xl:self-start">
                <AlertCard alerts={alerts} />
              </aside>

              {/* Main devices area */}
              <section className="min-w-0">
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-50 text-lg ring-1 ring-blue-100">
                        🧩
                      </span>

                      <h2 className="text-2xl font-bold text-slate-950">
                        Devices
                      </h2>
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      Control and monitor all connected smart home devices.
                    </p>
                  </div>

                  <div className="w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500 shadow-sm">
                    {devices.length} connected devices
                  </div>
                </div>

                <DeviceCardList devices={filterDevies} />
              </section>
            </section>
          </>
        )}
      </div>
    </main>
  );
}

function DashboardSkeleton() {
  return (
    <div className="mt-6 space-y-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-28 animate-pulse rounded-[1.5rem] bg-white ring-1 ring-slate-200"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[360px_minmax(0,1fr)]">
        <div className="h-[520px] animate-pulse rounded-[2rem] bg-white ring-1 ring-slate-200" />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-[360px] animate-pulse rounded-[1.75rem] bg-white ring-1 ring-slate-200"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
