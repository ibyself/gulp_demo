//引入gulp模块 
const gulp = require('gulp');
//引入gulp-jshint
const jshint = require('gulp-jshint')
//引入gulp-babel
const babel = require('gulp-babel');
//引入gulp-browserify
const browserify = require('gulp-browserify');
//引入gulp-rename
const rename = require('gulp-rename');
//语法检查任务
gulp.task('jshint', function () {
    // 将你的任务的任务代码放在这
    return gulp.src('./src/js/*.js')
        .pipe(jshint({
            esversion: 6
        }))
        .pipe(jshint.reporter('default'));
});
//语法转换
gulp.task('babel', () =>
    gulp.src('./src/js/*.js')
    .pipe(babel({ //进行语法转换
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('build/js')) //输出到指定目录
);

//转换模块化语法
gulp.task('browserify', function() {
    return gulp.src('./build/js/index.js')
      .pipe(browserify())//将CommonJs语法转换为浏览器能识别的语法
      .pipe(rename('built.js'))//为了防止冲突将文件重命名
      .pipe(gulp.dest('build/js'))//输出到指定位置
  });
//配置默认任务，让多个任务依次执行
gulp.task('default', gulp.series('jshint', 'babel', 'browserify'))