const gulp = require('gulp');
const eslint = require('eslint');

gulp.task('first_task', () => {
  console.log('FIRST TASK');
});

gulp.task('default', ['first_task'], () => {
  console.log('SECOND TASK');
});

gulp.task('lint', () => {
  gulp.src('./hello.js')
  .pipe(eslint())
  .pipe(eslint.format())
});
