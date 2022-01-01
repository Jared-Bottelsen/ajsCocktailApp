let gulp = require('gulp'),
    sass = require('gulp-sass')

gulp.task('hello', function() {
    return new Promise((resolve, reject) => {
        console.log('Hello Jared!');
        resolve();
    });
});

gulp.task('sass', function() {
    return gulp.src('')
})