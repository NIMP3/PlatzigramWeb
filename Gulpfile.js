var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


//Tarea para procesar sass
gulp.task('styles', function () {
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));
})

//Tarea para generar todos los assets en public
gulp.task('assets',function () {
	gulp
		.src('assets/*')
		.pipe(gulp.dest('public'));
})

//Tarea para procesar el javascript del cliente
gulp.task('scripts', function () {
	browserify('src/index.js')
		.transform(babel)
		.bundle()
		.pipe(source('index.js')) //Pasa de browserify a gulp para seguir procesandolo
		.pipe(rename('app.js'))
		.pipe(gulp.dest('public'))
})

//Lanza diferentes tareas establecidas en el Array
gulp.task('default',['styles','assets','scripts']);