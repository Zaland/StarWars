import { Express } from "express";

export const initRoutes = (app: Express) => {
  app.get("/", (_req, res) => {
    res.end("Hello");
  });
};
