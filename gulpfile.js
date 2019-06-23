var gulp = require('gulp');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

const outputName = 'math.js'; //edit this line to change output file name

const tsProject = typescript.createProject('tsconfig.json');

gulp.task('tsify', () => {
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

gulp.task('default', gulp.series('tsify', 'uglify'))

