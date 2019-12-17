const { watch, src, dest, series, parallel } = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const pug = require('gulp-pug');
const browsersync = require('browser-sync').create();

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist"
    },
    port: 3000
  });
  done();
}

function watchFiles() {
  watch("./src/*.sass", sassTranspile);
  watch("./src/*.pug", turnPug);
  watch("./src/*.js", jsUglify);
  watch("./dist/*", browserSyncReload);
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function sassTranspile() {
  return src('./src/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist'));
}

function jsUglify() {
  return src('./src/*.js')
    .pipe(babel({ presets: ['@babel/env'] }))
    .pipe(uglify())
    .pipe(dest('./dist'));
}

function turnPug() {
  return src('./src/*.pug') 
    .pipe(pug())
    .pipe(dest('./dist')); 
}

const monitor = parallel(watchFiles, browserSync);

exports.monitor = monitor;
exports.default = series(turnPug, sassTranspile, jsUglify);
