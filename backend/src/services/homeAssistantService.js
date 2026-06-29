"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeAssistantService = void 0;
const env_1 = __importDefault(require("../config/env"));
const HA_URL = env_1.default.HA_URL;
const HA_TOKEN = env_1.default.HA_TOKEN;
if (!HA_URL || !HA_TOKEN) {
    console.warn("Missing HA_URL or HA_TOKEN in .env");
}
async function callHomeAssistant(path, method = "GET", body, customConfig = {}, isJson = true) {
    if (!HA_URL || !HA_TOKEN) {
        throw new Error("Missing HA_URL or HA_TOKEN in .env");
    }
    const headers = {
        Authorization: `Bearer ${HA_TOKEN}`,
        ...customConfig.headers,
    };
    if (isJson) {
        headers["Content-Type"] = "application/json";
        headers["Accept"] = "application/json";
    }
    const config = {
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
exports.homeAssistantService = {
    async setTemperature(entityId, temperature) {
        return callHomeAssistant("/api/services/climate/set_temperature", "POST", {
            entity_id: entityId,
            temperature,
        });
    },
    async turnOn(entityId) {
        const domain = entityId.split(".")[0];
        return callHomeAssistant(`/api/services/${domain}/turn_on`, "POST", {
            entity_id: entityId,
        });
    },
    async turnOff(entityId) {
        const domain = entityId.split(".")[0];
        return callHomeAssistant(`/api/services/${domain}/turn_off`, "POST", {
            entity_id: entityId,
        });
    },
    async getSnapshot(entityId) {
        return callHomeAssistant(`/api/camera_proxy/${entityId}`, "GET", undefined, {}, false);
    },
    async getStream(entityId) {
        return callHomeAssistant(`/api/camera_proxy_stream/${entityId}`, "GET", undefined, {}, false);
    },
};
//# sourceMappingURL=homeAssistantService.js.map