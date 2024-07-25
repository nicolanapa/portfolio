// Use localStorage to keep user preference
// 0 light 1 dark
console.log("darkLightMode.js test");

if (localStorage.getItem("darkLightMode") === "light") {
    console.log("LIGHT MODE AT START");
} else if (localStorage.getItem("darkLightMode") === "dark") {
    console.log("DARK MODE AT START");
} else if (localStorage.getItem("darkLightMode") === "") {
    console.log("DEFAULT MODE AT START");
    localStorage.setItem("darkLightMode", "light");
}

const darkLightModeButton = document.querySelector(".dark-light-mode");

darkLightModeButton.addEventListener("click", () => {
    console.log("clicked!");
    if (localStorage.getItem("darkLightMode") === "light") {
        localStorage.setItem("darkLightMode", "dark");
    } else if (localStorage.getItem("darkLightMode") === "dark") {
        localStorage.setItem("darkLightMode", "light");
    }
});
