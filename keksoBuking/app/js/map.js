import {formActivated} from "./form.js";
import {updatePin} from "./filter.js";

export let map = document.querySelector('.map');
export let mapPins = map.querySelector('.pins-container');

export let fragmentPin = document.createDocumentFragment();

let mapPinMain = map.querySelector('.map__pin--main');
let address = document.querySelector('#address');

let noUpdate = false;

mapPinMain.addEventListener('mousedown', function (evt) {
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

        mapPinMain.style.top = dragBorder(mapPinMain.offsetTop - shift.y, 650, 120);

        mapPinMain.style.left = dragBorder(mapPinMain.offsetLeft - shift.x, 1200, 0);
    };

    let onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        map.classList.remove('map--faded');
        address.value = evt.clientX + ' ' + evt.clientY;
        mapPins.appendChild(fragmentPin);
        formActivated();
        noUpdate === false ? updatePin():'';
        noUpdate = true;

        if (dragged) {
            let onClickPreventDefault = function (evt) {
                evt.preventDefault();
                mapPinMain.removeEventListener('click', onClickPreventDefault)
                map.classList.remove('map--faded');
                address.value = evt.clientX + ' ' + evt.clientY;
                mapPins.appendChild(fragmentPin);
                formActivated();
                noUpdate === false ? updatePin():'';
                noUpdate = true;
            };
            mapPinMain.addEventListener('click', onClickPreventDefault);
        }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function dragBorder(location, maxSize, minSize) {
    if (location > maxSize) {
        return maxSize + 'px';
    } else if (location < minSize) {
        return minSize + 'px';
    } else {
        return location + 'px';
    }
}