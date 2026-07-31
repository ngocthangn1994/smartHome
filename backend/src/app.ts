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
  origin(origin, callback) {
    console.log("CORS request origin:", origin);

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    // Deny cleanly (no CORS headers) instead of throwing -> avoids a 500
    // that masks the real "origin not allowed" cause in the browser.
    console.warn(`CORS blocked origin: ${origin}`);
    callback(null, false);
  },

  credentials: true,

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

  allowedHeaders: ["Content-Type", "Authorization"],

  optionsSuccessStatus: 204,
};

// Must appear before every route
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// Temporary deployment test
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("X-App-Version", "cors-fix-2");

  console.log(`${req.method} ${req.path}`);
  console.log("Origin:", req.headers.origin);

  next();
});

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy.",
    version: "cors-fix-2",
  });
});

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy.",
    version: "cors-fix-2",
  });
});

app.use("/api", router);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
