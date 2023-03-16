const navToggle = document.querySelector(".mobile-nav-toggle");
const navIcon = document.querySelectorAll(".line");
const nav = document.querySelector(".nav-links");
const links = document.querySelectorAll("#link");


navToggle.addEventListener("click", (e) => {

    let visibility = nav.getAttribute("data-visible");
        
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        navIcon.forEach(line => {
            line.setAttribute("data-active", true);
        });
        // document.body.style.overflow = "hidden";
    } else {
        nav.setAttribute("data-visible", false);   
        navToggle.setAttribute("aria-expanded", false);
        navIcon.forEach(line => {
            line.setAttribute("data-active", false);
        });
        // document.body.style.overflow = "scroll";
    }
});

document.body.addEventListener('scroll', () => {
    let visibility = nav.getAttribute("data-visible");
        if (visibility === "true") {
            nav.setAttribute("data-visible", false);
            navIcon.forEach(line => {
                line.setAttribute("data-active", false);
            });
            // document.body.style.overflow = "scroll";
        }
})

links.forEach(link => {
    link.addEventListener('click', (e) => {
        let visibility = nav.getAttribute("data-visible");
        if (visibility === "true") {
            nav.setAttribute("data-visible", false);
            navIcon.forEach(line => {
                line.setAttribute("data-active", false);
            });
            // document.body.style.overflow = "scroll";
        }
    });
})  