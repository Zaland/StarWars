import express from "express";
import bodyParser from "body-parser";
import PersonRouter from "./routes/Person.route";

const app = express();

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

// setup endpoints
initRoutes(app);

export default app;
