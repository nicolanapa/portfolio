const themeLink = document.querySelector("#theme-mode");
const aboutMeLink = document.querySelector("#about-me-mode");
const bestProjectsLink = document.querySelector("#best-projects-mode");
const projectsLink = document.querySelector("#projects-mode");

function toLightMode() {
    console.log("SWITCHING TO LIGHT MODE");

    if (aboutMeLink !== null) {
        aboutMeLink.href = "./styles/lightMode/aboutMe.css";
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
    console.log("SWITCHING TO DARK MODE");

    if (aboutMeLink !== null) {
        aboutMeLink.href = "./styles/darkMode/aboutMe.css";
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
    console.log("LIGHT MODE AT START");
    localStorage.setItem("darkLightMode", "light");
    toLightMode();
} else if (localStorage.getItem("darkLightMode") === "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches) {
    console.log("DARK MODE AT START");
    localStorage.setItem("darkLightMode", "dark");
} else if (localStorage.getItem("darkLightMode") === "") {
    console.log("DEFAULT MODE AT START");
    localStorage.setItem("darkLightMode", "dark");
}

export { toLightMode, toDarkMode };

