// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

const cardsMarkup = createCards(galleryItems);

function createCards(galleryItems) {
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
    .join('');
}
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onClick);

function onClick(evn) {
  evn.preventDefault();
  if (evn.target.nodeName !== `IMG`) {
    return;
  }

  const instance = SimpleLightbox.create(`
        <img src="${evn.target.dataset.source}" width="800" height="600">
        `);
  instance.show();
}
