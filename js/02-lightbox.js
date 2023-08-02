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
      <img class='gallery__image' 
      src='${preview}' 
      alt='${description}' />
   </a>
</li>`;
    }).join('');
};

function onItemClick(event) {
    event.preventDefault();

    let lightbox = new SimpleLightbox('.gallery a', { 
        captions: 'true',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
     });
     lightbox.open();
}
   

console.log(galleryItems);
