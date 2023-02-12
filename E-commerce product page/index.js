const iconMenu = document.querySelector('.icon-menu');
const feat = document.querySelector('.features');
const comp = document.querySelector('.company');
const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-nav");
const blur = document.querySelector('.blur');
const viewcart = document.querySelector('.cart-btn');
const cart = document .querySelector('.cart');

// ---------- Mobile navigation toggle ---------- //
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

//  ---------- close mobile nav onclick outside ---------- //
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
let modal = document.querySelector('.lightbox');
const popup = document.querySelector('.main-prev');

// ----- on click of image preview, show dialog ----- //
popup.addEventListener('click', () => {
    modal.showModal();
    document.body.style.overflow = "hidden";
});
close.addEventListener('click', () => {
   modal.close();
   document.body.style.overflow = "scroll";
});

// ---------- onclick of cart button open cart ---------- //
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

//  increment quantity onclick //
add.addEventListener('click', () => {
  let value = parseInt(amount.innerText);
  if (value < 10) {
    value++;
    amount.innerText = value;
  }
});
// decrement quantity on click
subtract.addEventListener('click', () => {
  let value = parseInt(amount.innerText);
  if (value > 1) {
    value--;
    amount.innerText = value;
  }
});
  
// ---------- on click add quantity of items to cart ---------- //
addtocart.addEventListener('click', () => {
    // update hud showing amount of items in cart //
    let value = parseInt(amount.innerText);
        amount.innerText = value;
        multiplier.innerText = value;
        hud.innerText = value

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

// empty cart on checkout or on delete //
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


// ---------- Image carousel ---------- //
const nextBtn = [...document.querySelectorAll('.next-btn')];
const prevBtn = [...document.querySelectorAll('.prev-btn')];
const products = [...document.querySelectorAll('.product')];
const cards = [...document.querySelectorAll('.card')];
const thumbnails = [...document.querySelectorAll('.thumb')]

let currentIndex = 0;
let currentCard = cards[0]
let  currentSlide = products[0]
let currentThumb = thumbnails[0] 

window.addEventListener('DOMContentLoaded', () => {
    currentCard.setAttribute("data-active", true);
    currentSlide.setAttribute("data-visible", true);
});

const updateCard = (index) => {
    cards.forEach((card) => {
      card.setAttribute("data-active", false);
    });
    cards[index].setAttribute("data-active", true);

    // update current active conteiner to show orange border //
    thumbnails.forEach((thumb) => {
      thumb.setAttribute("data-active", false);
    });
    thumbnails[index].setAttribute("data-active", true);

    products.forEach((product) => {
      product.setAttribute("data-visible", false);
    });
    products[index].setAttribute("data-visible", true);
  };
 
const showNext = () => {
  currentIndex = (currentIndex + 1) % products.length;
  products.forEach((product) => {
    product.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
  updateCard(currentIndex);
};

const showPrev = () => {
  currentIndex = (currentIndex - 1 + products.length) % products.length;
  products.forEach((product) => {
    product.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
  updateCard(currentIndex);
};

const showSlide = (index) => {
    currentIndex = index;
    products.forEach((product) => {
      product.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
    updateCard(currentIndex);
  };
  
nextBtn.forEach((btn) => {
  btn.addEventListener("click", showNext);
});

prevBtn.forEach((btn) => {
  btn.addEventListener("click", showPrev);
});

cards.forEach((card, index) => {
  card.addEventListener("click", () => showSlide(index));
});




//  -------- slider for Dialog element --------- //
  const slides = [...document.querySelectorAll('.modal-product')];
  const thumbs = [...document.querySelectorAll('.thumbnail')];
  const nxtBtn = document.querySelector('.nextslide-btn');
  const backBtn = document.querySelector('.prevslide-btn');
  
const updateSlide = (index) => {
  thumbs.forEach((thumb) => {
    thumb.setAttribute("data-active", false);
  });
  thumbs[index].setAttribute("data-active", true);

  slides.forEach((slide) => {
    slide.setAttribute("data-visible", false);
  });
  slides[index].setAttribute("data-visible", true);
};
 
const scrollNext = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
  updateSlide(currentIndex);
};

const scrollBack = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
  updateSlide(currentIndex);
};

const showImage = (index) => {
    currentIndex = index;
    products.forEach((product) => {
      product.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
    updateSlide(currentIndex);
};

nxtBtn.addEventListener("click", scrollNext);
 
backBtn.addEventListener("click", scrollBack);
 