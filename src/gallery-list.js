import images from './gallery-items.js';

const list = document.querySelector('.js-gallery');
const galleryList = createListImages(images);

function createListImages(images) {
    return images
        .map(({ preview, original, description }) => {
            return
            `<li class="gallery__item">
      <a
    class="gallery__link"
    href="${original}"
        >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
        />
      </a>
      </li>    
           `;
        }).join('');
    
};

list.insertAdjacentHTML('beforeend', galleryList);
