let gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    del = require('del');

gulp.task('styles', () => {
    return gulp.src('src/app/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('clean', () => {
    return del([
        'dist/css',
    ])
})

gulp.task('default', gulp.series(['clean', 'styles']));

gulp.task('watch', () => {
    gulp.watch('src/app/scss/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
})