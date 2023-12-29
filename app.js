const express = require("express");
const app = express();
const cors = require("cors");
const { default: mongoose } = require("mongoose");

// Middelware
app.use(express.json());
app.use(cors());

const projectRouter = require('./routes/project.router')


app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});


app.use('/api/v1/project', projectRouter)



module.exports = app;
