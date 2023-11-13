const express = require("express");
const app = express();
const port = 5000;

//Static files
app.use(express.static("public"));

//TODO: check if this lines is correct
//app.use("/",express.static("./node_modules/bootstrap/dist/"));
app.use("/bootstrap", express.static("./node_modules/bootstrap/dist/css"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/imgs", express.static(__dirname + "public/imgs"));
app.use("/json", express.static(__dirname + "public/json"));

app.set("views", "./src/views/pages");
app.set("view engine", "ejs");


const pageRouter = require("./src/routes/router");
//Routes
app.use("/", pageRouter);
app.use("/home", pageRouter);

//Listen on port 5000
app.listen(process.env.PORT || port,  () => console.log(`Listening on port ${port}`));
