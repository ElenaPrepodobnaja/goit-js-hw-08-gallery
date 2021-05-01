import images from './gallery-items.js';

const list = document.querySelector('.js-gallery');
const galleryList = createListImages(images);

const modalWindow = document.querySelector('.lightbox');
const modalImageEl = document.querySelector('.lightbox__image');

const closeModalBtn = document.querySelector('.lightbox__button');
const backdropEl = document.querySelector('.lightbox__overlay');

list.insertAdjacentHTML('beforeend', galleryList);
function createListImages(images) {
    return images
      .map(({ preview, original, description }) => {
          return `<li class="gallery__item">
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

list.addEventListener('click', onImageLinkClick);

function onImageLinkClick(event) {
  
  event.preventDefault();
 if (event.target.nodeName !== 'IMG') {
    return;
  }
  if (event.target.nodeName === "IMG") {
    modalWindow.classList.add("is-open");
    modalImageEl.src = event.target.getAttribute("data-source");
    modalImageEl.alt = event.target.alt;
  }
    
  window.addEventListener('keydown', arrowImagesSwitch);
  
}


closeModalBtn.addEventListener('click', onCloseBtnClick);

window.addEventListener('keydown', onCloseBtnClick);

backdropEl.addEventListener('click', onCloseBtnClick);
function onCloseBtnClick(event) {
  if (event.code === 'Escape'|| event.currentTarget === event.target) {
    
    modalWindow.classList.remove('is-open');
    modalImageEl.src = '';
  }

}


function arrowImagesSwitch(e) {
  const imagesSrcArray = images.map(image => image.original);
  const indexOfCurrentImg = imagesSrcArray.indexOf(modalImageEl.src);

  if (e.code === 'ArrowRight') {
    if (indexOfCurrentImg < imagesSrcArray.length - 1)
      modalImageEl.src = imagesSrcArray[Number(indexOfCurrentImg) + 1];
  }

  if (e.code === 'ArrowLeft') {
    if (indexOfCurrentImg > 0) {
      modalImageEl.src = imagesSrcArray[Number(indexOfCurrentImg) - 1];
    }
  }
}
