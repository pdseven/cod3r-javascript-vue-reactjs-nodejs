const gulp = require('gulp');

// gulp.task('copiar', ['antes1', 'antes2'], () => {
//   console.log('Copiar!!!')
// })

gulp.task('antes1', (done) => {
  console.log('Antes 1!!!')
  done()
});

gulp.task('antes2', (done) => {
  console.log('Antes 2!!!')
  done()
});

gulp.task('copiar', gulp.series('antes1', 'antes2', (done) => {
  // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) // apenas os arquivos específicos
  // gulp.src('pastaA/*') //todos os arquivos da pasta
  gulp.src('pastaA/**/*') // arquivos da pasta e subpasta
      // .pipe(transformacao1())
      // .pipe(transformacao2())
      .pipe(gulp.dest('pastaB'))
  done()
}));

gulp.task('fim', (done) => {
  console.log('FIM!!!')
  done()
});

gulp.task('default', gulp.series('copiar', 'fim', (done) => {
  done()
}));