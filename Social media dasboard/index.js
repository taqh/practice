const toggle = document.getElementById("toggle");
const body = document.getElementsByTagName('body');
let card = document.querySelectorAll('.cards');
let text = document.querySelectorAll('.darktheme-text')
let overview = document.querySelector('.overview')
let dark = document.querySelector('.dark')
let header = document.querySelector('header')


// check the saved theme in local storage
if (localStorage.getItem("dark-mode") === "true") {
  toggle.checked = true;
  document.body.setAttribute("data-toggled", true);
  card.forEach(card => {
    card.setAttribute("data-toggled", true)
  });
  text.forEach(text => {
    text.setAttribute("data-toggled", true)
  });
  overview.setAttribute("data-toggled", true)
  dark.setAttribute("data-toggled", true)
  header.classList.add("header-toggle");
}

// toggle dark theme
toggle.addEventListener("change", function() {
  if (this.checked) {
    document.body.setAttribute("data-toggled", true);
    card.forEach(card => {
    card.setAttribute("data-toggled", true)
    });
    text.forEach(text => {
    text.setAttribute("data-toggled", true)
    });
    overview.setAttribute("data-toggled", true)
    dark.setAttribute("data-toggled", true)
    header.classList.add("header-toggle");
    // save the theme preference in local storage
    localStorage.setItem("dark-mode", true);
  } else {
    document.body.setAttribute("data-toggled", false);
    card.forEach(card => {
        card.setAttribute("data-toggled", false)
        });
        text.forEach(text => {
            text.setAttribute("data-toggled", false)
        });
        overview.setAttribute("data-toggled", false)
        dark.setAttribute("data-toggled", false)
        header.classList.remove("header-toggle");
    // save the theme preference in local storage
    localStorage.setItem("dark-mode", false);
  }
});