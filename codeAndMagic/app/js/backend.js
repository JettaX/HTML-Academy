let load = function (onLoad, onError) {
    let URL = 'https://javascript.pages.academy/code-and-magick/data';
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
            onLoad(xhr.response);
        } else {
            onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
    });

    xhr.timeout = 1000;

    xhr.open('GET', URL);
    xhr.send();
};

function save (data, onLoad, onError) {
    let URL = 'https://javascript.pages.academy/code-and-magick';
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
        onLoad(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send(data);
}

export {
    load, save
};