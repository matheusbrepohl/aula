var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');


//task para o sass
gulp.task('sass', function(){
    return sass('sass/**/*.sass').pipe(gulp.dest('css'));
});