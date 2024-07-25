const themeLink = document.querySelector("#theme-mode");
const aboutMeLink = document.querySelector("#about-me-mode");

function toLightMode() {
    console.log("SWITCHING TO LIGHT MODE");

    themeLink.href = "./styles/lightMode/lightMode.css";
    if (aboutMeLink !== null) {
        aboutMeLink.href = "./styles/lightMode/aboutMe.css";
    }
}

function toDarkMode() {
    console.log("SWITCHING TO DARK MODE");

    themeLink.href = "./styles/darkMode/darkMode.css";
    if (aboutMeLink !== null) {
        aboutMeLink.href = "./styles/darkMode/aboutMe.css";
    }
}

if (localStorage.getItem("darkLightMode") === "light") {
    console.log("LIGHT MODE AT START");
    toLightMode();
} else if (localStorage.getItem("darkLightMode") === "dark") {
    console.log("DARK MODE AT START");
    toDarkMode();
} else if (localStorage.getItem("darkLightMode") === "") {
    console.log("DEFAULT MODE AT START");
    localStorage.setItem("darkLightMode", "dark");
}

export { toLightMode, toDarkMode };

