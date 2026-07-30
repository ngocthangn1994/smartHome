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
      <div className="bg-white px-5 py-5 rounded-2xl text-slate-600 flex flex-col justify-between">
        <p className="font-bold text-xl">Profile Information</p>
        <div className="flex items-center gap-5 ">
          <div>
            <RxAvatar className="w-30 h-30" />
          </div>
          <div>
            <p>Full Name</p>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="font-medium outline-none"
              placeholder={name}
            />
            <p>Email Address</p>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="font-medium outline-none"
              placeholder={email}
            />
            <p>Phone Number</p>
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="font-medium outline-none"
              placeholder={phone}
            />
          </div>
        </div>
        <div>
          <p>Timezone</p>
          <select className="border px-2 py-2 rounded-2xl">
            <option className="font-medium">
              (GMT-7) Pacific Time (US & Canada)
            </option>
          </select>
        </div>
        <div>
          <p>Language</p>
          <select className="border px-2 py-2 rounded-2xl">
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
