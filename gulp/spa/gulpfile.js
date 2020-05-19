const gulp = require('gulp')
const util = require('gulp-util')
// const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', gulp.series('deps', 'app', 'servidor', (done) => {
  // if(util.env.production) {
  //   sequence('deps', 'app')
  // }
  done()
}))