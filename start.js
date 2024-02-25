
const express = require("express");
const app = express();
const { port } = require("./config");
const cors = require("cors");

// Express Routes Import
const pageRouter = require("./src/routes/router");

// Middlewares
app.use(express.json()); //TODO: see if this line is usefull
app.use(cors());

// Static files
app.use(express.static("public"));

//app.use("/",express.static("./node_modules/bootstrap/dist/"));

// Client static files
app.use("/bootstrap", express.static("./node_modules/bootstrap/dist/css"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/imgs", express.static(__dirname + "public/imgs"));
app.use("/json", express.static(__dirname + "public/json"));
app.use("/services", express.static(__dirname + "public/services"));

// Ejs engine
app.set("views", "./src/views/pages");
app.set("view engine", "ejs");


app.use("/", pageRouter);

app.listen(process.env.PORT || port,  () => console.log(`Listening on port ${port}`));
