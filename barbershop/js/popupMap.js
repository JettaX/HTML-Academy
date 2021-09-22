var mapLink = document.querySelector(".contactsButtonMap");

var mapPopup = document.querySelector(".modalMap");
var mapClose = mapPopup.querySelector(".modalClose");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modalShow");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modalShow");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modalShow")) {
            mapPopup.classList.remove("modalShow");
        }
    }
});