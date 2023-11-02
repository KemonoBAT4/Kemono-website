const express = require("express");
const app = express();
const port = 5000;

const pageRoutes = require(".src/routes/routes");

//Static files
app.use(express.static("public"));
//FIXME: fix this line
//app.use("/bootstrap", express.static(path.join(__dirname, "node_modules/bootstrap/dist/")));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/json", express.static(__dirname + "public/json"));

app.set("views", "./src/views/pages");
app.set("view engine", "ejs");


//Routes
app.use("/", pageRoutes);
app.use("/home", pageRoutes);

//Listen on port 5000
app.listen(process.env.PORT || port,  () => console.log(`Listening on port ${port}`));
