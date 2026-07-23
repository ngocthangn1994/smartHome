import { RxAvatar } from "react-icons/rx";

function ProfileInformation() {
  return (
    <>
      <div className="space-y-3 bg-white px-5 py-5 rounded-2xl text-slate-600">
        <p className="font-bold text-xl">Profile Information</p>
        <div className="flex items-center gap-5 ">
          <div>
            <RxAvatar className="w-30 h-30" />
          </div>
          <div>
            <p>Full Name</p>
            <p className="font-medium">Ngoc Nguyen</p>
            <p>Email Address</p>
            <p className="font-medium">ngoc.nguyen.engineer@gmail.com</p>
            <p>Phone Number</p>
            <p className="font-medium">+1 (832)-597-6062</p>
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
        <button className="w-full bg-blue-600 text-white px-2 py-2 rounded-2xl">
          Save Changes
        </button>
      </div>
    </>
  );
}

export default ProfileInformation;
