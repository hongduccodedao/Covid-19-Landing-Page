// Menu 

const menu  = document.querySelector(".navbar__links")
const menuButton = document.querySelector(".navbar__ham")

menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open")
})