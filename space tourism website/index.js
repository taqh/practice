
//  Javascript

let navToggle = document.querySelector(".mobile-nav-toggle");
let nav = document.querySelector(".primary-navigation");

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

    
