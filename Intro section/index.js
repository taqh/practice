const iconMenu = document.querySelector('.icon-menu');
const feat = document.querySelector('.features');
const comp = document.querySelector('.company');
const companyMenu = document.querySelector('.company-menu')
const featuresMenu = document.querySelector('.features-menu')
const featArrow =document.querySelector('.features-arrow')
const compArrow =document.querySelector('.company-arrow')
const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-nav");
const blur = document.querySelector('.overlay');

featuresMenu.addEventListener('click', (e) => {
    if (feat.getAttribute("aria-expanded").includes("false")){
        feat.setAttribute("aria-expanded", true);
        featuresMenu.setAttribute("aria-expanded", true);
    } else {
        feat.setAttribute("aria-expanded", false);
        featuresMenu.setAttribute("aria-expanded", false);

    }
    if (featArrow.getAttribute("aria-expanded").includes("false")){
        featArrow.setAttribute("aria-expanded", true);
    } else {
        featArrow.setAttribute("aria-expanded", false)
    }
});

companyMenu.addEventListener('click', (e) => {
    if (comp.getAttribute("aria-expanded").includes("false")){
        comp.setAttribute("aria-expanded", true);
        companyMenu.setAttribute("aria-expanded", true);

    } else {
        comp.setAttribute("aria-expanded", false);
        companyMenu.setAttribute("aria-expanded", false);

    }
    if (compArrow.getAttribute("aria-expanded").includes("false")){
        compArrow.setAttribute("aria-expanded", true);
    } else {
        compArrow.setAttribute("aria-expanded", false)
    }
});


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