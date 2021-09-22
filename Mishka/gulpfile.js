const {src, dest, parallel, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');

function browsersync() {
    browserSync.init({
        server: {baseDir: 'app/'}, // Указываем папку сервера
        online: true
    })
}

function scripts() {
    return src([
        'app/js/menu.js' // Пользовательские скрипты, использующие библиотеку, должны быть подключены в конце
    ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js/'))
        .pipe(browserSync.stream())
}

function styles() {
    return src('app/less/service/style.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions']}))
        .pipe(cleancss(({level: {1: {specialComments: 0}}/*,  format: 'beautify'*/})))
        .pipe(dest('app/css/'))
        .pipe(browserSync.stream())
}

function images() {
    return src('app/picture/**/*.jpg', 'app/picture/**/*.png')
        .pipe(newer('app/picture-opti/'))
        .pipe(imagemin())
        .pipe(dest('app/picture-opti/'))
}

function cleanimg() {
    return del('app/picture-opti/**/*', { force: true }) // Удаляем всё содержимое папки "app/images/dest/"
}

function startwatch() {
    watch('app/**/*.html').on('change', browserSync.reload);
    watch('app/**/less/**/*', styles);
    watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
    watch(['app/picture/**/*.jpg', 'app/picture/**/*.png'], images);
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.cleanimg = cleanimg;

exports.default = parallel(styles, scripts, browsersync, startwatch);