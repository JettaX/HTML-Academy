import {getRandomArbitrary} from "./random.js";
import {setup} from './variables.js';

let coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)',
    'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
let fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

let setupPlayer = setup.querySelector('.setup-player');
let setupWizard = setupPlayer.querySelector('.setup-wizard');
let wizardCoat = setupWizard.querySelector('.wizard-coat');
let wizardEyes = setupWizard.querySelector('.wizard-eyes');
let wizardFireballWrap = setupPlayer.querySelector('.setup-fireball-wrap');

export let wizardWatchChanger = {
    onEyesChange: function (color) {
        return color;
    },
    onCoatChange: function (color) {
        return color;
    }
};

wizardCoat.addEventListener('click', function () {
    let newColorCoat = coatColor[getRandomArbitrary(0, coatColor.length)];
    wizardCoat.style.fill = newColorCoat;
    wizardWatchChanger.onCoatChange(newColorCoat);
});

wizardEyes.addEventListener('click', function () {
    let newColorEyes = eyesColor[getRandomArbitrary(0, eyesColor.length)];
    wizardEyes.style.fill = newColorEyes;
    wizardWatchChanger.onEyesChange(newColorEyes);
});

wizardFireballWrap.addEventListener('click', function () {
    let fireColor = fireballColor[getRandomArbitrary(0, fireballColor.length)];
    wizardFireballWrap.style.backgroundColor = fireColor;
    wizardFireballWrap.querySelector('input').value = fireColor;
});