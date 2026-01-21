//const grid = document.getElementById("portfolio-grid");

function loadCategory(category) {
    grid.innerHTML = "";

    portfolio[category].forEach((project, index) => {
        const item = document.createElement("figure");
        item.className = "portfolio-item";

        const img = document.createElement("img");
        img.src = project.folder + project.cover;
        img.alt = project.title;

        img.addEventListener("click", () => {
            openLightbox(category, index);
        });

        item.appendChild(img);
        grid.appendChild(item);
    });
}

