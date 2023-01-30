const iconMenu = document.querySelector('.icon-menu');
const feat = document.querySelector('.features');
const comp = document.querySelector('.company');
const companyMenu = document.querySelector('.company-menu')
const featuresMenu = document.querySelector('.features-menu')
const featArrow =document.querySelector('.features-arrow')
const compArrow =document.querySelector('.company-arrow')

window.addEventListener('DOMContentLoaded', () => {
    
});


featuresMenu.addEventListener('click', (e) => {
    if (feat.getAttribute("aria-expanded").includes("false")){
        feat.setAttribute("aria-expanded", true);
    } else {
        feat.setAttribute("aria-expanded", false);
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
    } else {
        comp.setAttribute("aria-expanded", false);
    }
    if (compArrow.getAttribute("aria-expanded").includes("false")){
        compArrow.setAttribute("aria-expanded", true);
    } else {
        compArrow.setAttribute("aria-expanded", false)
    }
});
