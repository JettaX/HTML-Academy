let DEBOUNCE_INTERVAL = 300; // ms

export let debounce = function (fun) {
    let lastTimeout = null;

    return function () {
        let args = arguments;
        if (lastTimeout) {
            window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(function () {
            fun.apply(null, args);
        }, DEBOUNCE_INTERVAL);
    };
}