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

})

pageRouter.get("/api/search/:id", async (req, res) => {


});


//#########################
//# SEE IF IT CAN BE USED #
//#########################

//TODO: see if this needs to be implemented
/**
 * the login page if not logged
 */
pageRouter.get("/login", async(req, res) => {
    res.render("404");
});

//TODO: see if this needs to be implemented
/**
 * the settings page
 */
pageRouter.get("/settings", async(req, res) => {
    res.render("404");
});

/**
 * renders the 404 page
 */
pageRouter.get("*", async(req, res) => {

    res.render("404");
});

module.exports = pageRouter;
