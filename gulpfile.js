const uglify = require('gulp-uglify')
const eslint = require('gulp-eslint')

gulp.task('default', 'travis')

gulp.task('reload')



gulp.task('travis', ['build', testServerJS'], () => {
  process.exit(0)
})
