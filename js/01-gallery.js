import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageContainer = document.querySelector(".gallery");

imageContainer.insertAdjacentHTML(
    "beforeend",
    imageGalleryCreation(galleryItems)
);

function imageGalleryCreation(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>`;
        })
        .join("");
}

imageContainer.addEventListener("click", onImageClick);

function onImageClick(e) {
    e.preventDefault();

    console.log(e);

    if (e.target.nodeName !== "IMG") {
        return;
    }
    
    const instance = basicLightbox.create(`
    <img src='${e.target.dataset.source}' width="1200">
    `);

    instance.show();

    imageContainer.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
            instance.close();
        }
    });
}
