const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');

gulp.task('build', () => {
  return gulp.src('src/**/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['es2015'],
    }))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('build'));
});

gulp.task('watch',() => {
  gulp.watch('src/**/*.js',['build']);
});

gulp.task('default',['watch']);