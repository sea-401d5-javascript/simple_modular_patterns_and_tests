/*eslint-env es6*/

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

gulp.task('default',['Mochai','lint','watch'],()=> {
  console.log('All tests run, files watched');
});

gulp.task('Mochai', ()=> {
  gulp.src('./test/greetTest.js')
  .pipe(mocha());
});

gulp.task('lint', ()=> {
  gulp.src([
    './greet.js',
    './gulpfile.js',
    './test/greetTest.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.results(function(results) {
    console.log('Total results: ' + results.length);
    console.log('Total warnings: ' + results.warningCount);
    console.log('Total errors: ' + results.errorCount);
  }));
  console.log('Finshed linting');
});

gulp.task('watch', ()=>{
  gulp.watch(['./greet.js','./test/greetTest.js','./gulpfile.js'], ['lint']);
});
