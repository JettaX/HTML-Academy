import * as backend from './backend.js';
import {setup} from "./variables.js";

let setupOpen = document.querySelector('.setup-open');
let setupClose = document.querySelector('.setup-close');

function openPopup() {
    setup.classList.remove('hidden');
}

function closePopup() {
    setup.classList.add('hidden');
}

setupOpen.addEventListener('click', function () {
    openPopup();
});

setupClose.addEventListener('click', function () {
    closePopup();
});

document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        closePopup();
    }
});

setupOpen.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
        openPopup();
    }
});

let userPicture = document.querySelector('.upload');

userPicture.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    let startCoords = {
        x: evt.clientX,
        y: evt.clientY
    };

    let dragged = false;

    let onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        dragged = true;

        let shift = {
            x: startCoords.x - moveEvt.clientX,
            y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
            x: moveEvt.clientX,
            y: moveEvt.clientY
        };

        setup.style.top = (setup.offsetTop - shift.y) + 'px';
        setup.style.left = (setup.offsetLeft - shift.x) + 'px';

    };

    let onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        if (dragged) {
            let onClickPreventDefault = function (evt) {
                evt.preventDefault();
                userPicture.removeEventListener('click', onClickPreventDefault)
            };
            userPicture.addEventListener('click', onClickPreventDefault);
        }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

let form = document.querySelector('.setup-wizard-form');

form.addEventListener('submit', function (evt) {
    backend.save(new FormData(form), function (response) {
        closePopup();
    });
    evt.preventDefault();
});