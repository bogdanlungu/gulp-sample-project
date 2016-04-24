var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

gulp.task('js', function(){
  gulp.src('src/*.js')
     .pipe(concat('all.js'))
     .pipe(uglify())
     .pipe(gulp.dest('dist'));
});

gulp.task('css', function(){
  gulp.src('src/css/*.css')
     .pipe(minify())
     .pipe(gulp.dest('dist/css'));
});

gulp.task('images', function(){
  gulp.src('src/img/*.png')
     .pipe(imagemin())
     .pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['js', 'css', 'images', 'watch'], function(){
  console.log('done');
});

gulp.task('watch', function(){
  gulp.watch('src/*', ['default']);
});
