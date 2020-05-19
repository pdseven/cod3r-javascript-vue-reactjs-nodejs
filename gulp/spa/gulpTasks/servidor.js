const gulp = require('gulp')

gulp.task('monitorarMudancas', (done) => {

  done()
})

gulp.task('servidor', gulp.series('monitorarMudancas', (done) => {

  done()
}))