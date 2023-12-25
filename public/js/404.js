
let home = document.querySelector("#search-button");

home.addEventListener("click", event => {
    event.preventDefault();

    window.location = "/home";
});
