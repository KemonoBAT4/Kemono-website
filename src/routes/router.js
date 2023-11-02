const express = require("express");
const pageRouter = express.Router();

pageRouter.get("/", async(req, res) => {
    //res.render("home");
    //document.location = "/home"
})

pageRouter.get("/home", async(req, res) => {
    res.render("home");
})

pageRouter.get("*", async(req, res) => {
    res.render("404");
})


module.exports = pageRouter;
