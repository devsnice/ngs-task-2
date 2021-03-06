'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    csso = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer');
    
var bc = './bower_components/';

gulp.task('js', function() {
  gulp.src('builds/development/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('builds/distribution/js/'))
});

gulp.task('sass', function () {
  gulp.src('builds/development/sass/**/*')
      .pipe(sass())
      .pipe(concat('style.min.css'))
      .pipe(autoprefixer({
            browsers: ["last 5 version", "> 0.1%", "ie 8", "ie 7", "opera 10"],
            cascade: false
      }))
      .pipe(csso())
      .pipe(gulp.dest('builds/distribution/css/'));
});

gulp.task('html', function() {
  gulp.src('builds/development/**/*.html')
    .pipe(gulp.dest('builds/distribution/'))
});

gulp.task('img', function() {
  gulp.src('builds/development/img/**/*')
    .pipe(gulp.dest('builds/distribution/img/'));
});

gulp.task('watch', function() {
  gulp.watch('builds/development/js/**/*.js', ['js']);
  gulp.watch('builds/development/sass/**/*.scss', ['sass']);
  gulp.watch('builds/development/**/*.html', ['html']);
});

gulp.task('libs', function() {
  gulp.src(bc+'jquery/dist/jquery.js')
      .pipe(gulp.dest('./builds/distribution/libs/jquery/'));
});

gulp.task('default', [
  'libs',
  'html',
  'img',
  'js',
  'sass',
  'watch'
]);
