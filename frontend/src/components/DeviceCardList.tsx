import DeviceCard from "./DeviceCard";
import type { IDevice } from "../types";
import DeviceModal from "./DeviceModal";
import { useState } from "react";

type DeviceCardListProps = {
  devices: IDevice[];
};
type ModalType = "control" | "settings";

function DeviceCardList({ devices }: DeviceCardListProps) {
  const [selectedDevice, setSelectedDevice] = useState<IDevice | null>(null);
  const [modalType, setModelType] = useState<ModalType | null>();

  function onControl(device: IDevice) {
    setSelectedDevice(device);
    setModelType("control");
  }
  function onSetting(device: IDevice) {
    setSelectedDevice(device);
    setModelType("settings");
  }
  function closeModal() {
    setSelectedDevice(null);
    setModelType(null);
  }
  return (
    <>
      <div className="mb-10">
        <div className="grid lg:grid-cols-3 gap-5 mt-3">
          {devices.map((device, index) => (
            <DeviceCard
              key={`${device.name}-${index}`}
              device={device}
              onControl={onControl}
              onSettings={onSetting}
            />
          ))}
        </div>
        {selectedDevice && modalType && (
          <DeviceModal
            device={selectedDevice}
            type={modalType}
            onClose={closeModal}
          />
        )}
      </div>
    </>
  );
}
export default DeviceCardList;
