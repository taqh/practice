const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");
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