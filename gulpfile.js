const { src, dest, gulp, series } = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const pug = require('gulp-pug');

const pathProject = {
	'src': "./src/",
	'dest': "./dest/"
};

function lessToCss(){
	return src(pathProject.src + "less/*.less")
		.pipe(less())
		.pipe(dest(pathProject.src + "less/css"))
		.pipe(browserSync.stream());
};

function concatCss(){
	return src(pathProject.src + "less/css/*.css")
		.pipe(concat("calc.css"))
		.pipe(dest(pathProject.dest + "css"))
		.pipe(browserSync.stream());
};

function pugToHtml(){
	return src(pathProject.src + "pug/calculator.pug")
		.pipe(pug())
		.pipe(dest(pathProject.dest))
		.pipe(browserSync.stream());
};

function html(){
	return src(pathProject.dest + "calculator.html")
		.pipe(dest(pathProject.dest))
		.pipe(browserSync.stream());
};

function calcScript(){
	return src(pathProject.src + "JS/purple_calc.js")
		.pipe(dest(pathProject.dest + "JS"))
}
function sync(){
	browserSync.init({
		server: {
			baseDir: pathProject.dest
		},
		browser: 'chrome',
		notify: false
	});


	browserSync.watch(pathProject.src + "pug/**/*.pug", pugToHtml);
	browserSync.watch(pathProject.src + "less/**/*.less", lessToCss);
	browserSync.watch(pathProject.src + "less/css/**/*.css", concatCss);
};

exports.build = series(lessToCss, concatCss, pugToHtml, calcScript);
exports.less = lessToCss;
exports.calc = concatCss;
exports.pug = pugToHtml;
exports.live = sync;
exports.script = calcScript;