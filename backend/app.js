process.env.AMBIENTE_PROCESSO = "desenvolvimento";

const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const cors = require("cors");
const server = http.createServer(app);

const movieRota = require("./src/routes/movie");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/movie", movieRota);

server.listen(3333, () => {
  console.log("listening on *:3333");
});
