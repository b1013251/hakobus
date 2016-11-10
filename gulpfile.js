var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');

gulp.task('index', function() {
  var b = browserify(
    {entries: './jsx/index.js'});
  return b.transform("babelify",
    {presets: ["react"]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./scripts/'));
});

gulp.task('default',['index']);
