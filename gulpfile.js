var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify')
var babelify = require('babelify');
var buffer = require('vinyl-buffer')

gulp.task('index', function() {
  var b = browserify(
    {entries: './jsx/index.js', debug: true});
  return b.transform("babelify",
    {presets: ["react"]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init( {loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./scripts/'));
});

gulp.task('default',['index']);
