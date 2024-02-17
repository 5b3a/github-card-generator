
// Search div elements
const search_div = document.getElementById("search-area");
const search_box = document.getElementById("search-box");
const search_btn = document.getElementById("search-btn");

// error div elemetns
const error_div = document.getElementById("error-div");
const error_msg = document.getElementById("error-box");

// card div elements

const avatar = document.getElementById("avatar");
const login_id = document.getElementById("login-id");
const name = document.getElementById("user-name");
const followers = document.getElementById("int-followers");
const repos = document.getElementById("int-repos");


// reload buttom
const relod_btn = document.querySelectorAll(".relod");



// check weather hidden class exist on search-div
// if exist on the page load then remove it.
// if not ; do nothing
window.onload = ()=>{
    if (search_div.className === "hidden") {
        search_div.classList.remove("hidden")
        console.log("added hidden class ");
    } else{
        console.log("no hidden on div-search")
    }
}
// Default URL for api request
let reqUrl= "https://api.github.com/users/0x5b3a";

// Get the input value from search-box
let search_text;

// api_data
let api_data;

//create new xhr element for api request
const xhr = new XMLHttpRequest();



function send_api(){
    if (xhr.readyState === 4) {
        api_data = JSON.parse(this.responseText);
        // logic
        avatar.setAttribute("src",api_data.avatar_url);
        login_id.innerText = api_data.login;
        name.innerText = api_data.name;
        followers.innerText = api_data.followers;
        repos.innerText = api_data.public_repos;
    }
}
search_btn.addEventListener("click",()=>{
    search_text =search_box.value;
    reqUrl = "https://api.github.com/users/"+search_text;
    if (search_text !== "") {
        // hide search-div
        search_div.classList.add("hidden");
        //set behaviour of relod button
        relod_btn.forEach(element => {
        element.addEventListener("click",()=>{
        window.location.reload();
            })
        });
        xhr.open('GET',reqUrl);

        xhr.onreadystatechange = send_api;

        xhr.send();
    }
})






