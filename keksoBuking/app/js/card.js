import {map} from "./map.js";

let mapCardTemplate = document.querySelector('#card-template').content.querySelector('.map__card');

export function generateCard(card) {
    let mapElement = mapCardTemplate.cloneNode(true);

    mapElement.querySelector('.popup__title').textContent = card.offer.title;
    mapElement.querySelector('.popup__text--address').textContent = card.offer.address;
    mapElement.querySelector('.popup__text--price').textContent = card.offer.price + '₽/ночь';
    mapElement.querySelector('.popup__type').textContent = card.offer.type;
    mapElement.querySelector('.popup__text--capacity').textContent =
        card.offer.rooms + ' комнаты для ' + card.offer.guests + ' гостей.';
    mapElement.querySelector('.popup__text--time').textContent =
        'Заезд после ' + card.offer.checkin + ', выезд до ' + card.offer.checkout + '.';
    //mapElement.querySelector('.popup__features').textContent = card.features;
    mapElement.querySelector('.popup__description').textContent = card.offer.description;
    mapElement.querySelector('.popup__avatar').src = card.author.avatar;

    mapElement.querySelector('.popup__close').addEventListener('click', function () {
        map.removeChild(map.querySelector('.map__card'));
    });

    let fragment = document.createDocumentFragment();
    for (let i = 0; i < card.offer.photos.length; i++) {
        fragment.appendChild(addPicture(card.offer.photos[i],
            mapElement.querySelector('.popup__photos li')));
    }

    mapElement.querySelector('.popup__photos').appendChild(fragment);

    return mapElement;
}

function addPicture(picture, pictureLocate) {
    let pinElement = pictureLocate.cloneNode(true);

    pinElement.querySelector('img').src = picture;

    return pinElement;
}