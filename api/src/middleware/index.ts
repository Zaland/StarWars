import bodyParser from "body-parser";
import { Express } from "express";

export const initMiddleware = (app: Express) => {
  // bodyparser
  app.use(bodyParser.json());

  // cors
  app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
};
