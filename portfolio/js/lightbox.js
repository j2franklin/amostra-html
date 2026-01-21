const lightbox = document.getElementById("lightbox");
const carouselImage = document.getElementById("carousel-image");
const thumbnails = document.getElementById("thumbnails");

let currentImages = [];
let currentIndex = 0;

function openLightbox(category, projectIndex) {
    const project = portfolio[category][projectIndex];

    currentImages = project.images.map(img => project.folder + img);
    currentIndex = 0;

    renderCarousel();
    renderThumbnails();

    lightbox.classList.remove("hidden");

    lightbox.classList.remove("hidden");
    document.body.classList.add("lightbox-open");

    document.querySelector(".close").onclick = () => {
        lightbox.classList.add("hidden");
        document.body.classList.remove("lightbox-open");
    };
}

function renderCarousel() {
    carouselImage.src = currentImages[currentIndex];
}

function renderThumbnails() {
    thumbnails.innerHTML = "";

    currentImages.forEach((src, index) => {
        const thumb = document.createElement("img");
        thumb.src = src;

        thumb.addEventListener("click", () => {
            currentIndex = index;
            renderCarousel();
        });

        thumbnails.appendChild(thumb);
    });
}

document.querySelector(".prev").onclick = () => {
    currentIndex =
        (currentIndex - 1 + currentImages.length) % currentImages.length;
    renderCarousel();
};

document.querySelector(".next").onclick = () => {
    currentIndex =
        (currentIndex + 1) % currentImages.length;
    renderCarousel();
};

document.querySelector(".close").onclick = () => {
    lightbox.classList.add("hidden");
};


