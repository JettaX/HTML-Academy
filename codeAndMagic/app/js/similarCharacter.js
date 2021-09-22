import {wizardWatchChanger} from "./setupCharacter.js";
import {render} from "./render.js";
import {debounce} from "./debounce.js";
import * as backend from "./backend.js";

let data = [];
let coatColor;
let eyesColor;

let getRank = function (wizard) {
    let rank = 0;

    if (wizard.colorCoat === coatColor) {
        rank += 2;
    }

    if (wizard.colorEyes === eyesColor) {
        rank += 1;
    }

    return rank;
};

wizardWatchChanger.onEyesChange = debounce(function (color) {
    eyesColor = color;
    updateWizards();
});

wizardWatchChanger.onCoatChange = debounce(function (color) {
    coatColor = color;
    updateWizards();
});

export let updateWizards = function () {
    render(data.slice().sort(function (left, right) {
        let rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
            rankDiff = data.indexOf(left) - data.indexOf(right);
        }
        return rankDiff;
    }));
};

let successHandler = function (wizards) {
    data = wizards;
    updateWizards();
};

backend.load(successHandler);