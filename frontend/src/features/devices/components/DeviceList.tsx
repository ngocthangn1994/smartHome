import Device from "./Device";
import type { IDevice } from "../../../types";
import { useState } from "react";
interface DeviceListProp {
  devices: IDevice[];
}

function DeviceList({ devices }: DeviceListProp) {
  const [currentPage, setCurrentPage] = useState(1);
  const devicesPerPage = 8;
  const totalPages = Math.ceil(devices.length / devicesPerPage);
  const startIndex = (currentPage - 1) * devicesPerPage;
  const endIndex = startIndex + devicesPerPage;
  const currentDevices = devices.slice(startIndex, endIndex);
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <div className="text-slate-600">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-3">
          {currentDevices.map((device) => (
            <Device device={device} />
          ))}
        </div>
        <div className="flex gap-3 mt-5 items-center">
          <p>
            Showing:
            {startIndex + 1} - {endIndex} : {devices.length}
          </p>
          <button
            onClick={() => handlePrevious()}
            disabled={currentPage === 1}
            className="text-blue-600"
          >
            Previous
          </button>
          <button
            onClick={() => handleNext()}
            className="text-blue-600"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default DeviceList;
