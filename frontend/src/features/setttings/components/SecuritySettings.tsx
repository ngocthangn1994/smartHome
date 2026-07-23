import { FaUserLock } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { TbPasswordUser } from "react-icons/tb";
import { FaChrome } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

function SecuritySettings() {
  return (
    <>
      <div className="bg-white px-5 py-5 rounded-2xl text-slate-600">
        <div className="flex items-center gap-3">
          <FaUserLock />
          <p className="text-xl font-bold">Security Setting</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <RiLockPasswordFill className="bg-slate-100 w-8 h-8 px-1 py-1 rounded-full" />
          <div>
            <p>Change Password</p>
            <p>Update your account password</p>
          </div>
          <button className="border border-slate-200 px-2 py-2 rounded-2xl">
            Change
          </button>
        </div>
        <div className="flex items-center justify-between gap-3">
          <TbPasswordUser className="bg-slate-100 w-8 h-8 px-1 py-1 rounded-full" />
          <div>
            <p>Two-Factor Authentication</p>
            <p>Add an extra layer of security</p>
          </div>
          <button className="border border-slate-200 px-2 py-2 rounded-2xl">
            Change
          </button>
        </div>
        <p className="font-bold">Active Sessions</p>

        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-2">
            <span>
              <FaChrome className="bg-slate-100 text-slate-600 w-8 h-8 px-1 py-1 rounded-full" />
            </span>
            <div>
              <p>Chrome on macOs</p>
              <p>San Jose, CA This Device</p>
            </div>
          </div>

          <FaCircle className="text-green-600" />
        </div>

        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-2">
            <span>
              <IoMdPhonePortrait className="bg-slate-100 text-slate-600 w-8 h-8 px-1 py-1 rounded-full" />
            </span>
            <div>
              <p>Iphone 14 Pro</p>
              <p>San Jose, CA 2 hours ago</p>
            </div>
          </div>

          <FaCircle className="text-green-600" />
        </div>
      </div>
    </>
  );
}

export default SecuritySettings;
