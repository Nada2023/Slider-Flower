const menubtn = document.querySelector(".menu-btn")
const Navigation = document.querySelector(".navigation")
menubtn.addEventListener("click",() =>{
    menubtn.classList.toggle("contact");
    Navigation.classList.toggle("contact");
});

const btns = document.querySelectorAll(".nav-btn")
const slides = document.querySelectorAll(".video-slide")
const contents = document.querySelectorAll(".content")

var Slidernav = function(element){
    btns.forEach((btn) => {
        btn.classList.remove("contact");
    });
    slides.forEach((slide) => {
        slide.classList.remove("contact");
    });
    contents.forEach((content) => {
        content.classList.remove("contact");
    });
    btns[element].classList.add("contact");
    slides[element].classList.add("contact");
    contents[element].classList.add("contact");
   
}
btns.forEach((btn, i) =>{
    btn.addEventListener("click", () => {
        Slidernav(i);
    });
});