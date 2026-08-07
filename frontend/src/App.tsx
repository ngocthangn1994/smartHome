import Dashboard from "../src/features/dashboard/pages/Dashboard";
import Login from "../src/features/auth/pages/Login";
import Register from "../src/features/auth/pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DevicesPage from "../src/features/devices/pages/DevicesPage";
import CameraPage from "../src/features/devices/pages/DevicesPage";
import AutomationPage from "../src/features/automations/pages/AutomationPage";
import EnergyPage from "./features/energy/EnergyPage";
import SettingPage from "../src/features/setttings/pages/SettingPage";
import SecurityPage from "../src/features/security/pages/SecurityPage";
import AlertPage from "../src/features/alerts/pages/AlertPage";
import HistoryPage from "../src/features/history/pages/HistoryPage";
import ProtectedRoute from "../src/components/routing/ProtectedRoute";
import Homepage from "./pages/HomePage/HomePage";
import Features from "../src/pages/FeaturePage/Features";
import About from "./pages/About/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/devices"
            element={
              <ProtectedRoute>
                <DevicesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cameras"
            element={
              <ProtectedRoute>
                <CameraPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/automations"
            element={
              <ProtectedRoute>
                <AutomationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/energy"
            element={
              <ProtectedRoute>
                <EnergyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="alerts"
            element={
              <ProtectedRoute>
                <AlertPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="security"
            element={
              <ProtectedRoute>
                <SecurityPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="history"
            element={
              <ProtectedRoute>
                <HistoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedRoute>
                <SettingPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
