const { src,dest,series } = require('gulp');

var clean = require('gulp-clean')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const concat = require('gulp-concat')

const less = require('gulp-less');
const  cssnano = require('gulp-cssnano')
const postcss = require('gulp-postcss')


// 输出前清空文件夹
function cleanFile() {
    return src('output/*',{ read:false })
    .pipe(clean())
}

// 输出播放器JS依赖
function outPlayerJs() {
    return src('src/js/mui-*.js')
    .pipe(babel())
    .pipe(uglify({
        compress:{
            drop_debugger:true,
            pure_funcs:['console.log'],
        },
        // output:{
        //     beautify:true,
        //     indent_level:2,
        // }
    }))
    .pipe(rename({
        extname:'.min.js'
    }))
    .pipe(dest('output/js/'))
}

// 输出播放器CSS依赖
function outPlayerCss() {
    return src([
        'src/css/mui-player.less',
    ])
    .pipe(less())
    .pipe(concat('mui-player'))
    .pipe(cssnano({
        zindex:false
    }))
    .pipe(postcss())
    .pipe(rename({
        extname:'.min.css'
    }))
    .pipe(dest('output/css/'))
}

// 输出播放器相关插件
function outRelatedPlugin() {
    return src('src/plugin/*.js')
    .pipe(dest('output/plugin/'))
}

exports.default = series(cleanFile,outPlayerJs,outPlayerCss,outRelatedPlugin);