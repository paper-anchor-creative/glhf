var gulp      = require( 'gulp' ),
  watch       = require( 'gulp-watch' ),
  uglify      = require( 'gulp-uglify' ),
  sass        = require( 'gulp-sass' ),
  plumber     = require( 'gulp-plumber' ),
  browserSync = require( 'browser-sync' ),
  jshint      = require( 'gulp-jshint' ),
  stylish     = require( 'jshint-stylish' ),
  concat      = require( 'gulp-concat' );
  reload      = browserSync.reload;


// We need to set up an error handler (which gulp-plumber calls).
// Otherwise, Gulp will exit if an error occurs, which is what we don't want.
var onError = function( err ) {
  console.log( 'An error occured:', err );
  this.emit( 'end' );
}


// Our development server that serves all the assets and reloads the browser
// when any of them change (hence the watch calls in it)
gulp.task( 'server', function() {
  browserSync.init({
    // change 'playground' to whatever your local Nginx/Apache vhost is set
    // most commonly 'http://localhost/' or 'http://127.0.0.1/'
    // See http://www.browsersync.io/docs/options/ for more information
    proxy: 'http://localhost/glhf-apparel.com/'
  });

  // Reload the browser if any .php file changes within this directory
  watch( './**/*.php', reload);

  // Recompile sass into CSS whenever we update any of the source files
  watch( './assets/scss/**/*.scss', function() {
    gulp.start( 'scss' );
  });

  // Watch our JavaScript files and report any errors. May ruin your day.
  watch( './assets/js/**/*.js', function() {
    gulp.start( 'scripts', reload );
  })
});


// Processes SASS and reloads browser.
gulp.task( 'scss', function() {
  return gulp.src( './assets/scss/style.scss' )
    .pipe( plumber( { errorHandler: onError } ) )
    .pipe( sass() )
    .pipe( gulp.dest( './build/' ) )
    .pipe( reload( { stream: true } ) );
} );


// Jshint outputs any kind of javascript problems you might have
// Only checks javascript files inside /js directory
gulp.task( 'scripts', function() {
  return gulp.src( './assets/js/**/*.js' )
    .pipe( concat( 'scripts.js' ) )
    .pipe( gulp.dest( './build/' ) );
});


// The default task. When developting just run 'gulp' and this is what will be ran.
// Note the second parameter, those are dependency tasks which need to be done
// before the main function (third parameter) is called.
gulp.task( 'default', [ 'scss', 'scripts', 'server' ], function() {
  console.log('done');
} );
