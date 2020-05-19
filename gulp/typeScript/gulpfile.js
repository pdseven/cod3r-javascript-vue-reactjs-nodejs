const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.js')
const concat = require('gulp-concat')
const ugligy = require('gulp-uglify')

gulp.task('default', () => {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('build'))
    .pipe(ugligy()) //minifica
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))
})