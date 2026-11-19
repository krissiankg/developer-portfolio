import express, { type Express, type ErrorRequestHandler } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();
app.disable("x-powered-by");

app.use(
  pinoHttp({
    logger,
    autoLogging: {
      ignore: (req) => req.url?.split("?")[0] === "/api/ambassador",
    },
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json({ limit: "4kb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const handleError: ErrorRequestHandler = (error, _req, res, _next) => {
  // Never log input bodies or parser errors that might contain chat text.
  const status = error?.type === "entity.too.large" ? 413 : error instanceof SyntaxError ? 400 : 500;
  res.status(status).json({ error: status === 500 ? "Request could not be completed." : "Invalid request body." });
};
app.use(handleError);

export default app;
