interface HomePreferencesProps {
  setHomeName: (value: string) => void;
  setAddress: (value: string) => void;
  homeName: string;
  address: string;
  homeSave: () => Promise<void>;
}

function HomePreferences({
  setHomeName,
  setAddress,
  homeName,
  address,
  homeSave,
}: HomePreferencesProps) {
  return (
    <>
      <div className="bg-white px-5 py-5 rounded-2xl flex flex-col justify-between space-y-3">
        <div>
          <div>
            <p className="text-xl font-bold">Home Preferences</p>
          </div>
          <label>Home Name</label>
          <div>
            <input
              value={homeName}
              onChange={(event) => setHomeName(event.target.value)}
              className="border px-5 py-2 rounded-2xl w-full outline-none"
              placeholder={homeName}
            />
          </div>
        </div>
        <div>
          <div>
            <label>Home Address</label>
          </div>
          <input
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            className="border px-5 py-2 rounded-2xl w-full outline-none"
            placeholder={address}
          />
        </div>

        <div className="flex gap-3">
          <div>
            <label>Temperature Unit</label>
            <div>
              <select className="border px-2 py-1 rounded-2xl">
                <option className="border px-2 py-2">F(Fahrenhait)</option>
              </select>
            </div>
          </div>
          <div>
            <label>Home Name</label>
            <div>
              <select className="border px-2 py-1 rounded-2xl">
                <option className="border border-slate-200 px-2 py-2">
                  kWh
                </option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-3">
            <div>
              <label>Date Format</label>
              <div>
                <select className="border px-2 py-1 rounded-2xl">
                  <option className="border px-2 py-2">MM/DD/YYYY</option>
                </select>
              </div>
            </div>
            <div>
              <label>Time Format</label>
              <div>
                <select className="border px-2 py-1 rounded-2xl">
                  <option className="border border-slate-200 px-2 py-2">
                    12-Hour(AM/PM)
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={homeSave}
            className="bg-blue-600 text-white w-full rounded-2xl px-2 py-3 hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePreferences;
