var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');


gulp.task('log', function(){
  gutil.log()
});


gulp.task('sass', function(){
  return gulp.src('assets/styles/custom.sass')
             .pipe(sass({style:'expanded'}))
             .on('error',  gutil.log)
             .pipe(gulp.dest('public/styles'));
});


gulp.task('watch', function(){
  gulp.watch('assets/styles/custome.sass', ['sass']);
});


gulp.task('connect', function(){
  connect.server({
    root: '.',
    livereload: true
  })
});
