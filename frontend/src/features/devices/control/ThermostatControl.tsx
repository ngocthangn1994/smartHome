import { useState } from "react";
import type { IDevice, HvacMode } from "../../../types";
import api from "../../../api/api";

type ThermostatControlProps = {
  device: IDevice;
  onClose: () => void;
};

function ThermostatControl({ device, onClose }: ThermostatControlProps) {
  const [targetTemp, setTargetTemp] = useState<number>(
    device.state?.targetTemperature ?? device.state?.currentTemperature ?? 72,
  );
  const [mode, setMode] = useState<HvacMode>(device.state?.hvacMode ?? "cool");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const haEntityId = device.haEntityId || device._id;

  const handleDecrease = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await api.decreaseTemperature(haEntityId);

      const newTemp =
        response.data?.state?.targetTemperature ??
        response.data?.state?.currentTemperature ??
        targetTemp - 1;

      setTargetTemp(newTemp);
    } catch (error) {
      setError("Error when trying to decrease the temperature");
    } finally {
      setLoading(false);
    }
  };

  const handleIncrease = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await api.increaseTemperature(haEntityId);

      const newTemp =
        response.data?.state?.targetTemperature ??
        response.data?.state?.currentTemperature ??
        targetTemp + 1;

      setTargetTemp(newTemp);
    } catch (error) {
      setError("Error when trying to increase the temperature");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-400 bg-white px-5 py-5">
          <div className="mb-5">
            <div className="flex justify-between items-center mb-5">
              <button
                onClick={() => onClose()}
                className="bg-blue-100 p-2 rounded-full ring-1 ring-blue-200 text-slate-900 font-bold"
              >
                X
              </button>

              <p className="text-[1.2rem] font-semibold">{device.name}</p>

              {/* Empty div keeps title centered */}
              <div className="w-8"></div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="text-center">
              <p className="font-semibold text-gray-500">{device.area}</p>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex justify-center items-center w-60 h-60 bg-blue-100 rounded-full">
                <div className="flex justify-center items-center w-50 h-50 bg-blue-50 rounded-full">
                  <div>
                    <p className="text-8xl font-bold px-5 py-5 text-sky-900">
                      {targetTemp}
                    </p>

                    <p className="text-center text-gray-500">Cooling to</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Temperature buttons */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handleDecrease}
                type="button"
                disabled={loading}
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-blue-50 text-2xl font-bold leading-none hover:bg-blue-100"
              >
                −
              </button>

              <p className="min-w-[80px] text-center text-2xl font-bold">
                {targetTemp}
              </p>

              <button
                type="button"
                onClick={handleIncrease}
                disabled={loading}
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-blue-50 text-2xl font-bold leading-none hover:bg-blue-100"
              >
                +
              </button>
            </div>

            {/* Mode */}
            <div className="bg-sky-100 px-3 py-3 rounded-2xl">
              <p className="text-gray-500 font-bold">Mode</p>

              <div className="my-2">
                <select
                  value={mode}
                  onChange={(event) => setMode(event.target.value as HvacMode)}
                  className="w-full border border-slate-200 px-2 py-2 rounded-2xl text-slate-600"
                >
                  <option value="cool">Cool</option>
                  <option value="heat">Heat</option>
                  <option value="auto">Auto</option>
                  <option value="fan_only">Fan</option>
                </select>
              </div>
            </div>

            {/* Information */}
            <div className="bg-gray-100 px-3 py-3 rounded-2xl text-gray-500 font-semibold space-y-2">
              <div className="flex justify-between">
                <p>Indoor temperature</p>

                <p className="text-black">
                  {device.state.currentTemperature ?? "--"}°F
                </p>
              </div>

              <div className="flex justify-between">
                <p>Indoor humidity</p>
                <p className="text-black">62%</p>
              </div>

              <div className="flex justify-between">
                <p>Status</p>
                <p className="text-black">{device.status}</p>
              </div>
            </div>

            {/* Error and button */}
            <div>
              {error && (
                <p className="text-sm text-center text-red-600 mb-3">{error}</p>
              )}

              <button
                type="button"
                disabled={loading}
                className="bg-blue-500 w-full rounded-2xl text-white font-semibold px-2 py-2 hover:bg-blue-600 shadow-sm hover:shadow-lg transition duration-200"
              >
                {loading ? "Updating..." : "Apply Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThermostatControl;
