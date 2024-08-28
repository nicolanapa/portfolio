const themeLink = document.querySelector("#theme-mode");
const aboutMeLink = document.querySelector("#about-me-mode");
const bestProjectsLink = document.querySelector("#best-projects-mode");
const projectsLink = document.querySelector("#projects-mode");
const nodeJsIcon = document.querySelector("#node-js-icon");

function toLightMode() {
    if (aboutMeLink !== null) {
        aboutMeLink.href = "./styles/lightMode/aboutMe.css";
        nodeJsIcon.src = "./images/programmingLanguages/nodejsStackedDarkIcon.svg";
    }
    // When it's in the projects directory
    if (projectsLink === null) {
        themeLink.href = "./styles/lightMode/lightMode.css";
        if (bestProjectsLink !== null) {
            bestProjectsLink.href = "./styles/lightMode/bestProjects.css";
        }
    } else if (projectsLink !== null) {
        themeLink.href = "../styles/lightMode/lightMode.css";
        projectsLink.href = "../styles/lightMode/projects.css";
        if (bestProjectsLink !== null) {
            bestProjectsLink.href = "../styles/lightMode/bestProjects.css";
        }
    }
}

function toDarkMode() {
    if (aboutMeLink !== null) {
        aboutMeLink.href = "./styles/darkMode/aboutMe.css";
        nodeJsIcon.src = "./images/programmingLanguages/nodejsStackedLightIcon.svg";
    }
    // When it's in the projects directory
    if (projectsLink === null) {
        themeLink.href = "./styles/darkMode/darkMode.css";
        if (bestProjectsLink !== null) {
            bestProjectsLink.href = "./styles/darkMode/bestProjects.css";
        }
    } else if (projectsLink !== null) {
        themeLink.href = "../styles/darkMode/darkMode.css";
        projectsLink.href = "../styles/darkMode/projects.css";
        if (bestProjectsLink !== null) {
            bestProjectsLink.href = "../styles/darkMode/bestProjects.css";
        }
    }
}

if (localStorage.getItem("darkLightMode") === "light") {
    localStorage.setItem("darkLightMode", "light");
    toLightMode();
} else if (localStorage.getItem("darkLightMode") === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches) {
    localStorage.setItem("darkLightMode", "dark");
} else if (localStorage.getItem("darkLightMode") === "") {
    localStorage.setItem("darkLightMode", "dark");
}

export { toLightMode, toDarkMode };

