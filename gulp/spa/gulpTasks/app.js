const gulp = require('gulp')

gulp.task('app.html', (done) => {

  done()
})
gulp.task('app.css', (done) => {

  done()
})
gulp.task('app.js', (done) => {

  done()
})
gulp.task('app.imgs', (done) => {

  done()
})

gulp.task('app', gulp.series('app.html', 'app.css', 'app.js', 'app.imgs', (done) => {
  done()
}))