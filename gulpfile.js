var gulp = require('gulp');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

const outputName = 'math.js'; //edit this line to change output file name

var timer = null;


gulp.task('tsify', () => {
	const tsProject = typescript.createProject('tsconfig.json');

	return gulp.src('./src/**/*.ts')
	.pipe(tsProject())
	.pipe(concat(outputName))
	.pipe(gulp.dest(`./build`))
})

gulp.task('uglify', () => {
	return gulp.src(`./build/${outputName}`)
	.pipe(uglify())
	.pipe(gulp.dest(`./build`))
})

gulp.task('default',() => {
	return watch('./src/**/*.ts', gulp.series('tsify', 'uglify'));
})