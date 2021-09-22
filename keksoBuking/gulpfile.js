const {src, dest, parallel, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();

function browsersync() {
    browserSync.init({
        server: {baseDir: 'app'}, // Указываем папку сервера
        online: true
    })
}

function scripts() {
    return src('app/js/*js').pipe(browserSync.stream());
}

function startwatch() {
    watch('app/*.html').on('change', browserSync.reload);
    watch('app/js/*.js', scripts);
}

exports.browsersync = browsersync;
exports.scripts = scripts;

exports.default = parallel(scripts, browsersync, startwatch)