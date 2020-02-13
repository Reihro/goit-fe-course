"use strict";

// Создание галереи.
import image from "./gallery-items.js";
const refs = {
  gallery: document.querySelector("ul.gallery"),
  lightBox: document.querySelector("div.lightbox"),
  modalWindow: document.querySelector("div.js-lightbox"),
  imgLightBox: document.querySelector("img.lightbox__image")
};
function createGalleryUI() {
  const itemList = image.map(({ preview, original, description }) =>
    createGalleryImg(preview, original, description)
  );
  for (const item of itemList) {
    refs.gallery.insertAdjacentHTML("beforeend", item);
  }
}
function createGalleryImg(preview, original, description) {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    hrefs.=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
  </li>`;
}
createGalleryUI();
refs.gallery.addEventListener("click", getOriginalImage);
refs.modalWindow.addEventListener("click", shutClick);

// Открытие модального окна по клику на элементе галереи.
function getOriginalImage(img) {
  img.preventDefault();
  const image = img.target;
  openModalWindow(image.dataset.source, image.alt);
}

// Подмена значения атрибута src элемента img.lightbox__image.
function openModalWindow(link, alt) {
  refs.lightBox.classList.add("is-open");
  refs.imgLightBox.src = link;
  refs.imgLightBox.alt = alt;
}

// Закрытие модального окна по:
// клику на кнопку button[data-action="close-modal"]; клику на div.lightbox__overlay;
function shutClick(click) {
  if (
    click.target ===
      document.querySelector('button[data-action="close-lightbox"]') ||
    click.target === document.querySelector("div.lightbox__content")
  ) {
    closeModalWindow();
  }
}
// нажатию клавиши ESC.
document.addEventListener("keydown", shutKey);
function shutKey() {
  if (event.keyCode === 27) {
    closeModalWindow();
  }
}

// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
document.addEventListener("keydown", galleryScroll);
const imgOriginal = image.map(({ original }) => original);
const imgDescription = image.map(({ description }) => description);
function galleryScroll() {
  let i = imgOriginal.indexOf(refs.imgLightBox.src);
  if (event.keyCode === 39) {
    refs.imgLightBox.src = imgOriginal[i + 1];
    refs.imgLightBox.alt = imgDescription[i + 1];
  }
  if (event.keyCode === 37) {
    refs.imgLightBox.src = imgOriginal[i - 1];
    refs.imgLightBox.alt = imgDescription[i - 1];
  }
}

// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
function closeModalWindow() {
  refs.lightBox.classList.remove("is-open");
  refs.imgLightBox.alt = "";
  refs.imgLightBox.src = "";
}