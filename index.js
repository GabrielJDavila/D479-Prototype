// js file
const menuBtn = document.getElementById("menu-btn")
const navMenu = document.getElementById("nav-menu")
const closeMenuBtn = document.getElementById("close-menu-btn")

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hidden")
    menuBtn.classList.add("hidden")
    closeMenuBtn.classList.toggle("hidden")
})

closeMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hidden")
    menuBtn.classList.remove("hidden")
    closeMenuBtn.classList.toggle("hidden")
})