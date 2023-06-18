// import express from node_modules
const express = require("express");

const router = require("./routes/note.route");

const connectMongoDB = require("./database/db");

// initializing express
const app = express();

// middleware to enable us capture req.body as json
app.use(express.json());

// call connect to mongodb method/function
connectMongoDB();

// get request
app.get("/", (req, res) => {
  res.send("This is our homepage");
});

app.use(router);

app.use("*", (_, res) => {
  res
    .status(404)
    .json({ message: "The page you're looking for does not exist" });
});

module.exports = app;
