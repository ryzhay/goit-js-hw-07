import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const itemsMarkup = createMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', itemsMarkup);
gallery.addEventListener('click', onItemClick);

function createMarkup(galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li class='gallery__item'>
        <a class='gallery__link' href='${original}'>
          <img
            class='gallery__image'
            src='${preview}'
            data-source='${original}'
            alt='${description}'
          />
        </a>
      </li>`;
    }).join('');
};

function onItemClick(event) {
    event.preventDefault();

    const instance = basicLightbox.create(`
    <img src='${event.target.dataset.source}' width="800" height="600">
`);
instance.show();

gallery.addEventListener('keydown', (event) => {
  if(event.code === 'Escape') {
      instance.close();
  }
  });

};
console.log(galleryItems);
