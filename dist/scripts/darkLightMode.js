// Use localStorage to keep user preference

const themeLink = document.querySelector("#theme-mode");

function toLightMode() {
    console.log("SWITCHING TO LIGHT MODE");
}

function toDarkMode() {
    console.log("SWITCHING TO DARK MODE");
}

console.log("darkLightMode.js test");

if (localStorage.getItem("darkLightMode") === "light") {
    console.log("LIGHT MODE AT START");
    themeLink.href = "./styles/lightMode.css";
} else if (localStorage.getItem("darkLightMode") === "dark") {
    console.log("DARK MODE AT START");
    themeLink.href = "./styles/darkMode.css";
} else if (localStorage.getItem("darkLightMode") === "") {
    console.log("DEFAULT MODE AT START");
    localStorage.setItem("darkLightMode", "light");
    themeLink.href = "./styles/lightMode.css";
}

const darkLightModeButton = document.querySelector(".dark-light-mode");

darkLightModeButton.addEventListener("click", () => {
    console.log("clicked!");
    if (localStorage.getItem("darkLightMode") === "light") {
        localStorage.setItem("darkLightMode", "dark");
        toDarkMode();
    } else if (localStorage.getItem("darkLightMode") === "dark") {
        localStorage.setItem("darkLightMode", "light");
        toLightMode();
    }
});
