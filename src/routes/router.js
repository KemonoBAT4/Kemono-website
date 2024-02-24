const express = require("express");
const pageRouter = express.Router();

/**
 * renders the home page
 */
pageRouter.get("/", async(req, res) => {

    res.redirect("/home");
});

/**
 * renders the home page
 */
pageRouter.get("/home", async(req, res) => {

    res.render("home");
});

/**
 * renders the chatlist page
 */
pageRouter.get("/chat", async(req, res) => {

    res.render("chat");
});

/**
 * renders the news page
 */
pageRouter.get("/news", async(req, res) => {
    
    res.render("404");
    //TODO: to be implemented
    //res.render("news");
});

/**
 * renders a specific article in the news page
 */
pageRouter.get("/news/article/:id", async(req, res) => {

    res.render("404");
    //TODO: to be implemented
    //res.render("news");
});

//################
//# API REQUESTS #
//################

pageRouter.get("/api/news/recent", async (req, res) => {

});

pageRouter.get("/api/search/:id", async (req, res) => {

});

pageRouter.get("/api/chat/:uid", async (req, res) => {

});


//#########################
//# SEE IF IT CAN BE USED #
//#########################

//TODO: see if this needs to be implemented
/**
 * the account page when creating an account or logging
 */
pageRouter.get("/account", async(req, res) => {
    res.render("account");
});

//TODO: see if this needs to be implemented
/**
 * the settings page
 */
pageRouter.get("/settings", async(req, res) => {

    res.render("settings");
});

/**
 * renders the 404 page
 */
pageRouter.get("*", async(req, res) => {

    res.render("404");
});

module.exports = pageRouter;
