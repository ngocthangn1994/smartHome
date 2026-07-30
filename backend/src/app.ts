import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import errorMiddleware from "./middeleware/errorMiddleWare";
import { notFoundMiddleware } from "./middeleware/notFoundMiddleware";
import router from "./routes/index";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://homedevicecontrol.com",
  "https://www.homedevicecontrol.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      console.log("Request origin:", origin);

      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked origin: ${origin}`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  console.log("Origin:", req.headers.origin);
  next();
});

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy.",
  });
});

app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy.",
  });
});

app.use("/api", router);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
