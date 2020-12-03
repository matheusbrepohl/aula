//antigo

//var gulp = require('gulp');
//var sass = require('gulp-ruby-sass');
//var watch = require('gulp-watch');

//task para o sass
//gulp.task('sass', function() {
//    return sass('sass/**/*.sass').pipe(gulp.dest('css'));
//});

const gulp = require('gulp');
const sass = require('gulp-sass');
const rubySass = require('gulp-ruby-sass');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('./sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/**/*.sass', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

