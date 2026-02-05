import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes";
import { serveStatic } from "../server/vite";
import { log } from "../server/utils";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health check
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

// Request logging middleware
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

// Register routes synchronously
registerRoutes(app);

// In production (Vercel), we strictly serve static files
if (process.env.NODE_ENV === "production" || process.env.VERCEL) {
    serveStatic(app);
}

export default app;
