
const express = require("express");

const app = express();
const { port } = require("./config");


//const database_ready = false; 

// Express Routes Import
const pageRouter = require("./src/routes/router");


// Middlewares
app.use(express.json()); //TODO: see if this line is usefull

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

// Server static files
app.use("/models", express.static(__dirname + "src/database/models"));
app.use("/storage", express.static(__dirname + "src/database/storage"));
app.use("/middlewares", express.static(__dirname + "src/database/middlewares"));
app.use("/controllers", express.static(__dirname + "src/database/controllers"))
//app.use("/home", express.static(__dirname));

// Ejs engine
app.set("views", "./src/views/pages");
app.set("view engine", "ejs");

app.use("/", pageRouter);

//app.use("/api", apiRouter); //TODO: add finish to create all the files and stuff for this and then remove the comment
app.listen(process.env.PORT || port,  () => console.log(`Listening on port ${port}`));