import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DevicesPage from "./features/devices/DevicesPage";
import CameraPage from "./features/cameras/CameraPage";
import AutomationPage from "./features/automations/AutomationPage";
import EnergyPage from "./features/energy/EnergyPage";
import SettingPage from "./features/setttings/SettingPage";
import SecurityPage from "./features/security/SecurityPage";
import AlertPage from "./features/alerts/AlertPage";
import HistoryPage from "./features/history/HistoryPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/devices" element={<DevicesPage />} />
          <Route path="/cameras" element={<CameraPage />} />
          <Route path="/automations" element={<AutomationPage />} />
          <Route path="/energy" element={<EnergyPage />} />
          <Route path="/alerts" element={<AlertPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/settings" element={<SettingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
