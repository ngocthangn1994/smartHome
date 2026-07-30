import { CiCirclePlus } from "react-icons/ci";
import { LuAlarmSmoke } from "react-icons/lu";
import { FaWalking } from "react-icons/fa";
import { RiExchangeFill } from "react-icons/ri";
import { FaTemperatureFull } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";
import { FaPowerOff } from "react-icons/fa";
import { TiBell } from "react-icons/ti";
import api from "../../../api/api";
import { MdDevicesOther } from "react-icons/md";

import type {
  IAutomationRule,
  TriggerType,
  ActionType,
  IDevice,
} from "../../../types";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
interface AddNewAutomationRule {
  name: string;
  triggerType: TriggerType | "";
  actionType: ActionType | "";
  triggerDevice: string;
  actionDevice: string;
}
interface AddNewAutomationRuleProp {
  onClose: () => void;
}

function AddNewAutomationRule({ onClose }: AddNewAutomationRuleProp) {
  const [devices, setDevices] = useState<IDevice[]>();
  const [selectedTrigger, setSelectedTrigger] = useState<string | null>(null);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [onSubmit, setOnSubmit] = useState(null);
  const [error, setError] = useState("");
  const { user } = useAuth();

  const [formData, setFormData] = useState<AddNewAutomationRule>({
    name: "",
    triggerType: "",
    actionType: "",
    triggerDevice: "",
    actionDevice: "",
  });
  const triggerTypeDevice = [
    {
      icon: <LuAlarmSmoke className="w-8 h-8 p-1 rounded-xl text-blue-600" />,
      name: "Smoke Detected",
      value: "smoke_detected",
    },
    {
      icon: <FaWalking className="w-8 h-8 p-1 rounded-xl text-green-600" />,
      name: "Motion Detected",
      value: "motion_detected",
    },
    {
      icon: (
        <RiExchangeFill className="w-8 h-8 p-1 rounded-xl text-purple-600" />
      ),
      name: "State Change",
      value: "state_change",
    },
    {
      icon: (
        <FaTemperatureFull className="w-8 h-8 p-1 rounded-xl text-orange-600" />
      ),
      name: "Temperature",
      value: "temperature",
    },
    {
      icon: <CiTimer className="w-8 h-8 p-1 rounded-xl text-blue-600" />,
      name: "Time",
      value: "time",
    },
  ];

  const chooseActionType = [
    {
      icon: <FaPowerOff className="text-green-600 w-5 h-5" />,
      name: "Turn On",
      value: "turn_on",
    },
    {
      icon: <FaPowerOff className="text-slate-600 w-5 h-5" />,
      name: "Turn Off",
      value: "turn_off",
    },
    {
      icon: <FaTemperatureFull className="text-red-600 w-5 h-5" />,
      name: "Set Temperarure",
      value: "set_temperature",
    },
    {
      icon: <TiBell className="text-yellow-600 w-5 h-5" />,
      name: "Send Alert",
      value: "send_alert",
    },
  ];

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleTriggerType = (trigger: TriggerType) => {
    setFormData((previous) => ({
      ...previous,
      triggerType: trigger,
    }));
  };
  const handleActionType = (action: ActionType) => {
    setFormData((previous) => ({
      ...previous,
      actionType: action,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      setError("Missing the name of automation rule.");
      return;
    }
    if (!formData.triggerType) {
      setError("Missing the Trigger Type of automation rule.");
      return;
    }
    if (!formData.triggerDevice) {
      setError("Missing the Trigger Device of automation rule.");
      return;
    }
    if (!formData.actionDevice) {
      setError("Missing the action device of automation rule.");
      return;
    }
    if (!formData.actionType) {
      setError("Missing the action type of automation rule.");
      return;
    }
    try {
      const newRule: Partial<IAutomationRule> = {
        name: formData.name.trim(),
        triggerType: formData.triggerType,
        actionType: formData.actionType,
        triggerDevice: formData.triggerDevice,
        actionDevice: formData.actionDevice,
      };
      await api.createAutomationRule(newRule);
      onClose();
    } catch (error) {
      setError("Sth wrong can't create the automative Rule");
    }
  };
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await api.getDevices();
        setDevices(response.data);
      } catch (error) {
        console.error(error);
        setError("Can't load the devices.");
      }
    };

    fetchDevices();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 text-slate-600">
          <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-400 bg-white px-5 py-5">
            <div className="border-bottom border-slate-200 mb-5 space-y-3">
              <div className="flex justify-between items-center">
                <CiCirclePlus className="w-10 h-10 p-1 rounded-full bg-sky-100 rounded-xl text-blue-600" />
                <div className="flex items-center ">
                  <div className="flex items-center gap-3">
                    <MdDevicesOther className="h-8 w-8 text-blue-600" />
                    <div>
                      <p className="text-xl font-bold">Add New Automation</p>
                      <p className="text-slate-500">
                        Create a smart rule for your home
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => onClose()}
                    className="font-bold text-xl bg-sky-100 p-2 rounded-full"
                  >
                    X
                  </button>
                </div>
              </div>

              <div className="border border-slate-300 px-2 py-2 rounded-xl">
                <div className="flex justify-between font-medium">
                  <p>Automation Name</p>
                  <p>Enable Automation</p>
                </div>
                <div className="flex justify-between items-center">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g Good morning Routines"
                    className="outline-none border w-xs px-2 py-1 rounded-xl border-slate-300"
                  />
                  <div className="flex justify-between bg-green-600 rounded-full overflow-hidden px-1 py-1">
                    <div className="px-2 py-2 "></div>
                    <span className="bg-white px-2 py-2 rounded-full"></span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-medium">Choose Trigger Type</p>
                <div className="grid grid-cols-5 text-center gap-3">
                  {triggerTypeDevice.map((item) => {
                    const isSelected = formData.triggerType === item.value;
                    return (
                      <>
                        <button
                          key={item.value}
                          value={item.value}
                          type="button"
                          onClick={() =>
                            handleTriggerType(item.value as TriggerType)
                          }
                          className={`border border-slate-200 px-3 py-2 flex flex-col justify-center items-center rounded-xl ${isSelected ? "ring-1 ring-blue-600" : "ring-1 ring-slate-200"} `}
                        >
                          <span>{item.icon}</span>
                          <p className="font-medium text-xs">{item.name}</p>
                        </button>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-medium">Choose Action Type</p>
                <div className="grid grid-cols-4 text-center gap-3">
                  {chooseActionType.map((item) => {
                    const isSelected = formData.actionType === item.value;

                    return (
                      <>
                        <button
                          key={item.value}
                          value={item.value}
                          type="button"
                          onClick={() =>
                            handleActionType(item.value as ActionType)
                          }
                          className={`border border-slate-200 px-3 py-2 flex flex-col justify-center items-center rounded-xl ${isSelected ? "ring-1 ring-blue-600" : "ring-1 ring-slate-200"} `}
                        >
                          <span>{item.icon}</span>
                          <p className="font-medium text-xs">{item.name}</p>
                        </button>
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="grid grid-cols-2 space-y-3">
                <div>
                  <label className="font-medium">Trigger Device</label>
                  <select
                    name="triggerDevice"
                    value={formData.triggerDevice}
                    onChange={handleInputChange}
                    className="mt-1 flex border border-slate-200 rounded-xl items-center px-3 text-xs py-2"
                  >
                    <option value="">Select trigger device</option>
                    {devices?.map((item) => (
                      <option
                        value={item.name}
                        key={item._id}
                        className="text-sm"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-medium">Action Device</label>

                  <select
                    name="actionDevice"
                    value={formData.actionDevice}
                    onChange={handleInputChange}
                    className="mt-1 flex border border-slate-200 rounded-xl items-center px-3 text-xs py-2"
                  >
                    <option value="">Select action device</option>
                    {devices?.map((item) => (
                      <option
                        value={item.name}
                        key={item._id}
                        className="text-sm"
                      >
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="border px-3 py-2 rounded-xl border-slate-200 text-slate-900 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border px-3 py-2 rounded-xl border-slate-200 font-medium bg-blue-600 text-white"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </>
  );
}

export default AddNewAutomationRule;
