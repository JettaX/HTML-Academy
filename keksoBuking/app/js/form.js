import * as backend from './backend.js';

let form = document.querySelector('.notice__form');
let uploadBlock = form.querySelector('.notice__header');
let title = form.querySelector('.form__element-title');
let address = form.querySelector('.form__element-address');
let type = form.querySelector('.form__element-type');
let price = form.querySelector('.form__element-price');
let checkInOut = form.querySelector('.form__element-check');
let countRooms = form.querySelector('.form__element-rooms');
let countGuests = form.querySelector('.form__element-guests');
let features = form.querySelector('.features');
let description = form.querySelector('.form__element-description');
let photos = form.querySelector('.form__element-photos-apartment');

let controls = form.querySelector('.form__element-controls');
let buttonSubmit = controls.querySelector('.form__submit');
let buttonReset = controls.querySelector('.form__reset');

export function formActivated() {
    form.classList.remove('notice__form--disabled');
    uploadBlock.removeAttribute('disabled');
    title.removeAttribute('disabled');
    address.removeAttribute('disabled');
    type.removeAttribute('disabled');
    price.removeAttribute('disabled');
    checkInOut.removeAttribute('disabled');
    countRooms.removeAttribute('disabled');
    countGuests.removeAttribute('disabled');
    features.removeAttribute('disabled');
    description.removeAttribute('disabled');
    photos.removeAttribute('disabled');
    buttonSubmit.removeAttribute('disabled');
}

form.addEventListener('submit', function (evt) {
    backend.save(new FormData(form), function (response) {
    });
    evt.preventDefault();
});