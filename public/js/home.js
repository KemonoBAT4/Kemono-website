
//let title = document.querySelector(".title");

let search_button = document.querySelector("#search-button").addEventListener("click", event => {
    event.preventDefault();
    console.log("search button pressed");

    let search_text = document.querySelector("#search-text").value;
    //console.log(search_text);

    search_function(search_text);
});


async function search_function(text){

    
    //TODO: finish this function
    if(is_slash_function(text)){
        search_through_slash(text);
    }else{
        let response = await fetchGet(`/api/search/${text}`);

        if(response.totalItems > 0){
            show_search_response();
        }else{
            show_search_no_data();
        }
    }
}














//#############
//# UTILITIES #
//#############

async function fetchDelete(url){
    
}

async function fetchPatch(url, body){

}

async function fetchPut(url, body){

}

async function fetchPost(url, body){

}

async function fetchGet(url){
    //return await fetch(url).then(response => { return response.json(); });
}

function search_through_slash(text){
    //TODO: finish this function

    switch(text){
        case "1": console.log("test"); break;
        case "2": console.log("test"); break;
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
