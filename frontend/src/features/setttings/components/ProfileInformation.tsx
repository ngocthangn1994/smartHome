import { RxAvatar } from "react-icons/rx";

interface ProfileInformationProp {
  name: string;
  email: string;
  phone: string;
  onSave: () => void;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
}
function ProfileInformation({
  name,
  email,
  phone,
  onSave,
  setName,
  setEmail,
  setPhone,
}: ProfileInformationProp) {
  return (
    <>
      <div className="h-full min-w-0 bg-white p-4 sm:p-5 rounded-2xl text-slate-600 flex flex-col justify-between space-y-3">
        <p className="font-bold text-xl">Profile Information</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div>
            <RxAvatar className="w-24 h-24 sm:w-30 sm:h-30 shrink-0" />
          </div>
          <div className="w-full min-w-0 space-y-1">
            <p>Full Name</p>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full font-medium outline-none border-b border-slate-200 py-1"
              placeholder={name}
            />
            <p>Email Address</p>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full font-medium outline-none border-b border-slate-200 py-1"
              placeholder={email}
            />
            <p>Phone Number</p>
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full font-medium outline-none border-b border-slate-200 py-1"
              placeholder={phone}
            />
          </div>
        </div>
        <div>
          <p>Timezone</p>
          <select className="w-full border px-2 py-2 rounded-2xl">
            <option className="font-medium">
              (GMT-7) Pacific Time (US & Canada)
            </option>
          </select>
        </div>
        <div>
          <p>Language</p>
          <select className="w-full border px-2 py-2 rounded-2xl">
            <option className="font-medium">English (US)</option>
          </select>
        </div>
        <div>
          <button
            type="button"
            onClick={onSave}
            className="w-full bg-blue-600 text-white px-2 py-2 rounded-2xl hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileInformation;
