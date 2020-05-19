const gulp = require('gulp')
const concat = require('gulp-concat')
// const ugligy = require('gulp-uglify')
const babel = require('gulp-babel')


gulp.task('default', (done) => {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      minified: true, // minificar
      comments: false,
      presets: ["env"]
    }))
    // .pipe(ugligy()) //minificar
    .on('erro', function (err) {console.log(err)})
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))
  done()
})