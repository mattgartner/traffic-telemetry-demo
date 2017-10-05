// includes and setup
const gulp = require('gulp'),
    inject = require('gulp-inject'),
    lite = require('lite-server'),
    postcss = require('gulp-postcss'),
    cssnano = require('gulp-cssnano'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('autoprefixer'),
    postcssutilities = require('postcss-utilities'),
    size = require('gulp-size'),
    util = require('gulp-util'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    stylelint = require('gulp-stylelint'),
    dest = require('gulp-dest'),
    del = require('del'),
    notify = require('gulp-notify');

const paths = {
    src: 'src/**/*',
    srcHTML: 'src/**/*.html',
    srcCSS: 'src/**/*.css',
    srcJS: 'src/**/*.js',

    tmp: 'tmp',
    tmpIndex: 'tmp/index.html',
    tmpCSS: 'tmp/**/*.css',
    tmpJS: 'tmp/**/*.js',

    dist: 'dist',
    distIndex: 'dist/index.html',
    distCSS: 'dist/**/*.css',
    distJS: 'dist/**/*.js'
};

//tasks
gulp.task('watch', ['copy'], () => {
    gulp.watch(paths.src, ['inject']);
});

gulp.task('default', ['copy']);

//pre-process task (autoprefixer, etc)

//source maps

//move files to tmp server
gulp.task('html', () => {
    return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
});

gulp.task('css', () => {
    return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));
});

gulp.task('js', () => {
    return gulp.src(paths.srcJS).pipe(gulp.dest(paths.tmp));
});

gulp.task('copy', ['html', 'css', 'js']);

//inject relative paths
gulp.task('inject', ['copy'], () => {
    var css = gulp.src(paths.tmpCSS);
    var js = gulp.src(paths.tmpJS);
    return gulp.src(paths.tmpIndex)
        .pipe(inject(css, {
            relative: true
        }))
        .pipe(inject(js, {
            relative: true
        }))
        .pipe(gulp.dest(paths.tmp));
});

//minify
//move files to dist folder
gulp.task('html:dist', () => {
    return gulp.src(paths.srcHTML)
      .pipe(htmlmin())
      .pipe(gulp.dest(paths.dist));
  });
  gulp.task('css:dist', () => {
    return gulp.src(paths.srcCSS)
      .pipe(concat('style.min.css'))
      .pipe(cssnano())
      .pipe(gulp.dest(paths.dist + '/css/'));
  });
  gulp.task('js:dist', () => {
    return gulp.src(paths.srcJS)
        .pipe(concat('script.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dist + '/js/'))
  });
  gulp.task('copy:dist', ['html:dist', 'css:dist', 'js:dist']);
  gulp.task('inject:dist', ['copy:dist'], () => {
    var css = gulp.src(paths.distCSS);
    var js = gulp.src(paths.distJS);
    return gulp.src(paths.distIndex)
      .pipe(inject( css, { relative:true } ))
      .pipe(inject( js, { relative:true } ))
      .pipe(gulp.dest(paths.dist));
  });
  gulp.task('build', ['inject:dist']);


// Clean up
gulp.task('clean', function () {
    del([paths.tmp, paths.dist]);
});

// Size Reports
gulp.task('size:src', function() {
    return gulp.src('src/**/*')
    .pipe(size({
        title: 'src',
        showTotal: true, 
        //showFiles: true,
        pretty: true
    }));
});

gulp.task('size:tmp', function() {
  return gulp.src('tmp/**/*')
    .pipe(size({
        title: 'tmp',
        showTotal: true, 
        //showFiles: true,
        pretty: true
    }));
});

gulp.task('size:dist', function() {
  return gulp.src('tmp/**/*')
    .pipe(size({
        title: 'dist',
        showTotal: true, 
        //showFiles: true,
        pretty: true
    }));
});

gulp.task('sizereport', ['size:src', 'size:tmp', 'size:dist']);
