const moment = require('moment')
const { src,dest,series } = require('gulp');

const replace = require('gulp-replace')
const gulpif = require('gulp-if')
const clean = require('gulp-clean')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const header = require('gulp-header');
const rename = require('gulp-rename')
const concat = require('gulp-concat')

const less = require('gulp-less');
const  cssnano = require('gulp-cssnano')
const postcss = require('gulp-postcss')

const issued = process.env.ISSUED

const edition = issued == 'professional' ? ' @Professional edition' : '';
const copyright = [
    '/*!',
    '* <%= pkg.description %> v<%= pkg.version %>' + edition,
    '* Date：' + moment().format('YYYY-MM-DD'),
    '* Released under MIT license',
    '* https://muiplayer.js.org/',
    '*/\n',
];

const task = done => { done() }
const packs = {
    primaryPlugin:true,
    desktopPlugin:true,
    mobilePlugin:true,
}


// 输出前清空文件夹
function cleanFile() {
    const srcs = []
    packs.primaryPlugin ? srcs.push('release/mui-player/dist') : ''
    packs.desktopPlugin ? srcs.push('release/mui-player-desktop-plugin/dist') : ''
    packs.mobilePlugin ? srcs.push('release/mui-player-mobile-plugin/dist') : ''
    
    return src(srcs,{ read:false })
    .pipe(clean())
}

/**
 * 输出播放器JS依赖
 * @param { String } file 文件路径
 * @param { Object } pkg package.json
 * @param { String } outpath 输出路径
 */
function compileHelper(file,pkg,outpath) {
    return src(file)
    .pipe(gulpif(issued == 'stability', replace("/* Professional Begin */",'/**')))
    .pipe(gulpif(issued == 'stability', replace("/* Professional End */",'*/')))
    .pipe(babel())
    .pipe(uglify({
        compress:{
            drop_debugger:true,
            pure_funcs:['console.log'],
        }
    }))
    .pipe(rename({
        extname:'.min.js'
    }))
    .pipe(header(copyright.join('\n'),{ pkg }))
    .pipe(dest(outpath))
}

// output mui-player.min.js
function outMuiPlayer() {
    return compileHelper('src/js/mui-player.js',require('./release/mui-player/package.json'),'release/mui-player/dist');
}
// output mui-player-desktop-plugin.min.js
function outMuiPlayerDesktopPlugin() {
    return compileHelper('src/js/mui-player-desktop-plugin.js',require('./release/mui-player-desktop-plugin/package.json'),'release/mui-player-desktop-plugin/dist');
}
// output mui-player-mobile-plugin.min.js
function outMuiPlayerMobilePlugin() {
    return compileHelper('src/js/mui-player-mobile-plugin.js',require('./release/mui-player-mobile-plugin/package.json'),'release/mui-player-mobile-plugin/dist');
}

// 输出播放器CSS依赖
let copyright_css = [...copyright];
copyright_css[1] = '* Mui Player Css Library v<%= pkg.version %>' + edition;
function outPlayerCss() {
    return src([
        'src/css/mui-player.less',
    ])
    .pipe(less())
    .pipe(concat('mui-player'))
    .pipe(cssnano({
        zindex:false,
        reduceIdents: false
    }))
    .pipe(postcss())
    .pipe(rename({
        extname:'.min.css'
    }))
    .pipe(header(copyright_css.join('\n'),{ pkg:require('./release/mui-player/package.json') }))
    .pipe(dest('release/mui-player/dist'))
}

// 输出播放器相关插件
function outRelatedPlugin() {
    return src('src/plugin/*.js')
    .pipe(dest('release/plugin'))
}

exports.default = series(
    cleanFile,
    packs.primaryPlugin ? outMuiPlayer : '',
    packs.desktopPlugin ? outMuiPlayerDesktopPlugin : task,
    packs.mobilePlugin ? outMuiPlayerMobilePlugin : task,
    packs.primaryPlugin ? outPlayerCss : task,
    outRelatedPlugin
);