import { FaCircle } from "react-icons/fa";
function HistoryOverview() {
  const overview = [
    {
      icon: <FaCircle className="text-red-600" />,
      name: "Critical",
      data: "6 (23%)",
    },
    {
      icon: <FaCircle className="text-orange-600" />,
      name: "Warning",
      data: "8 (27%)",
    },
    {
      icon: <FaCircle className="text-blue-600" />,
      name: "Info",
      data: "3 (9%)",
    },
    {
      icon: <FaCircle className="text-green-600" />,
      name: "Resolved",
      data: "4 (13)%",
    },
  ];
  return (
    <>
      <div className="bg-white p-4 sm:p-5 rounded-2xl text-slate-600">
        <p className="font-bold text-xl mb-5">Alert Overview</p>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-5">
          <div className="shrink-0 bg-green-600 rounded-full text-green-600 p-4">
            <div className="bg-white rounded-full text-green-600 w-28 h-28 flex flex-col items-center justify-center">
              <p className="text-3xl font-bold">26</p>
              <p>Total</p>
            </div>
          </div>
          <div className="space-y-2">
            {overview.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-1">
                  <p>{item.icon}</p>
                  <p>{item.name}</p>
                </div>
                <p>{item.data}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryOverview;
