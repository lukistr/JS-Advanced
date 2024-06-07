function create(words) {
    const parrentDiv = document.getElementById("content");
    for (let word of words) {
        const createDiv = document.createElement("div");
        const createP = document.createElement("p");
        createP.textContent = word;
        createP.classList = "hidden";
        createP.style.display = "none";
        createDiv.id = word;
        createDiv.addEventListener('click', () => {
            if (createP.classList.contains("hidden")) {
                createP.classList.remove("hidden");
                createP.style.display = "block";
            } else {
                createP.classList.add("hidden");
                createP.style.display = "none";
            }
        });
        createDiv.appendChild(createP);
        parrentDiv.appendChild(createDiv);
    }
}