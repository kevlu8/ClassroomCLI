const links = document.querySelector(".nav-links-container");
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
    links.classList.toggle("hidden");
    hamburger.classList.toggle("clicked");
})
