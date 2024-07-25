// Use localStorage to keep user preference

const themeLink = document.querySelector("#theme-mode");

function toLightMode() {
    console.log("SWITCHING TO LIGHT MODE");
    themeLink.href = "./styles/lightMode.css";
}

function toDarkMode() {
    console.log("SWITCHING TO DARK MODE");
    themeLink.href = "./styles/darkMode.css";
}

console.log("darkLightMode.js test");

if (localStorage.getItem("darkLightMode") === "light") {
    console.log("LIGHT MODE AT START");
    toLightMode();
} else if (localStorage.getItem("darkLightMode") === "dark") {
    console.log("DARK MODE AT START");
    toDarkMode();
} else if (localStorage.getItem("darkLightMode") === "") {
    console.log("DEFAULT MODE AT START");
    localStorage.setItem("darkLightMode", "light");
    toLightMode();
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
