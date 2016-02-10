/**
 * Created by dolgolevich on 10.02.2016.
 */
var gulp        = require('gulp');
    concat      = require('gulp-concat');
    uglify      = require('gulp-uglify');
    inject      = require('gulp-inject');
    ngAnnotate  = require('gulp-ng-annotate');

gulp.task('copylib',function(){
    gulp.src('bower_components/**/*.min.js')
        .pipe(gulp.dest('src/libs'));
});

gulp.task('js', function () {
    gulp.src(['./src/app/*.js', './src/app/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./src'));
});

gulp.task('index',function(){
    gulp.src('./src/*.html')
        .pipe(inject(gulp.src(
            ['./bower_components/**/*.min.js', './src/*.js']
            , {read: false}), {relative: true}))
        .pipe(gulp.dest('./src'));
});

gulp.task('watch', ['js'], function () {
    gulp.watch(['./src/app/*.js', './src/app/**/*.js'], ['js']);
});