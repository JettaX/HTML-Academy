import {render} from "./pin.js";
import {load} from "./backend.js";
import {mapPins, fragmentPin} from "./map.js";

let filter = document.querySelector('.map__filters');
let housingType = filter.querySelector('#housing-type');
let housingPrice = filter.querySelector('#housing-price');
let housingRooms = filter.querySelector('#housing-rooms');
let housingGuests = filter.querySelector('#housing-guests');
let housingFeatures = filter.querySelector('#housing-features');

let wifi = housingFeatures.querySelector('#filter-wifi');
let dishwasher = housingFeatures.querySelector('#filter-dishwasher');
let parking = housingFeatures.querySelector('#filter-parking');
let washer = housingFeatures.querySelector('#filter-washer');
let elevator = housingFeatures.querySelector('#filter-elevator');
let conditioner = housingFeatures.querySelector('#filter-conditioner');

let data = [];
let dataInner = [];

filter.addEventListener('change', function() {
    dataInner = data;
    check();
    console.log(housingFeatures.checked);
    updatePin();
    mapPins.appendChild(fragmentPin);
});

function check() {
    housingTypeCheck();
    housingRoomsCheck();
    housingGuestsCheck();
    housingPriceCheck();
    featuresCheck(wifi, 'wifi');
    featuresCheck(dishwasher, 'dishwasher');
    featuresCheck(parking, 'parking');
    featuresCheck(washer, 'washer');
    featuresCheck(elevator, 'elevator');
    featuresCheck(conditioner, 'conditioner');
}

function featuresCheck(link, features) {
    if (link.checked) {
        dataInner = dataInner.filter(pin => pin.offer.features.indexOf(features) >= 0);
    }
}

function housingTypeCheck() {
    if (housingType.value === 'any') return;
    dataInner = dataInner.filter(pin => housingType.value === pin.offer.type);
}

function housingRoomsCheck() {
    if (housingRooms.value === 'any') return;
    dataInner = dataInner.filter(pin => housingRooms.value == pin.offer.rooms);
}

function housingGuestsCheck() {
    if (housingGuests.value === 'any') return;
    dataInner = dataInner.filter(pin => housingGuests.value == pin.offer.guests);
}

function housingPriceCheck() {
    if (housingPrice.value === 'any') return;
    dataInner = dataInner.filter(function (pin) {
        if (housingPrice.value === 'middle') {
            return pin.offer.price >= 10000 && pin.offer.price <= 50000;
        } else if (housingPrice.value === 'low') {
            return pin.offer.price < 10000;
        } else {
            return pin.offer.price > 500000;
        }
    });
}

export let updatePin = function () {
    render(dataInner.slice());
};

let successHandler = function (pins) {
    data = pins;
    dataInner = pins;
    updatePin();
};

load(successHandler);