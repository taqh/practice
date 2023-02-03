const iconMenu = document.querySelector('.icon-menu');
const feat = document.querySelector('.features');
const comp = document.querySelector('.company');
const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-nav");
const blur = document.querySelector('.blur');
const viewcart = document.querySelector('.cart-btn');
const cart = document .querySelector('.cart');

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

// blur.addEventListener('click', (e) => {
//     let visibility = nav.getAttribute("data-visible");
//     if (visibility === "true") {
//         blur.setAttribute("data-visible", false);
//         nav.setAttribute("data-visible", false);
//         navToggle.setAttribute("aria-expanded", false);
//         document.body.style.overflow = "scroll";
//     } else {
//         blur.setAttribute("data-visible", false);
//         nav.setAttribute("data-visible", false);
//         navToggle.setAttribute("aria-expanded", false);
//         document.body.style.overflow = "scroll";
//     }
// });


let close = document.querySelector('.close-btn');
let modal = document.querySelector('.lightbox');
const popup = document.querySelector('.main-prev');


popup.addEventListener('click', () => {
    modal.showModal();
    document.body.style.overflow = "hidden";

});

close.addEventListener('click', () => {
   modal.close();
   document.body.style.overflow = "scroll";
});


viewcart.addEventListener('click', (e) => {
    if(cart.getAttribute("data-visible").includes("false")){
        cart.setAttribute("data-visible", true)
        viewcart.setAttribute("aria-expanded", 'true')
    } else {
        cart.setAttribute("data-visible", false)
        viewcart.setAttribute("aria-expanded", 'false')
    }
})

