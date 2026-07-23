import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: process.env.PORT || 3500,
  MONGODB_URI:
    process.env.MONGODB_URI ||
    "mongodb+srv://ngocthangn1994_db_user:Michealnguyen18@cluster0.s2nlj9w.mongodb.net/",
  JWT_SECRET: process.env.JWT_SECRET || "ngocthang18",
  CLIENT: process.env.CLIENT || "https://homedevicecontrol.com",
  HA_URL: process.env.HA_URL || "http://homeassistant.local:8123",
  HA_TOKEN:
    process.env.HA_TOKEN ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkYjM4MjY2NTI4ZjU0YTFlYjBkOTc2ZjQzMjQwNTdkMiIsImlhdCI6MTc4MjQzODQ4MywiZXhwIjoyMDk3Nzk4NDgzfQ.--hBaztgo1WJYXQy3ldYKHaV45-Rid03hpweDO5pNfc",
};

export default env;
