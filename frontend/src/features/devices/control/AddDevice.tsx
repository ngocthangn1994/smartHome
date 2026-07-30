import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import smartLightImage from "../../../assets/smarthome_smartlight.png";
import smartPlugImage from "../../../assets/smarthome_smartplug.png";
import smartDoorLockImage from "../../../assets/smarthome_doorlock.png";
import smartSmokeDetectorImage from "../../../assets/smarthome_smoke_detector.png";
import smartWaterLeakSensorImage from "../../../assets/smarthome_waterleaksensor.png";
import smartMotionSensorImage from "../../../assets/smarthome_motionsensor.png";
import smartWindowSensorImage from "../../../assets/smarthome_windowsensor.png";
import smartGarageImage from "../../../assets/smarthome_garage.png";
import smartCameraImage from "../../../assets/smarthome_camera.png";
import smartDoorBellImage from "../../../assets/smartHome_doorBell.png";
import smartThermostatImage from "../../../assets/smartHome_thermostat.png";
import AddDeviceDetail from "./AddDeviceDetail";
import type { DeviceType } from "../../../types";
interface AddDeviceProps {
  onClose: () => void;
}

interface DeviceOption {
  image: string;
  name: string;
  deviceType: DeviceType;
}
function AddDevice({ onClose }: AddDeviceProps) {
  const [selectedDevice, setSelectedDevice] = useState<DeviceOption | null>(
    null,
  );
  const [showDetail, setShowDetail] = useState(false);
  if (showDetail && selectedDevice) {
    return (
      <AddDeviceDetail
        deviceType={selectedDevice?.deviceType}
        selectedDevice={selectedDevice?.name}
        onClose={() => setShowDetail(false)}
      />
    );
  }
  const listDevice: DeviceOption[] = [
    {
      image: smartLightImage,
      name: "Smart Light",
      deviceType: "smart_light",
    },
    {
      image: smartCameraImage,
      name: "Camera",
      deviceType: "camera",
    },
    {
      image: smartThermostatImage,
      name: "Thermostat",
      deviceType: "thermostat",
    },
    {
      image: smartPlugImage,
      name: "Smart Plug",
      deviceType: "smart_plug",
    },
    {
      image: smartDoorLockImage,
      name: "Door Lock",
      deviceType: "door_lock",
    },
    {
      image: smartGarageImage,
      name: "Garage Door",
      deviceType: "garage_door",
    },
    {
      image: smartSmokeDetectorImage,
      name: "Smoke Detector",
      deviceType: "smoke_detector",
    },
    {
      image: smartWaterLeakSensorImage,
      name: "Water Leak Sensor",
      deviceType: "water_leak_sensor",
    },
    {
      image: smartMotionSensorImage,
      name: "Motion Sensor",
      deviceType: "motion_sensor",
    },
    {
      image: smartWindowSensorImage,
      name: "Window Sensor",
      deviceType: "window_sensor",
    },
    {
      image: smartDoorBellImage,
      name: "Door Bell",
      deviceType: "door_bell",
    },
  ];
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 text-slate-600">
        <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-400 bg-white px-5 py-5">
          <div className="border-bottom border-slate-200 mb-5">
            <div className="flex items-center gap-3 justify-between">
              <CiCirclePlus className="bg-slate-200 w-10 h-10 text-blue-600 p-1 rounded-xl" />
              <div>
                <p className="text-2xl font-bold">📱Add New Device</p>
                <p className="text-slate-400">
                  Connect a new smart device to your home
                </p>
              </div>
              <button
                onClick={() => onClose()}
                className="bg-sky-100 p-3 rounded-full font-bold text-xl"
              >
                X
              </button>
            </div>
            <div className="flex items-center justify-center gap-3 mt-3">
              <span className="p-2 border border-slate-200 bg-blue-600 text-white rounded-full">
                1
              </span>
              <div className="w-1/2 border borders-slate-200"></div>
              <span className="p-2 border border-slate-200 rounded-full">
                2
              </span>
            </div>
          </div>
          <div>
            <p className="font-bold">Choose Device Type</p>
            <p className="text-slate-400">
              Select the type of device you want to add
            </p>
          </div>
          <div className="border border-slate-200 p-5 rounded-xl shadow-sm grid grid-cols-3 gap-3 mt-3">
            {listDevice.map((item) => {
              const isSelected = selectedDevice?.deviceType === item.deviceType;

              return (
                <button
                  key={item.deviceType}
                  type="button"
                  onClick={() => setSelectedDevice(item)}
                  className={`flex flex-col items-center p-2 border rounded-xl transition-all
          ${
            isSelected
              ? "border-blue-500 ring-2 ring-blue-200 shadow-md"
              : "border-slate-200 bg-white shadow-sm hover:border-blue-300 hover:shadow-lg"
          }
        `}
                >
                  <img
                    className="w-12 h-12 object-contain"
                    src={item.image}
                    alt={item.name}
                  />

                  <p
                    className={`font-medium ${
                      isSelected ? "text-blue-700" : "text-slate-600"
                    }`}
                  >
                    {item.name}
                  </p>
                </button>
              );
            })}
          </div>
          <div className="flex mt-5 gap-3 justify-end">
            <button
              onClick={() => onClose()}
              className="px-10 py-2 rounded-2xl border border-slate-200 rouned-2xl"
            >
              Cancel
            </button>
            <button
              onClick={() => setShowDetail(true)}
              className="px-10 py-2 bg-blue-600 text-white border border-slate-200 rounded-2xl"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddDevice;
