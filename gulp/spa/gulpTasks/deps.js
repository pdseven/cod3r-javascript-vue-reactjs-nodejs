const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concact = require('gulp-concat')

gulp.task('deps.css', () => {
  return gulp.src([
    'node_modules/font-awesome/css/font-awesome.css'
  ])
    .pipe(uglifycss({ "uglyComments": true }))
    .pipe(concact('deps.min.css'))
    .pipe(gulp.dest('build/assets/css'))
})
gulp.task('deps.fonts', (done) => {
  return gulp.src(['node_modules/font-awesome/fonts/*.*'])
    .pipe(gulp.dest('build/assets/fonts'))
})

gulp.task('deps', gulp.parallel('deps.css', 'deps.fonts', (done) => {
  done()
}))