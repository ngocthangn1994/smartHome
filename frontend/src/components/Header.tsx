import { useAuth } from "../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();
  const initialUser = user?.name?.trim()?.[0]?.toUpperCase() ?? "U";
  return (
    <>
      <header className="mx-auto w-full max-w-7xl px-5 py-5">
        <div className="relative bg-slate-900 border border-slate-900 text-white px-5 py-5 rounded-2xl shadow-xl flex justify-between hover:border-slate-1200">
          <div>
            <div className="flex gap-3 items-center bg-white/10 max-w-sm rounded-[2rem] py-2 px-1">
              <div className="text-center">
                <span className="h-8 w-8 bg-white rounded-full px-1 py-1">
                  🏡
                </span>
              </div>
              <h3 className="font-semibold text-xl">Smart Home Dashboard</h3>
            </div>
            <div className="max-w-lg">
              <h3 className="text-4xl font-bold">
                Control your smart home devices in one place
              </h3>
              <p>Monitor devices, control automation, detect all alerts.</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-[2rem] px-5 py-5 w-sm max-w-sm flex justify-center items-center">
            <div className="bg-white/12 rounded-[2rem] w-lg py-7">
              <div className="flex gap-3 justify-center items-center">
                <span className="bg-blue-500 px-3 py-2 rounded-full font-bold">
                  {initialUser}
                </span>
                <p>Guest User</p>
                <button
                  onClick={logout}
                  className="text-black bg-white px-2 py-2 rounded-2xl font-semibold border border-slate-300 hover:border-slate-900"
                >
                  Log Out
                </button>
              </div>
              <div className="text-center mt-2">
                <p>{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

// import { useAuth } from "../context/AuthContext";

// function Header() {
//   const { user, logout } = useAuth();

//   const userInitial = user?.name?.charAt(0).toUpperCase() || "U";

//   return (
//     <header className="mx-auto mt-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
//       <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/30">
//         {/* Background effects */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-900 to-cyan-500/10" />
//         <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
//         <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

//         <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
//           {/* Left content */}
//           <div className="text-white">
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-slate-200 backdrop-blur">
//               <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm">
//                 🏠
//               </span>
//               Smart Home Dashboard
//             </div>

//             <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
//               Control your smart home from one place.
//             </h1>

//             <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
//               Monitor devices, manage automation, and review safety alerts from
//               one clean dashboard.
//             </p>

//             <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold text-slate-200">
//               <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">
//                 Live monitoring
//               </span>
//               <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">
//                 Automation ready
//               </span>
//               <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">
//                 Secure access
//               </span>
//             </div>
//           </div>

//           {/* User card only */}
//           <div className="w-full">
//             <div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur">
//               <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 p-4">
//                 <div className="flex min-w-0 items-center gap-3">
//                   <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-sm font-bold text-white shadow-sm shadow-blue-600/30">
//                     {userInitial}
//                   </div>

//                   <div className="min-w-0">
//                     <p className="truncate text-sm font-bold text-white">
//                       {user?.name || "Guest User"}
//                     </p>
//                     <p className="truncate text-xs text-slate-300">
//                       {user?.email || "No email available"}
//                     </p>
//                   </div>
//                 </div>

//                 <button
//                   type="button"
//                   onClick={() => void logout()}
//                   className="shrink-0 rounded-xl border border-white/10 bg-white px-4 py-2 text-sm font-bold text-slate-800 shadow-sm transition hover:bg-slate-100 active:scale-95"
//                 >
//                   Log out
//                 </button>
//               </div>

//               <p className="mt-3 text-center text-xs font-medium text-slate-300">
//                 Welcome back. Your smart home is ready.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
