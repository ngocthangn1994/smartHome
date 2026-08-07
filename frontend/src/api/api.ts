import type {
  IUser,
  IDevice,
  IHome,
  IAlert,
  ApiResponse,
  IAutomationRule,
} from "../types";

const VITE_API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3500/api";
// const VITE_API_URL =
//   import.meta.env.VITE_API_URL || "https://smarthome-avce.onrender.com/api";

export async function fetchApi<TData>(
  url: string,
  method: "GET" | "POST" | "DELETE" | "PATCH",
  body?: unknown,
  customConfig: RequestInit = {},
): Promise<ApiResponse<TData>> {
  const config: RequestInit = {
    ...customConfig,
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...customConfig.headers,
    },
    credentials: "include",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  };

  console.log("API request:", {
    url: `${VITE_API_URL}${url}`,
    method,
    body,
  });

  const response = await fetch(`${VITE_API_URL}${url}`, config);

  const responseData = await response.json().catch(() => null);

  console.log("API response:", responseData);

  if (!response.ok) {
    const errorMessage =
      responseData?.message ||
      responseData?.error ||
      responseData?.errors?.[0]?.message ||
      JSON.stringify(responseData) ||
      `API Error: ${response.status}`;

    throw new Error(errorMessage);
  }

  return responseData as ApiResponse<TData>;
}

export const api = {
  // FETCH DEVICE
  getDevices: () => fetchApi<IDevice[]>("/devices", "GET"),
  getDeviceById: (id: string) => fetchApi<IDevice>(`/devices/${id}`, "GET"),
  createDevice: (body: Partial<IDevice>) =>
    fetchApi<IDevice>(`/devices/`, "POST", body),
  deleteDevice: (id: string) => fetchApi<IDevice>(`/devices/${id}`, "DELETE"),
  updateDevice: (id: string, body: Partial<IDevice>) =>
    fetchApi<IDevice>(`/devices/${id}`, "PATCH", body),

  // Device controls
  // =====================

  increaseTemperature: (id: string) =>
    fetchApi<IDevice>(`/devices/${id}/thermostat/increase`, "PATCH"),

  decreaseTemperature: (id: string) =>
    fetchApi<IDevice>(`/devices/${id}/thermostat/decrease`, "PATCH"),

  turnOnDevice: (id: string) =>
    fetchApi<IDevice>(`/devices/${id}/turn-on`, "PATCH"),

  turnOffDevice: (id: string) =>
    fetchApi<IDevice>(`/devices/${id}/turn-off`, "PATCH"),

  // =====================

  getCameraSnapshotUrl: (id: string) =>
    `${VITE_API_URL}/devices/${id}/camera/snapshot`,

  getCameraStreamUrl: (id: string) =>
    `${VITE_API_URL}/devices/${id}/camera/stream`,

  // optional: use this if browser caches old snapshot
  getFreshCameraSnapshotUrl: (id: string) =>
    `${VITE_API_URL}/devices/${id}/camera/snapshot?t=${Date.now()}`,

  // =====================
  // =====================

  // FETCH ALERT
  getAlerts: () => fetchApi<IAlert[]>("/alerts", "GET"),
  getAlertById: (id: string) => fetchApi<IAlert>(`/alerts/${id}`, "GET"),
  createAlert: (body: Partial<IAlert>) =>
    fetchApi<IAlert>(`/alerts/`, "POST", body),
  deleteAlert: (id: string) => fetchApi<IAlert>(`/alerts/${id}`, "DELETE"),
  updateAlert: (id: string, body: Partial<IAlert>) =>
    fetchApi<IAlert>(`/alerts/${id}`, "PATCH", body),
  // Fetch user
  getUsers: () => fetchApi<IUser[]>("/users", "GET"),
  getUserById: (id: string) => fetchApi<IUser>(`/users/${id}`, "GET"),
  createUser: (body: Partial<IUser>) =>
    fetchApi<IUser>(`/users/`, "POST", body),
  deleteUser: (id: string) => fetchApi<IUser>(`/users/${id}`, "DELETE"),
  updateUser: (id: string, body: Partial<IUser>) =>
    fetchApi<IUser>(`/users/${id}`, "PATCH", body),

  // FETCH Home

  getHomes: () => fetchApi<IHome[]>("/homes", "GET"),
  getHomeById: (id: string) => fetchApi<IHome>(`/homes/${id}`, "GET"),
  createHome: (body: Partial<IHome>) =>
    fetchApi<IHome>(`/homes/`, "POST", body),
  deleteHome: (id: string) => fetchApi<IHome>(`/homes/${id}`, "DELETE"),
  updateHome: (id: string, body: Partial<IHome>) =>
    fetchApi<IHome>(`/homes/${id}`, "PATCH", body),

  // Fetch Automation Rule.
  getAutomationRules: () =>
    fetchApi<IAutomationRule>("/automation-rules", "GET"),
  getAutomationRuleById: (id: string) =>
    fetchApi(`/automation-rules/${id}`, "GET"),
  deleteAutomationById: (id: string) =>
    fetchApi(`/automation-rules/${id}`, "DELETE"),
  updateAutomationRuleById: (id: string, body: Partial<IAutomationRule>) =>
    fetchApi(`/automation-rules/${id}`, "PATCH", body),
  createAutomationRule: (body: Partial<IAutomationRule>) =>
    fetchApi(`/automation-rules/`, "POST", body),

  // Fetch login, register, logout, auth.

  register: (name: string, email: string, passWord: string) =>
    fetchApi(`/auth/register`, "POST", { name, email, passWord }),
  login: (email: string, passWord: string) =>
    fetchApi(`/auth/login`, "POST", { email, passWord }),
  logout: () => fetchApi(`/auth/logout`, "POST"),
  getMe: () => fetchApi("/users/me", "GET"),
};

export default api;
