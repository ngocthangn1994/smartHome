import { Funnel } from "lucide-react";

type FilterDeviceCardProps = {
  search: string;
  filter: string;
  count: number;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function FilterDeviceCard({
  search,
  setSearch,
  filter,
  setFilter,
  count,
}: FilterDeviceCardProps) {
  return (
    <>
      <div className="bg-white border border-slate-200 px-5 py-5 rounded-2xl mt-5 space-y-3">
        <div className="flex justify-between">
          <div className="inline-flex">
            <Funnel className="w-18" />
            <p className="font-bold text-xl">Filter Devices</p>
          </div>
          <p className="text-2xl font-bold bg-blue-50 px-3 py-1 rounded-full text-blue-600 ring-1 ring-blue-100 shadow-sm">
            {count}
          </p>
        </div>
        <div className="border border-slate-200 grid grid-cols-[1.2fr_0.8fr] gap-4 px-5 py-5 rounded-2xl shadow-sm">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="type device here..."
            className="border rounded-2xl border-slate-300 shadown-sm px-5 py-2 text-xl font-slate-600"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-slate-200 rounded-2xl px-5 py-2 text-slate-600 text-xl shadow-sm"
          >
            <option value="all">All Devices</option>
            <option value="thermostat">Thermostat</option>
            <option value="camera">Camera</option>
            <option value="door_bell">Door Bell</option>
            <option value="moke_detector">Smoke Detector</option>
            <option value="smart_plug">Smart Plug</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default FilterDeviceCard;
