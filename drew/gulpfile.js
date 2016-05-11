const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
const watch = require('gulp-watch');

gulp.task('watch', function () {
    gulp.watch(['./*.js', './test/*.js' ], ['mocha', 'lint'])
});

gulp.task('default', ['mocha', 'lint', 'watch']);

gulp.task('mocha', () => {
  return gulp.src('./test/*.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('lint', () => {
  gulp.src(['./*.js', './test/*.js' ])
    .pipe(eslint({
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": 2
    }
}
))
    .pipe(eslint.format())
});
