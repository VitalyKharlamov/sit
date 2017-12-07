'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var preFixer = require('gulp-autoprefixer');

var bootstrapSass = {
    in: './node_modules/bootstrap-sass/'
};
var source = 'src/';
var fontsDir = source + 'fonts/';

// compile scss
var path = {
    build: {
        css: 'dist/'
    },
    src: {
        style: source + '**/*.scss'
    },
    watch: source + '**/*.scss',
    sassOpts: {
        outputStyle: 'compact',
        errLogToConsole: true,
        includePaths: [bootstrapSass.in + 'assets/stylesheets'],
    },
    clean: './build'
};

gulp.task('sass', function () {
    return gulp.src(path.src.style)
        .pipe(sass(path.sassOpts))
        .pipe(concat('style.css'))
        .pipe(preFixer({
            browsers: ['last 2 versions']
        }))
        //.pipe(cssMin())
        .pipe(gulp.dest(path.build.css))
});

//js
gulp.task('js', function() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        source + '**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'));
});

// fonts
var fonts = {
    in: [source + 'fonts/*.*', bootstrapSass.in + 'assets/fonts/**/*'],
    out: fontsDir
};

gulp.task('default', function(){
    gulp.watch('src/**', ['sass', 'js', 'fonts'])
});