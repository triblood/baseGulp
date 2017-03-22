var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var del = require('del');

gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
	}))
});

gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'app'
		},
	})
});

gulp.task('clean:dist', function(){
	return del.sync('dist');
});

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});


// gulp.task('', function(){

// });