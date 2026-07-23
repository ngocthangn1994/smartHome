import { SiAccuweather } from "react-icons/si";
import { WiHumidity } from "react-icons/wi";

function SuggestedAutomation() {
  const suggestedAutomation = [
    {
      icon: (
        <SiAccuweather className="text-green-600 bg-green-200 rounded-full h-8 w-8 px-1 py-1" />
      ),
      name: "Weather Response",
      message: "Ajust actions based on weather changes",
    },
    {
      icon: (
        <WiHumidity className="text-blue-600 bg-blue-200 rounded-full h-8 w-8 px-1 py-1" />
      ),
      name: "Humudity Control",
      message: "Automatically manage humidity for comfort",
    },
  ];
  return (
    <>
      <div className="bg-white px-3 py-3 rounded-2xl space-y-3">
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl">Suggested Automations</p>
          <p className="text-blue-600">View All</p>
        </div>
        <div className="space-y-3">
          {suggestedAutomation.map((item) => (
            <div className="flex justify-between items-center border border-slate-200 rounded-2xl px-2 py-2">
              <div className="flex items-center gap-3">
                <p>{item.icon}</p>
                <div>
                  <p>{item.name}</p>
                  <p>{item.message}</p>
                </div>
              </div>
              <div>
                <button className="border border-blue-100 px-5 py-2 rounded-2xl text-blue-600 font-bold ring-1 ring-blue-200">
                  Use
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SuggestedAutomation;
