
let main_container = document.querySelector(".main-container");
let is_login = true;
load_login_page();


//##############
//# LOAD PAGES #
//##############

function load_login_page(){
    main_container.innerHTML = "";

    //loads login page
}

function load_register_page(){
    main_container.innerHTML = "";

    //loads register page
}

//##################
//# EVENT LISTENER #
//##################

let switch_to_login_button = document.querySelector(".login-button").addEventListener("click", event => {
    event.preventDefault();
    load_login_page();
});

let switch_to_register_button = document.querySelector(".register-button").addEventListener("click", event => {
    event.preventDefault();
    load_register_page();
});

let try_to_login_button = document.querySelector(".try-to-login-button").addEventListener("click", event =>{
    event.preventDefault();

    //fetch for login if in login page
    if(is_login == true){
        //login
    }else{
        //register
        load_register_page();
    }
});

let try_to_register_button = document.querySelector(".try-to-login-button").addEventListener("click", event => {
    event.preventDefault();

    //fetch for register if register page
    if(is_login == false){
        //register
    }else{
        //login
        load_login_page();
    }
});


