var gulp = require('gulp'),
    less = require('gulp-less'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleanCSSPlugin = new LessPluginCleanCSS({advanced: true}),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});
    rename = require("gulp-rename");
    server = require('karma').Server;

/*
*    Autoprefix - list
*    https://github.com/ai/browserslist
*/


gulp.task('less', function() {
    gulp.src('./app/assets/less/**/*.less')
        .pipe(less({
            plugins: [autoprefixPlugin, cleanCSSPlugin]
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./app/assets/css/'));
});

gulp.task('js', function() {});

gulp.task('tests', function (done) {
    return new server({
        configFile: require('path').resolve('karma.conf.js'),
        singleRun: true
    }, done).start();
});

gulp.task('watch', function() {
    gulp.watch(['./app/assets/less/**/*.less'], ['less']);
    gulp.watch(['./app/common/**/*.html']);
});

gulp.task('default', ['less','tests','watch']);
