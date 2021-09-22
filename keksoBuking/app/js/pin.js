import {map} from "./map.js";
import {fragmentPin, mapPins} from "./map.js";
import {generateCard} from "./card.js";

let mapPinTemplate = document.querySelector('#card-template').content.querySelector('.map__pin');
let fragmentMap = document.createDocumentFragment();

let drug = false;

export let render = function (pins) {

    if (drug === true) {
        mapPins.innerHTML = '';
    }

    for (let i = 0; i < pins.length; i++) {
        fragmentPin.appendChild(generatePin(pins[i]));
    }

    drug = true;
};

function generatePin(pin) {
    let pinElement = mapPinTemplate.cloneNode(true);

    pinElement.querySelector('img').src = pin.author.avatar;
    pinElement.querySelector('img').alt = pin.offer.title;
    pinElement.style = 'left: ' + pin.location.x + 'px; top: ' + pin.location.y + 'px;';
    pinElement.addEventListener('click', function () {
        fragmentMap.appendChild(generateCard(pin));
        map.appendChild(fragmentMap);
    });
    return pinElement;
}