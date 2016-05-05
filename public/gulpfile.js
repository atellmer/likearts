var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	rename = require('gulp-rename'),
	connect = require('gulp-connect'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');


var path = {
	root: 'client/',
	app: function () {
		return this.root + 'app/'
	},
	components: function () {
		return this.app() + 'components/'
	},
	stylesheets: function () {
		return this.root + 'stylesheets/'
	},
	dist: function () {
		return this.root + 'dist/'
	}
}

//connect
gulp.task('connect', function () {
	connect.server({
		root: 'client',
		port: 3000,
		livereload: true
	});
});

//js
gulp.task('scripts', function () {
	return gulp.src([
		path.app() + '**/*.module.js',
		path.app() + '**/*.config.js',
		path.app() + '**/*.factory.js',
		path.app() + '**/*.service.js',
		path.app() + '**/*.directive.js',
		path.app() + '**/*.controller.js'
	])
		.pipe(concat('bundle.js'))
		.pipe(uglify())
		.pipe(rename('bundle.min.js'))
		.pipe(gulp.dest(path.dist()))
		.pipe(connect.reload());
});

//stylus
gulp.task('stylus', function () {
	return gulp.src([
				path.stylesheets() + '**/*.styl',
				path.components() + '**/*.styl'
			])
		.pipe(concat('bundle.styl'))
		.pipe(stylus({
			use: [nib()],
			compress: true
		}))
		.pipe(rename('bundle.min.css'))
		.pipe(gulp.dest(path.dist()))
		.pipe(connect.reload());
});

//html
gulp.task('html', function () {
	return gulp.src([
				path.root + '*.html',
				path.app() + '**/*.html'
			])
		.pipe(connect.reload());
});

//watch
gulp.task('watch', function () {
	gulp.watch(path.app() + '**/*.js', ['scripts']);
	gulp.watch([
				path.stylesheets() + '**/*.styl',
				path.components() + '**/*.styl'], ['stylus']);
	gulp.watch([
		path.root + '*.html',
		path.app() + '**/*.html'], ['html']);

});

gulp.task('default', ['connect', 'scripts', 'stylus', 'html', 'watch']);