
//  Javascript

let navToggle = document.querySelector(".mobile-nav-toggle");
let nav = document.querySelector(".primary-navigation");
let body = document.querySelector(".technology");

navToggle.addEventListener("click", () => {

    let visibliity = nav.getAttribute("data-visible");
    
    if (visibliity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }

})

document.addEventListener('click', (e) => {

    let visibliity = nav.getAttribute("data-visible");
    close = e.target.classList;

    if (visibliity == "true") {
    if(close.contains('toggle')){
        return;
    }else{
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
   }
    
})
