import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import cors, { type CorsOptions } from "cors";
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

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    console.log("Request origin:", origin);

    // Allow Postman, curl, server-to-server requests
    if (!origin) {
      callback(null, true);
      return;
    }

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`CORS blocked origin: ${origin}`));
  },

  credentials: true,

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

  allowedHeaders: ["Content-Type", "Authorization"],

  optionsSuccessStatus: 204,
};

// CORS must be before routes
app.use(cors(corsOptions));

// Parse request body and cookies
app.use(express.json());
app.use(cookieParser());

// Debug middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("X-App-Version", "cors-fix-2026-07-30");

  console.log(`${req.method} ${req.path}`);
  console.log("Origin:", req.headers.origin);

  next();
});

// Health routes
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy.",
  });
});

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy.",
  });
});

// All application routes start with /api
app.use("/api", router);

// Error handling must stay last
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
