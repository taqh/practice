
//  Javascript

let navToggle = document.querySelector(".mobile-nav-toggle");
let nav = document.querySelector(".primary-navigation");
let body = document.querySelector(".technology");
// when someone clicks the hamburger button
navToggle.addEventListener("click", () => {

    let visibliity = nav.getAttribute("data-visible");
    // if the nav is closed, open it
    if (visibliity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }


    console.log();
})

document.addEventListener('click', (e) => {
    let visibliity = nav.getAttribute("data-visible");
    if (visibliity === "true") {
        close = e.target.tagName;
        console.log(close)
    }
        
        
    

    
})