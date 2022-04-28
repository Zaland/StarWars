import express from "express";
import { initMiddleware } from "./middleware";
import { initRoutes } from "./routes";

const app = express();

// setup middlewares
initMiddleware(app);

// setup endpoints
initRoutes(app);

export default app;
