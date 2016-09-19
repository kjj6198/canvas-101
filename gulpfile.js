var gulp    = require('gulp');
var connect = require('gulp-connect');
var sass    = require('gulp-sass');

gulp.task('connect', () => {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('livereload', () => {
  return gulp.src('./**/*.html')
             .pipe(connect.reload())
});

gulp.task('watch', () => {
  gulp.watch(['./effective-input/**/*.*'], ['livereload', 'sass']);
});

gulp.task('sass', () => {
  return gulp.src('./effective-input/css/*.scss')
		         .pipe(sass().on('error', sass.logError))
		         .pipe(gulp.dest('./effective-input/dist'));
})

gulp.task('default', ['connect', 'watch']);
