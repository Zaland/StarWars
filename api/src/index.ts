import express from "express";
import bodyParser from "body-parser";

const app = express();

// middleware
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

// start the Express server
app.listen(3000, () => {
  console.log(`server started at http://localhost:3000`);
});
