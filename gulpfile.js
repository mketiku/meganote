(function() {
  'use strict';
  var gulp = require('gulp');
  var order = require('gulp-order');
  var concat = require('gulp-concat');
  var plumber = require('gulp-plumber');
  var sourcemaps = require('gulp-sourcemaps');
  var babel = require('gulp-babel');
  var connect = require('gulp-connect');

  gulp.task('bundle', bundle);
  gulp.task('watch', watch);
  gulp.task('start-web-server' ,startWebServer)
  gulp.task('default', ['bundle','start-web-server','watch']);
// gulp functions: gulp dest, watch, 
 
var jsFiles = [
//  hold all the jsFiles
        // array of patterns, 
    'app/**/*.js',
    '!app/bower_components/**/*',
    '!app/content/bundle.js'
    // ignore app-bower components  and bundle.js
];
// get everything together 
 function bundle() {
     return gulp.src(jsFiles)
     .pipe(order([
             'app/app.module.js',
             //put main module first followed by other JS files
             'app/**/*.module.js',
             'app/**/*.js',
     ], { base: './' }))
     .pipe(plumber()) //restart gulp on error 
     .pipe(sourcemaps.init())  //let sourcemaps watch this pipe
     .pipe(babel()) //transpile into es5 for browsers
     .pipe(concat('bundle.js')) //smash all js files into bundle.js
     .pipe(sourcemaps.write('')) //emits the .map file for debugging
    //  source maps maintains the original file for console.log errors
    .pipe(babel({
      presets:['es2015']
    }))
    .pipe(gulp.dest('app/content'));
  }

    //   start our web server
  function startWebServer() {
        connect.server({
            root:'app',
            port: 8000
            // serve the server to run from here
        })
  }
  function watch(){
    // watch for changes in certain files and when they change run, a series of tasks
    gulp.watch(['app/**/*','gulpfile.js'],['bundle']);
    // any file in any subdirectory of app
  }
})();