var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

var getWizardHeight = function () {
    return 1.337 * wizardWidth;
}

var getFireballSpeed = function (left) {
    if (left) {
        return 5;
    } else {
        return 2;
    }
}

var getWizardX = function (width) {
    return width / 2;
}

var getWizardY = function (height) {
    return height / 3;
}