import express, { response } from "express";
import errorMiddleware from "./middeleware/errorMiddleWare";
import cors from "cors";
import cookieParser from "cookie-parser";
import { notFoundMiddleware } from "./middeleware/notFoundMiddleware";
import router from "./routes/index";
import env from "./config/env";
import { Request, Response, NextFunction } from "express";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: env.CLIENT,
    credentials: true,
  }),
);
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.headers);
  next();
});
app.use(cookieParser());
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server's healthy.",
  });
});
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server's healthy.",
  });
});

app.use("/api", router);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
