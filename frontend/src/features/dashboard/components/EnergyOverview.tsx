import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", usage: 3 },
  { day: "Tuesday", usage: 4 },
  { day: "Wednesday", usage: 6 },
  { day: "Thursday", usage: 5 },
  { day: "Friday", usage: 12 },
  { day: "Saturday", usage: 7 },
  { day: "Sunday", usage: 5 },
];
const EnergyOverview = () => {
  return (
    <div className="w-full border border-slate-100 shadow-sm px-5 py-3 bg-white rounded-2xl space-y-3">
      <div className="flex justify-between items-center">
        <p className="text-slate-900 font-bold text-xl">Energy Overview</p>
        <select className="border border-slate-200 rounded-2xl px-2 py-2">
          <option>This Week</option>
          <option>Last Week</option>
        </select>
      </div>
      <div className="flex gap-15 items-center">
        <div>
          <div className="flex gap-3 items-center font-bold">
            <p className="text-2xl text-green-600">12.4 </p>
            <p>kWh</p>
          </div>
          <p className="text-slate-600">Total Usage</p>
        </div>
        <div>
          <p className="text-2xl text-green-600 font-bold">-8%</p>
          <p className="text-slate-600">vs last week</p>
        </div>
      </div>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" axisLine={false} />
            <YAxis dataKey="usage" unit=" kWh" axisLine={false} />
            <Line
              type="monotone"
              dataKey="usage"
              stroke="#4f46e5"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EnergyOverview;
