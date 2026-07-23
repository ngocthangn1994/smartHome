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
      <div className="bg-white px-5 py-5 rounded-2xl mt-5">
        <p className="font-bold text-xl mb-5">Alert Overview</p>
        <div className="flex items-center gap-3">
          <div className="bg-green-600 rounded-full text-green-600 px-10 py-10">
            <div className="bg-white rounded-full text-green-600 px-10 py-10">
              <p className="text-3xl font-bold">26</p>
              <p>Total</p>
            </div>
          </div>
          <div>
            {overview.map((item) => (
              <div className="flex items-center gap-2">
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
