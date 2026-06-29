import env from "../config/env";

const HA_URL = env.HA_URL;
const HA_TOKEN = env.HA_TOKEN;

type HttpMethod = "GET" | "POST" | "DELETE" | "PATCH";

if (!HA_URL || !HA_TOKEN) {
  console.warn("Missing HA_URL or HA_TOKEN in .env");
}

async function callHomeAssistant(
  path: string,
  method: HttpMethod = "GET",
  body?: unknown,
  customConfig: RequestInit = {},
  isJson = true,
): Promise<Response> {
  if (!HA_URL || !HA_TOKEN) {
    throw new Error("Missing HA_URL or HA_TOKEN in .env");
  }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${HA_TOKEN}`,
    ...(customConfig.headers as Record<string, string>),
  };

  if (isJson) {
    headers["Content-Type"] = "application/json";
    headers["Accept"] = "application/json";
  }

  const config: RequestInit = {
    ...customConfig,
    method,
    headers,
  };

  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${HA_URL}${path}`, config);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Home Assistant error: ${response.status} ${errorText}`);
  }

  return response;
}

export const homeAssistantService = {
  async setTemperature(entityId: string, temperature: number) {
    return callHomeAssistant("/api/services/climate/set_temperature", "POST", {
      entity_id: entityId,
      temperature,
    });
  },

  async turnOn(entityId: string) {
    const domain = entityId.split(".")[0];

    return callHomeAssistant(`/api/services/${domain}/turn_on`, "POST", {
      entity_id: entityId,
    });
  },

  async turnOff(entityId: string) {
    const domain = entityId.split(".")[0];

    return callHomeAssistant(`/api/services/${domain}/turn_off`, "POST", {
      entity_id: entityId,
    });
  },

  async getSnapshot(entityId: string) {
    return callHomeAssistant(
      `/api/camera_proxy/${entityId}`,
      "GET",
      undefined,
      {},
      false,
    );
  },

  async getStream(entityId: string) {
    return callHomeAssistant(
      `/api/camera_proxy_stream/${entityId}`,
      "GET",
      undefined,
      {},
      false,
    );
  },
};
