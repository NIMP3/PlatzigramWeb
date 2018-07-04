var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');


//Tarea para procesar sass
gulp.task('styles', function () {
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));
})

//Lanza diferentes tareas establecidas en el Array
gulp.task('default',['styles']);