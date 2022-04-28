import express from "express";
import { initMiddleware } from "./middleware";
import { initRoutes } from "./routes";

const app = express();

// setup middlewares
initMiddleware(app);

// setup endpoints
initRoutes(app);

// start the Express server
app.listen(3000, () => {
  console.log(`server started at http://localhost:3000`);
});
