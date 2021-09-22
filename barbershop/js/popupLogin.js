var link = document.querySelector(".loginLink");

var popup = document.querySelector(".modalLogin");
var close = popup.querySelector(".modalClose");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modalShow");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modalShow");
    popup.classList.remove("modalError");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove("modalError");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modalError");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modalShow")) {
            popup.classList.remove("modalShow");
            popup.classList.remove("modalError");
        }
    }
});