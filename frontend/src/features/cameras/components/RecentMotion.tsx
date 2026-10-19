import { FaPersonWalking, FaHouseSignal } from "react-icons/fa6";
import smarthomeCamera from "../../../assets/devices/smarthome_camera.png";
function RecentMotion() {
  const recentMotionEvent = [
    {
      src: smarthomeCamera,
      icon: (
        <FaPersonWalking className="bg-orange-100 text-yellow-600 rounded-full h-8 w-8 px-2 py-2" />
      ),
      name: "Front Door Camera",
      message: "Person Detected",
      time: "9.21 AM",
    },
    {
      src: smarthomeCamera,
      icon: (
        <FaPersonWalking className="bg-orange-100 text-yellow-600 rounded-full h-8 w-8 px-2 py-2" />
      ),
      name: "Backyard Camera",
      message: "Motion Detected",
      time: "9.21 AM",
    },
    {
      src: smarthomeCamera,
      icon: (
        <FaPersonWalking className="bg-orange-100 text-yellow-600 rounded-full h-8 w-8 px-2 py-2" />
      ),
      name: "Driveway Camera",
      message: "Vehicle Detected",
      time: "9.21 AM",
    },
    {
      src: smarthomeCamera,
      icon: (
        <FaHouseSignal className="bg-blue-100 text-blue-600 rounded-full h-8 w-8 px-2 py-2" />
      ),
      name: "Garage Camera",
      message: "Motion Detected",
      time: "9.21 AM",
    },
  ];
  return (
    <>
      <div>
        <div className="flex justify-between items-center gap-3">
          <p className="text-xl font-bold">Recent Motion Events</p>
          <p className="text-blue-600">View All</p>
        </div>
        <div className="mt-3 space-y-3">
          {recentMotionEvent.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={item.src}
                  className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 object-cover rounded-2xl"
                />
                <div className="flex gap-2 items-center min-w-0">
                  {item.icon}
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p>{item.message}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="shrink-0 whitespace-nowrap">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RecentMotion;
