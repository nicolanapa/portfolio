import { toLightMode, toDarkMode } from "./startDarkLightMode.js";

// Use localStorage to keep user preference

console.log("darkLightMode.js test");

const darkLightModeButton = document.querySelector(".dark-light-mode");

darkLightModeButton.addEventListener("click", (Event) => {
    Event.preventDefault();
    console.log("clicked!");

    if (localStorage.getItem("darkLightMode") === "light") {
        localStorage.setItem("darkLightMode", "dark");
        toDarkMode();
    } else if (localStorage.getItem("darkLightMode") === "dark") {
        localStorage.setItem("darkLightMode", "light");
        toLightMode();
    } else {
        console.log(new Error("darkLightMode can't get right Mode"));
    }
});

/*darkLightModeButton.addEventListener(
    "touchstart",
    (Event) => {
        Event.preventDefault();
        console.log("clicked mobile!");

        if (localStorage.getItem("darkLightMode") === "light") {
            localStorage.setItem("darkLightMode", "dark");
            toDarkMode();
        } else if (localStorage.getItem("darkLightMode") === "dark") {
            localStorage.setItem("darkLightMode", "light");
            toLightMode();
        }
    },
    false,
);*/
