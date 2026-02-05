import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic } from "./vite";
import { log } from "./utils";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

// Middleware and routes setup
app.use((req, res, next) => {
  const start = Date.now();
  const requestPath = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (requestPath.startsWith("/api")) {
      let logLine = `${req.method} ${requestPath} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Initialization
(async () => {
  await registerRoutes(app);

  if (app.get("env") === "development") {
    const { createServer } = await import("http");
    const server = createServer(app);
    await setupVite(app, server);
    const port = parseInt(process.env.PORT || '5000', 10);
    server.listen(port, "0.0.0.0", () => {
      log(`serving on port ${port}`);
    });
  } else {
    serveStatic(app);
  }
})();

export default app;
