const themeButton = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌙";
    }
});
const nav = document.querySelector("nav");

const menuButton = document.createElement("button");
menuButton.textContent = "☰ Menu";
menuButton.className = "menu-button";

nav.prepend(menuButton);

menuButton.addEventListener("click", function () {
    nav.classList.toggle("menu-open");
});
