import dotenv from "dotenv";

dotenv.config();

// Required secrets/config must come from the environment — never hard-code
// them (this repo is public). Fail fast with a clear message if any is missing.
function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

const env = {
  PORT: process.env.PORT || 3500,
  MONGODB_URI: required("MONGODB_URI"),
  JWT_SECRET: required("JWT_SECRET"),
  CLIENT: process.env.CLIENT || "https://homedevicecontrol.com",
  HA_URL: required("HA_URL"),
  HA_TOKEN: required("HA_TOKEN"),
};

export default env;
