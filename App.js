// date setup
const date = document.getElementById("date");
// show date
date.innerHTML = new Date().getFullYear();
// set up nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

// show nav
navBtn.addEventListener("click", () => {
     navbar.classList.add("showNav");
    console.log("hello world");
});
// close nav
navClose.addEventListener("click", ()=>{
    navbar.classList.remove("showNav");
});