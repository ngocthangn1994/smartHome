import env from "../config/env";

const HA_URL = env.HA_URL?.replace(/\/$/, "");
const HA_TOKEN = env.HA_TOKEN;

type HttpMethod = "GET" | "POST" | "DELETE" | "PATCH";

if (!HA_URL || !HA_TOKEN) {
  console.warn("Missing HA_URL or HA_TOKEN in .env");
}

async function callHomeAssistant(
  path: string,
  method: HttpMethod = "GET",
  body?: unknown,
): Promise<Response> {
  if (!HA_URL || !HA_TOKEN) {
    throw new Error("Missing HA_URL or HA_TOKEN in .env");
  }

  const headers = {
    Authorization: `Bearer ${HA_TOKEN}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const config: RequestInit = {
    method,
    headers,
  };

  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${HA_URL}${path}`, config);

  if (!response.ok) {
    throw new Error(`Home Assistant error: ${response.status}`);
  }

  return response;
}

function getDomain(entityId: string): string {
  if (!entityId.includes(".")) {
    throw new Error(`Invalid entity id: ${entityId}`);
  }

  return entityId.split(".")[0]!;
}

export const homeAssistantService = {
  async setTemperature(
    entityId: string,
    temperature: number,
  ): Promise<Response> {
    return callHomeAssistant("/api/services/climate/set_temperature", "POST", {
      entity_id: entityId,
      temperature,
    });
  },

  async turnOn(entityId: string): Promise<Response> {
    const domain = getDomain(entityId);

    return callHomeAssistant(`/api/services/${domain}/turn_on`, "POST", {
      entity_id: entityId,
    });
  },

  async turnOff(entityId: string): Promise<Response> {
    const domain = getDomain(entityId);

    return callHomeAssistant(`/api/services/${domain}/turn_off`, "POST", {
      entity_id: entityId,
    });
  },

  getSnapshotUrl(entityId: string): string {
    if (!HA_URL) {
      throw new Error("Missing HA_URL in .env");
    }

    return `${HA_URL}/api/camera_proxy/${encodeURIComponent(entityId)}`;
  },

  getStreamUrl(entityId: string): string {
    if (!HA_URL) {
      throw new Error("Missing HA_URL in .env");
    }

    return `${HA_URL}/api/camera_proxy_stream/${encodeURIComponent(entityId)}`;
  },
};
