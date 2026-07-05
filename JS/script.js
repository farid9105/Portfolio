const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});


document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});