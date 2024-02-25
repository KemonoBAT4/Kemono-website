// const { locate_page, fetch_get } = require( '../services/pages_service.js' );

let title = document.querySelector(".title");

load_data();

async function search_function(text){
    

    //TODO: finish this function
    if(is_slash_function(text)){
        search_through_slash(text);
    }else{
        //let response = await fetchGet(`/api/search/${text}`);
        
        /*if(response.totalItems > 0){
            show_search_response();
        }else{
            show_search_no_data();
        }*/
    }
}

function load_data(){
    let main_page = document.querySelector(".main-page");
    main_page.innerHTML = "";
    //load_games_page();
}

//##############
//# LOAD PAGES #
//##############

/**
 * home page
 */
async function load_home_page(){
    let main_page = document.querySelector(".main-page");
    main_page.innerHTML = "";
    document.title = "Home page";
    
    title.innerText = "Home page";
}

/**
 * games page
*/
async function load_games_page(){
    let main_page = document.querySelector(".main-page");
    main_page.innerHTML = "";
    document.title = "Games page";
    
    title.innerText = "Games page";
    
    //TODO: implement when the api is ready
    //let url = "/api/games/all";
    //let games = await fetch_get(url);

    let main_container_for_games = document.createElement("div");
    main_container_for_games.classList.add("main-container-for-games");

    //TODO: temp games data, remove after api implementation
    let game1 = { title: "Arknghts: endfield", image: "/imgs/arknights_endfield_construction.jpg" }
    let game2 = { title: "Arknghts", image: "/imgs/arknights_endfield_construction.jpg" }    
    let game3 = { title: "Arknghts: endfield", image: "/imgs/arknights_endfield_construction.jpg" }
    let game4 = { title: "Arknghts", image: "/imgs/arknights_endfield_construction.jpg" }    
    let game5 = { title: "Arknghts: endfield", image: "/imgs/arknights_endfield_construction.jpg" }
    let game6 = { title: "Arknghts", image: "/imgs/arknights_endfield_construction.jpg" }

    let games = [game1, game2, game3, game4, game5, game6];

    let game_container_row = document.createElement("div");
    game_container_row.className = "game-container-row";
    
    let max_per_row = 3;
    let current_per_row = 0;
    for(let game of games){

        //checks row status
        if(current_per_row == max_per_row){
            current_per_row = 0;
            game_container_row = document.createElement("div");
            game_container_row.className = "game-container-row";
        }

        //game container
        let game_container = document.createElement("div");
        game_container.className = "game-container";
        game_container.style.backgroundImage = 'url("' + game.image + '")';

        //game title
        let game_title = document.createElement("h2");
        game_title.className = "game-title";
        game_title.innerText = game.title;

        //adding all the container data 
        game_container.append(game_title);
        game_container_row.append(game_container);
        main_container_for_games.append(game_container_row);
        main_page.append(main_container_for_games);
        current_per_row++;
    }
}

/**
 * news page
 */
async function load_news_page(){
    let main_page = document.querySelector(".main-page");
    main_page.innerHTML = "";
    document.title = "News page";

    title.innerText = "News page";
}

async function load_chat_page(){
    locate_page("chat");
}

/**
 * settings page
 */
async function load_settings_page(){
    
    //TODO: remove comments and alert
    alert("la pagina non è ancora disponibile");
    // locate_page("settings");
}

async function load_anime_page(){
    //TODO: remove comments and alert
    alert("la pagina non è ancora disponibile");
    // locate_page("anime");
}

/**
 * credits page
 */
async function load_credits_page(){
    locate_page("credits");
}

//#############
//# UTILITIES #
//#############

/**
 * redirects to the provided path 
 * @param {string} text the location path 
 */
function locate_page(text) {

    document.location = `/${text}`;
}

//############
//# FETCHERS #
//############

/**
 * makes a delete request to the url provided
 * @param {string} url the url of the request 
 * @returns the data
 */
async function fetch_delete(url){
    return await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });
}

/**
 * makes a patch request to the url provided
 * @param {string} url the url of the request
 * @param {json} body the body in json format 
 * @returns the data
 */
async function fetch_patch(url, body){
    return await fetch(url, {
        method: "PATCH",
        body: body,
        headers: {
            "Content-type": "application/json"
        }
    });
}

/**
 * makes a put request to the url provided
 * @param {string} url the url of the request
 * @param {json} body the body in json format
 * @returns the data
 */
async function fetch_put(url, body){
    return await fetch(url, {
        method: "PUT",
        body: body,
        headers: {
            "Content-type": "application/json"
        }
    });
}

/**
 * makes a post request to the url provided
 * @param {string} url the url of the request
 * @param {json} body the body in json format
 * @returns the data
 */
async function fetch_post(url, body){
    return await fetch(url, {
        method: "POST",
        body: body,
        headers: {
            "Content-type": "application/json"
        }
    });
}

/**
 * makes a get request to the url provided
 * @param {string} url the url of the string
 * @returns the data
 */
async function fetch_get(url){
    return await fetch(url).then(response => { return response.json(); });
}

/**
 * 
 * @param {*} text 
 */
function search_through_slash(text){
    //TODO: finish this function
    console.log(text)
    switch(text){
        case "1": console.log("test"); break;
        case "2": locate_page("testaaaaa"); break;
        case "3": console.log("test"); break;
        case "4": console.log("test"); break;
        case "5": console.log("test"); break;

        default: console.log("default"); break;
    }
}

/**
 * checks if the string is a slash function
 * @param {string} text the text 
 * @returns boolean
 */
function is_slash_function(text){
    if(text.slice(0, 1) === "/"){
        return true;
    }else{
        return false;
    }
}

//TODO: give a proper name to this function
//FIXME: 
/**
 * this string the will be put as an input 
 * is a string that recalls a few functions 
 * with its own data and its used to generate 
 * a custom made page 
 * @param {string} string the string 
 */
function to_be_renamed(string){

    //TODO: finish this function
    let array = string.split("&");

    for(let item of array){
        console.log(array)
    }
}  

//##################
//# EVENT LISTENER #
//##################

let search_button = document.querySelector("#search-button").addEventListener("click", event => {
    event.preventDefault();
    console.log("search button pressed");

    // test
    test();

    let search_text = document.querySelector("#search-text").value;
    search_function(search_text);
});

let home_page_button = document.querySelector("#home-page-button").addEventListener("click", event => {
    event.preventDefault();
    this.load_home_page();
});

let games_page_button = document.querySelector("#games-page-button").addEventListener("click", event => {
    event.preventDefault();
    load_games_page();
});

let news_page_button = document.querySelector("#news-page-button").addEventListener("click", event => {
    event.preventDefault();
    load_news_page();
});

let anime_page_button = document.querySelector("#anime-page-button").addEventListener("click", event => {
    event.preventDefault();
    load_anime_page();
});

let settings_page_button = document.querySelector("#settings-page-button").addEventListener("click", event => {
    event.preventDefault();
    load_settings_page();
});

let chat_page_button = document.querySelector("#chat-page-button").addEventListener("click", event => {
    event.preventDefault();
    console.log("chat")
    load_chat_page();
});

let credits_page_button = document.querySelector("#credits-page-button").addEventListener("click", event => {
    event.preventDefault(); 
    load_credits_page();
});

//########
//# TEST #
//########

async function test() {
    console.log("dentro test");
    console.log(await fetch_get("https://jsonplaceholder.typicode.com/todos/1"));
}