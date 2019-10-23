//общие плагины
const gulp = require('gulp');
const rename = require('gulp-rename');
const pipeline = require('readable-stream').pipeline;
//плагины scc-css
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
//min.js
const uglify = require('gulp-uglify');
//server
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');


function sync(done) {
  browserSync.init({
    server: {
      baseDir: "build"
    },
    port: 3000
  });
  done();
}

function browerReload(done) {
  browserSync.reload();
  done();
}

function watchFiles() {
  gulp.watch("app/**/*", browerReload);
}

function imgMin (done){
    gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/img/'))
        .pipe(browserSync.stream());
        done();
}

//добавить фукцию или task для конвертации и сжатия scss

function scss_css(done) {

  gulp.src('app/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsole: true
      // outputStyle: 'compressed'
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      cscade: false
    }))
    .pipe(cleancss())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe( gulp.dest('./build/css/') )
    .pipe(browserSync.stream());

  done();
}

//min Css
// function cleanss(done) {
//     return gulp.src("app/css/*.css")
//     .pipe(autoprefixer({
//       overrideBrowserslist: ['last 10 versions'],
//       cscade: false
//     }))
//     .pipe(cleancss())
//     .pipe(gulp.dest('build/css/'))
//     .pipe(browserSync.stream());
//     done();
//   }

function compress () {
    return pipeline(
            gulp.src('app/js/*.js'),
            uglify(),
            rename({suffix: '.min'}),
            gulp.dest('build/js/'),
            browserSync.stream());
          }

function watchFiless() {
  gulp.watch("**/*.html", browerReload);
  gulp.watch("app/scss/*.scss",scss_css );
  gulp.watch("app/img/*", imgMin);
  // gulp.watch("app/css/*.css", cleanss);
  gulp.watch("app/js/*.js", compress);
}

gulp.task('default', gulp.series(scss_css , imgMin, compress, gulp.parallel(watchFiless, sync)));
