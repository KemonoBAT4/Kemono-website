
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


module.exports = {
    fetch_delete,
    fetch_put,
    fetch_post,
    fetch_get,
    fetch_patch,
    locate_page
};