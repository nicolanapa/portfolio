function loadRandomProject(e) {
    e.preventDefault();

    const allLinks = ["todoList", "weatherApp", "ticTacToe", "battleShip", "memoryCard"];
    let randomNumber = Math.floor(Math.random() * allLinks.length);
    let currentSubDomain = window.location.host.split(".")[0];

    //console.log(currentSubDomain);
    alert("WARNING: If nothing loads then your browser might have blocked the page/popup");

    window.open(
        (currentSubDomain === "nicolanapa"
            ? "https://nicolanapa.duckdns.org/projects/"
            : "https://development.nicolanapa.duckdns.org/projects/") +
            allLinks[randomNumber] +
            ".html",
    );
}

const randomProjectButton = document.querySelectorAll(".random-project");

for (let i = 0; i < 2; i++) {
    randomProjectButton[i].addEventListener("click", loadRandomProject);
}

