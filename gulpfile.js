var gulp =  require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('./source/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./source/sass'));
});