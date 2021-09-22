import {setup} from './variables.js';

let wizardSimilar = setup.querySelector('.setup-similar-list');
let wizardTemplate = document.querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');

export let render = function (wizards) {
    wizardSimilar.innerHTML = '';

    for (let i = 0; i < 4; i++) {
        wizardSimilar.appendChild(renderWizard(wizards[i]));
    }
    setup.querySelector('.setup-similar').classList.remove('hidden');
};

function renderWizard(wizard) {
    let newWizard = wizardTemplate.cloneNode(true);

    newWizard.querySelector('.setup-similar-label').textContent = wizard.name;
    newWizard.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    newWizard.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return newWizard;
}