const iconMenu = document.querySelector('.icon-menu');
const feat = document.querySelector('.features');
const comp = document.querySelector('.company');
const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-nav");
const blur = document.querySelector('.overlay');


navToggle.addEventListener("click", (e) => {

    let visibility = nav.getAttribute("data-visible");
        
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        document.body.style.overflow = "hidden";
    } else {
        nav.setAttribute("data-visible", false);   
        navToggle.setAttribute("aria-expanded", false);
        document.body.style.overflow = "scroll";
    }

    if (nav.getAttribute("data-visible").includes("true")) {
        blur.setAttribute("data-visible", true)
    } else {
        blur.setAttribute("data-visible", false)
    }
});

blur.addEventListener('click', (e) => {
    let visibility = nav.getAttribute("data-visible");
    if (visibility === "true") {
        blur.setAttribute("data-visible", false);
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        document.body.style.overflow = "scroll";
    } else {
        blur.setAttribute("data-visible", false);
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        document.body.style.overflow = "scroll";
    }
});


let close = document.querySelector('.close-btn');
let lightbox = document.querySelector('.lightbox');

close.addEventListener('click', (e) => {
    if (lightbox.getAttribute("data-visible").includes("true")){
        lightbox.setAttribute("data-visible", false)
    }
});

const popup = document.querySelector('.main-prev');

popup.addEventListener('click', (e) => {
    if (lightbox.getAttribute("data-visible").includes("false")){
        lightbox.setAttribute("data-visible", true)
    }
});