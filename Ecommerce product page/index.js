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

const addtocart = document.querySelector('.add-btn');
const checkout = document.querySelector('.checkout-btn');
const empty = document.querySelector('.prompt');
const item = document.querySelector('.cart-item');
const deleteitem = document.querySelector('.delete');

const add = document.querySelector('.plus');
const subtract = document.querySelector('.minus');
const amount = document.querySelector('.amount');
const multiplier = document.querySelector('.multiplier');
const hud = document.querySelector('.hud');
const total = document.querySelector('.sum');
const price = document.querySelector('.price');


add.addEventListener('click', () => {
  let value = parseInt(amount.innerText);
  if (value < 10) {
    value++;
    amount.innerText = value;
  }
  multiplier.innerText = value
  hud.innerText = value
});

subtract.addEventListener('click', () => {
  let value = parseInt(amount.innerText);
  if (value > 0) {
    value--;
    amount.innerText = value;
  }
  multiplier.innerText = value;
  hud.innerText = value
});
  




addtocart.addEventListener('click', () => {
    let value = parseInt(amount.innerText);
        amount.innerText = value;
    
    if(checkout.getAttribute("data-visible").includes("false")){
        checkout.setAttribute("data-visible", true)
        item.setAttribute("data-visible", true)
        empty.setAttribute('hidden', '')
    }

    if (value === 0) {
        hud.hidden = true;
      } else {
        hud.hidden = false;
    }

    let pricevalue =  parseFloat(price.innerText);
    let totalprice = parseFloat(total.innerText);
    totalprice = pricevalue * value;
    total.innerText = `$${totalprice.toFixed(2)}`;
    
});


checkout.addEventListener('click', () => {
    checkout.setAttribute("data-visible", false)
    item.setAttribute("data-visible", false)
    hud.hidden = true;
    empty.removeAttribute('hidden', '')
});

deleteitem.addEventListener('click', () => {
    checkout.setAttribute("data-visible", false)
    item.setAttribute("data-visible", false)
    hud.hidden = true;
    empty.removeAttribute('hidden', '')
});



currentImage = products[0];
currentCard = cards[0];
// window.addEventListener('DOMContentLoaded', () => {
//     currentImage.setAttribute("data-visible", true);
//     currentCard.setAttribute("data-active", true);
    
// });


const nextBtn = [...document.querySelectorAll('.next-btn')];
const prevBtn = [...document.querySelectorAll('.prev-btn')];

const products = [...document.querySelectorAll('.product')];
const cards = [...document.querySelectorAll('.card')];





function switchImage(isNext) {
    currentImage.setAttribute("data-visible", false);
    currentCard.setAttribute("data-active", false);
    
    let currentSlide = products.indexOf(currentImage);
    let currentCardIndex = cards.indexOf(currentCard);
    
    if (isNext) {
        if (currentSlide === products.length - 1) {
            currentSlide = 0;
            currentCardIndex = 0;
        } else {
            currentSlide++;
            currentCardIndex++;
        }
    } else {
        if (currentSlide === 0) {
            currentSlide = products.length - 1;
            currentCardIndex = cards.length - 1;
        } else {
            currentSlide--;
            currentCardIndex--;
        }
    }
    
    currentImage = products[currentSlide];
    currentCard = cards[currentCardIndex];
    currentImage.setAttribute("data-visible", true);
    currentCard.setAttribute("data-active", true);

    
}

nextBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
        switchImage(true);
    });
});

prevBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
        switchImage(false);
    });
});

// cards.forEach((card) =>{
//     card.addEventListener('click', (e) =>{
//         let currentSlide = products.indexOf(currentImage);
//         let clicked = e.target;
//         currentSlide = cards.indexOf(clicked)
//         console.log(currentSlide)
//     });
// });