let load = function (onLoad, onError) {
    let URL = 'https://javascript.pages.academy/keksobooking/data';
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
            onLoad(xhr.response);
        } else {
            onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
    });

    xhr.timeout = 10000;

    xhr.open('GET', URL);
    xhr.send();
}

function save(data, onLoad, onError) {
    let URL = 'https://javascript.pages.academy/keksobooking';
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
        onLoad(xhr.response);
        console.log(xhr.response);
        console.log(xhr.status);
        console.log(xhr.onerror);
    });

    xhr.open('POST', URL);
    xhr.send(data);
}

export {
    load, save
};