import { CiCirclePlus } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { SiZigbee } from "react-icons/si";
import { FaBluetooth } from "react-icons/fa";
import { SiMatternet } from "react-icons/si";
import { MdPhotoCamera } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { MdOnDeviceTraining } from "react-icons/md";
import { useState } from "react";
import api from "../../../api/api";
import type { DeviceType, ConnectionMethod } from "../../../types";
interface AddDeviceDetailProps {
  onClose: () => void;
  selectedDevice: string | null;
  deviceType: DeviceType;
}
interface AddDeviceFormData {
  name: string;
  area: string;
  brand: string;
  modelDevice: string;
  connectionMethod: ConnectionMethod | "";
  ipAddress: string;
  macAddress: string;
  image: File | null;
  description: string;
}
function AddDeviceDetail({
  onClose,
  selectedDevice,
  deviceType,
}: AddDeviceDetailProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [formData, setFormData] = useState<AddDeviceFormData>({
    name: selectedDevice ?? "",
    area: "Living Room",
    brand: "",
    modelDevice: "",
    connectionMethod: "",
    ipAddress: "",
    macAddress: "",
    description: "",
    image: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const area = [
    { name: "Living Room" },
    { name: "Kitchen" },
    { name: "Hallway" },
    { name: "Backyard" },
    { name: "Garage" },
    { name: "Front House" },
    { name: "Side House" },
  ];
  const connnectionMethodList = [
    { icon: <FaWifi />, name: "wifi" },
    { icon: <SiZigbee className="text-red-600" />, name: "zigbee" },
    { icon: <FaBluetooth className="text-blue-600" />, name: "bluetooth" },
    { icon: <SiMatternet className="text-slate-900" />, name: "matthernet" },
  ];

  const handleConnectionMethod = (method: ConnectionMethod) => {
    setFormData((previous) => ({
      ...previous,
      connectionMethod: method,
    }));
  };
  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const name = (
      event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    ).name;
    const value = (
      event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    ).value;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!formData.name) {
      setError("Missing Device Name");
      return;
    }
    if (!formData.area) {
      setError("Missing device Area");
      return;
    }
    if (!formData.connectionMethod) {
      setError("Missing connnection Method");
      return;
    }
    try {
      setIsSubmitting(true);
      const deviceData = {
        name: formData.name.trim(),
        home: "665f1b8d2f4c3a0012ab1234",
        deviceType,
        status: "offline" as const,
        area: formData.area,

        haEntityId: `${deviceType}.${formData.name
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "_")}`,

        brand: formData.brand.trim() || undefined,
        modelDevice: formData.modelDevice.trim() || undefined,
        connectionMethod: formData.connectionMethod,
        ipAddress: formData.ipAddress.trim() || undefined,
        macAddress: formData.macAddress.trim() || undefined,
        description: formData.description.trim() || undefined,
      };

      console.log(
        "Submitting full device:",
        JSON.stringify(deviceData, null, 2),
      );

      const response = await api.createDevice(deviceData);
      console.log("Device created:", response.data);
      onClose();
    } catch (error) {
      console.error(error);
      setError("Unable to add the device. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 text-slate-600 text-slate-600">
          <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-400 bg-white px-5 py-5">
            <div className="border-bottom border-slate-200 mb-5">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <CiCirclePlus className="w-10 h-10 p-1 bg-sky-50 rounded-xl text-blue-600" />
                  <div>
                    <p className="text-xl font-bold">Add New Device</p>
                    <p className="text-slate-500">
                      Connect a new smart device to your home
                    </p>
                  </div>
                </div>
                <button className="text-xl font-bold" onClick={() => onClose()}>
                  X
                </button>
              </div>
              <div className="flex items-center justify-center gap-3 mt-3">
                <span className="p-2 border border-slate-200 bg-blue-600 text-white rounded-full">
                  <FaCheck />
                </span>
                <div className="w-1/2 border borders-slate-200"></div>
                <span className="p-2 border border-slate-200 rounded-full bg-blue-600 text-white">
                  2
                </span>
              </div>
            </div>
            <div>
              <p className="font-bold">Device Details</p>
              <p className="text-slate-500">
                Enter the information about your device.
              </p>
            </div>
            <div className="w-full mt-3 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold">Device Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Living room Light"
                    className="px-2 w-full border py-1 rounded-xl border-slate-200 outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold">Room *</label>

                  <select
                    name="area"
                    value={formData.area}
                    onChange={handleInputChange}
                    className="w-full border py-1 rounded-xl border-slate-200 px-2 outline-none"
                  >
                    {area.map((item) => (
                      <option key={item.name} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold">Brand(Optional)</label>
                  <input
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    placeholder="Philips"
                    className="px-2 w-full border py-1 rounded-xl border-slate-200 outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold">Model(Optional)</label>
                  <input
                    name="modelDevice"
                    value={formData.modelDevice}
                    onChange={handleInputChange}
                    placeholder="Hue White A19"
                    className="px-2 w-full border py-1 rounded-xl border-slate-200 outline-none"
                  />
                </div>
              </div>
              <div>
                <p>Connection Method*</p>
                <div className="grid grid-cols-4 gap-3">
                  {connnectionMethodList.map((item) => {
                    const isSelected = formData.connectionMethod === item.name;
                    return (
                      <button
                        type="button"
                        key={item.name}
                        onClick={() =>
                          handleConnectionMethod(item.name as ConnectionMethod)
                        }
                        className={`flex items-center gap-1 bg-sky-50 justify-center rounded-xl py-2 ${isSelected ? "ring-1 ring-blue-600" : "border border-slate-300"}`}
                      >
                        <span>{item.icon}</span>
                        <p>{item.name}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold">IP Address(Optional)</label>
                  <input
                    name="ipAddress"
                    value={formData.ipAddress}
                    onChange={handleInputChange}
                    placeholder="192.168.1.25"
                    className="px-2 w-full border py-1 rounded-xl border-slate-200 outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold">MAC Address(Optional)</label>
                  <input
                    name="macAddress"
                    value={formData.macAddress}
                    onChange={handleInputChange}
                    placeholder="00:11:22:33:44:55"
                    className="px-2 w-full border py-1 rounded-xl border-slate-200 outline-none"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold">Device Image (Optional)</label>

                  <label className="block cursor-pointer rounded-xl border border-slate-200 px-2 py-5">
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      className="hidden"
                      onChange={(event) => {
                        const selectedFile = event.target.files?.[0] ?? null;

                        setFormData((previous) => ({
                          ...previous,
                          image: selectedFile,
                        }));
                      }}
                    />

                    <div className="flex flex-col items-center justify-center space-y-1">
                      <MdPhotoCamera className="h-12 w-12 rounded-full border border-slate-300 p-2" />

                      <p className="text-slate-500">
                        {formData.image ? formData.image.name : "Upload Image"}
                      </p>

                      <p className="text-slate-400">JPG, PNG up to 2MB</p>
                    </div>
                  </label>
                </div>
                <div>
                  <label className="font-bold">Description(Optional)</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="00:11:22:33:44:55"
                    className="px-2 w-full border py-2 rounded-xl border-slate-200 outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 flex justify-between">
              <div className="px-5 py-2 border border-slate-200 rounded-xl flex items-center gap-1">
                <FaArrowLeft />
                <p className="font-bold">Back</p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-1 px-7 py-2 border border-slate-200 rounded-xl bg-blue-600 text-white"
              >
                <MdOnDeviceTraining />
                <p>Add Device</p>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddDeviceDetail;
