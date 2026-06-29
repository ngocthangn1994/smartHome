import app from "./app";
import connectDB from "./config/db";
import env from "./config/env";

const PORT = env.PORT;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
};

startServer();
