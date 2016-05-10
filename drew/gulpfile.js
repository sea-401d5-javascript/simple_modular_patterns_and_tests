const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
// const watch = require('gulp-eslint');
//
// gulp.task('watch', () => {
//   gulp.src
// })

gulp.task('default', ['mocha', 'lint']);

gulp.task('mocha', () => {
  return gulp.src('./test/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint', () => {
  gulp.src(['./*.js', './test/*.js' ])
    .pipe(eslint({}))
    .pipe(eslint.format())
});
