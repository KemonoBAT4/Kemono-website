
const express = require("express");
const app = express();
const { port } = require("./config");
const cors = require("cors");
const morgan = require("morgan");
const { Sequelize } = require("sequelize");

// Express Routes Import
const pageRouter = require("./src/routes/router");
const userRoutes = require("./src/database/controllers/users/routes");
const gameRoutes = require("./src/database/controllers/games/routes");
//const apiRouter = require("./src/routes/") //TODO: create the folder and finish this line

// Sequelize model imports
const UserModel = require("./src/database/models/User");
const NewsModel = require("./src/database/models/News");

app.use(morgan("tiny"));
app.use(cors());

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

// Server static files
app.use("/models", express.static(__dirname + "src/database/models"));
app.use("/storage", express.static(__dirname + "src/database/storage"));
app.use("/middlewares", express.static(__dirname + "src/database/middlewares"));
app.use("/controllers", express.static(__dirname + "src/database/controllers"))
//app.use("/home", express.static(__dirname));
console.log(__dirname)

// Ejs engine
app.set("views", "./src/views/pages");
app.set("view engine", "ejs");


// Sequelize
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./src/database/storage/data.db" //Path to the file that will store the SQLite DB
});

UserModel.initialise(sequelize);
//NewsModel.initialise(sequelize);


sequelize.sync().then(() => {
    console.log("Sequelize Initialised!");

    // Attacching Routes to the app
    app.use("/", pageRouter);
    //app.use("/api", apiRouter); //TODO: add finish to create all the files and stuff for this and then remove the comment
    app.listen(process.env.PORT || port,  () => console.log(`Listening on port ${port}`));
}).catch((error) => {
    console.error("Sequelize Initialisation threw an error: ", error)
});
