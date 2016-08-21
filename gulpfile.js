var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat');

gulp.task('less', function () {
  return gulp.src('./src/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./www/css'));
});

gulp.task('js', function () {
  return gulp.src('./src/components/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./www/js'));
});

gulp.task('watch', function() {

    // Watch .less files
    gulp.watch('./src/less/*.less', ['less']);
    gulp.watch('./src/components/**/*.less', ['less']);

    // Watch .js files
    gulp.watch('./src/components/**/*.js', ['js']);


});

gulp.task('default', ['less', 'js', 'watch']);