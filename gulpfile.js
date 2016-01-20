var gulp = require('gulp');
var uglify = require('gulp-uglify');
var inlinesource = require('gulp-inline-source');
var imagemin = require('gulp-imagemin');

gulp.task('default', ['minify-js', 'inline-css', 'minify-img']);

gulp.task('minify-js', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('inline-css', function() {
  return gulp.src('src/index.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-img', function() {
  return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});
