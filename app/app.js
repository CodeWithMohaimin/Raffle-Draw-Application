require("dotenv").config("../.env");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use([morgan("dev"), cors(), express.json()]);

app.get("/health", (_req, res, _next) => {
  res.status(200).json({ message: "Success" });
});

app.use((_req, _res, next) => {
  const error = new Error("Resource Not Found");
  error.status = 404;

  next(error);
});

app.use((error, req, res, next) => {
  if (error.status) {
    return res.status(error.status).json({message:error.message})
  }

  res.status(500)
})

module.exports = app;
