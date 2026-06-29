// import type { IDevice } from "../types";

// type Props = {
//   device: IDevice;
// };

// function DeviceSettings({ device }: Props) {
//   return (
//     <div>
//       <div className="space-y-1">
//         <SettingRow title="Name" value={device.name} />
//         <SettingRow title="Location" value={device.area} />
//         <SettingRow title="Device Type" value={device.deviceType} />
//         <SettingRow title="Entity ID" value={device.haEntityId} />
//         <SettingRow title="Reminder Management" />
//         <SettingRow title="Alert Management" />
//       </div>

//       <div className="mt-5 border-t border-slate-200 pt-5 space-y-4">
//         <ToggleRow
//           title="Notify when offline"
//           description="Send alert when this device goes offline."
//         />

//         <ToggleRow
//           title="Sync with Home Assistant"
//           description="Automatically refresh device state."
//         />

//         <ToggleRow
//           title="Show on dashboard"
//           description="Display this device on your main dashboard."
//         />
//       </div>

//       <div className="mt-6 border-t border-red-100 pt-5">
//         <button className="w-full bg-red-50 text-red-600 font-bold py-3 rounded-2xl">
//           Delete Device
//         </button>
//       </div>
//     </div>
//   );
// }

// function SettingRow({ title, value }: { title: string; value?: string }) {
//   return (
//     <button className="w-full flex justify-between items-center py-4 border-b border-slate-100 text-left">
//       <div>
//         <p className="font-bold text-lg">{title}</p>
//         {value && (
//           <p className="text-sm text-slate-500 truncate max-w-[280px]">
//             {value}
//           </p>
//         )}
//       </div>
//       <span className="text-2xl text-slate-400">›</span>
//     </button>
//   );
// }

// function ToggleRow({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) {
//   return (
//     <div className="flex justify-between gap-4">
//       <div>
//         <p className="font-bold">{title}</p>
//         <p className="text-sm text-slate-500">{description}</p>
//       </div>

//       <label className="relative inline-flex items-center cursor-pointer">
//         <input type="checkbox" className="sr-only peer" defaultChecked />
//         <div className="w-12 h-7 bg-slate-200 rounded-full peer peer-checked:bg-blue-500"></div>
//         <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-5"></div>
//       </label>
//     </div>
//   );
// }

// export default DeviceSettings;

import type { IDevice } from "../types";

type DeviceSettingsProps = {
  device: IDevice;
};

function DeviceSettings({ device }: DeviceSettingsProps) {
  return (
    <>
      <div className="space-y-5">
        <div className="flex justify-between border-b border-slate-200 items-center">
          <div className="pb-2">
            <p className="font-bold">Name</p>
            <p className="text-gray-500 text-sm">Bedroom Lamp Plug</p>
          </div>
          <p className="text-2xl text-slate-600">›</p>
        </div>
        <div className="flex justify-between border-b border-slate-200 items-center">
          <div className="pb-2">
            <p className="font-bold">Location</p>
            <p className="text-gray-500 text-sm">{device.area}</p>
          </div>
          <p className="text-2xl text-slate-600">›</p>
        </div>
        <div className="flex justify-between border-b border-slate-200 items-center">
          <div className="pb-2">
            <p className="font-bold">Device Type</p>
            <p className="text-gray-500 text-sm">{device.deviceType}</p>
          </div>
          <p className="text-2xl text-slate-600">›</p>
        </div>
        <div className="flex justify-between border-b border-slate-200 items-center">
          <div className="pb-2">
            <p className="font-bold">Entity ID</p>
            <p className="text-gray-500 text-sm">{device.haEntityId}</p>
          </div>
          <p className="text-2xl text-slate-600">›</p>
        </div>
        <div className="flex justify-between border-b border-slate-200 items-center">
          <div>
            <p className="font-bold">Reminder Management</p>
          </div>
          <div>
            <p className="text-2xl text-slate-600">›</p>
          </div>
        </div>
        <div className="flex justify-between border-b border-slate-200 items-center">
          <div>
            <p className="font-bold">Alert Management</p>
          </div>
          <div>
            <p className="text-2xl text-slate-600">›</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-black font-bold">Notify when offline</p>
            <p className="text-sm text-gray-500">
              Send alert when this device goes offiline
            </p>
          </div>
          <button className="bg-blue-500 rounded-2xl text-white font-semibold px-2 py-1">
            ON
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-black font-bold">Sync with Home Assistant</p>
            <p className="text-sm text-gray-500">
              Automatically refresh device state
            </p>
          </div>
          <button className="bg-blue-500 rounded-2xl text-white font-semibold px-2 py-1">
            ON
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-black font-bold">Show on dashboard</p>
            <p className="text-sm text-gray-500">
              Display this device on your main dashboard
            </p>
          </div>
          <button className="bg-blue-500 rounded-2xl text-white font-semibold px-2 py-1">
            ON
          </button>
        </div>
        <div className="bg-red-100 text-center rounded-2xl px-2 py-2 ring-1 ring-red-200 hover:ring-red-200 hover:bg-red-200">
          <button className="text-red-600 font-bold">Delete Device</button>
        </div>
      </div>
    </>
  );
}
export default DeviceSettings;
