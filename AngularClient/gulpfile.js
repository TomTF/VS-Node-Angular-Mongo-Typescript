/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('copy-dev-libs', function () {
    return gulp
        .src([
            "node_modules/angular/angular.js",
            "node_modules/angular-route/angular-route.js"])
        .pipe(gulp.dest("./App/libs"));
});