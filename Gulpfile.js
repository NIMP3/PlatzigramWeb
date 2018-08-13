var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

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

//Función para
function compile(watch) {
	var bundle = browserify('src/index.js');
	
	if(watch) {
		//Detecta el evento update sobre el archivo que se esta escuchando (index.js)
		bundle = watchify(bundle);
		bundle.on('update', function() {
			console.log('==> Bundling...');
			rebundle();
		})
	}

	//Función para procesar el javascript del cliente
	function rebundle() {
		bundle
			.transform(babel, {presets: ['es2015'], plugins : ['syntax-async-functions','transform-regenerator']})
			.bundle()
			.on('error', function (err){ console.log(err); this.emit('end')}) //callback - Detecta errores y lanza la función
			.pipe(source('index.js')) //Pasa de browserify a gulp para seguir procesandolo
			.pipe(rename('app.js'))
			.pipe(gulp.dest('public'))
	}

	rebundle();
}

//Tarea para construir los elementos del bundle una sola vez
gulp.task('build', function() {
	return compile();
})

//Tarea para observar cambios en el bundle-js y construir si se requiere
gulp.task('watch', function() {
	return compile(true);
})

//Lanza diferentes tareas establecidas en el Array
gulp.task('default',['styles','assets','build']);