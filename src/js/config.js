import customSetting from './customSetting'
import parseConfig from './parseConfig'
import globals from './global'

export default {
    // --------------------- 主要配置 ---------------------
    container:'#mui-player',
    src:globals.address['src'],
    
    title:'战狼',
    autoplay:false, // 视频是否自动播放,默认为false，IOS H5环境无效
    preload:'auto', // 视频是否预加载,可选值 none、metadata、auto。如果 autoplay=true，则忽略该属性。
    loop:false, // 是否循环播放
    width:'auto', // 初始化播放器宽度
    height:'225px', // 初始化播放器高度，默认高度 225px
    volume:1, // 初始化设置视频音量，取值 0 - 1
    autoFit:true, // 播放器高度是否自适应视频高度，默认为true
    poster:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/poster.jpg', //视频封面的资源地址
    live:false, // 是否开启直播模式，直播模式默认菜单配置不允许切换播放速度以及循环播放
    initFullFixed:false, // 初始化是否网页全屏播放
    
    // 全屏时否自动切换方向，如果运行环境在html5 plus中，那么切换全屏时会自动旋转屏幕，部分手机浏览器全屏时自动旋转方向。
    // Tag：ios全屏切换时稍有差异，平台播放默认设置为同层播放，非全屏模式可操作播放器控件，全屏模式时调用系统全屏播放。
    autoOrientaion:true, 
    dragSpotShape:'circular', // 设置进度条拖动点的形状. 可选值 circular/square 默认为circular
    objectFit:'contain', // 视频大小与video 容器的表现形式。可选 contain 或者 cover。默认为 contain
    
    // 此属性为添加更多H5 Video 标签的属性。参数为接受每个为Object的对象.注意如果该数组中属性值在已有设置中存在，那么会覆盖。
    videoAttribute:[
        {attrKey:'webkit-playsinline',attrValue:''},
        {attrKey:'playsinline',attrValue:''},
        {attrKey:'x5-playsinline',attrValue:''},
        {attrKey:'t7-video-player-type',attrValue:'inline'},
        {attrKey:'x5-video-player-type',attrValue:'h5-page'},
        {attrKey:'x-webkit-airplay',attrValue:'allow'},
        {attrKey:'controlslist',attrValue:'nodownload'},
    ],
    
    // subtitle:globals.subtitle, // 字幕配置
    parse:parseConfig, // 视频编解码

    plugins:[ // 添加播放插件
        typeof MuiPlayerDesktopPlugin == 'function' ? new MuiPlayerDesktopPlugin({
            fullScaling:1.2,// 全屏控件缩放比例
            leaveHiddenControls:false, // 鼠标指针移出播放器时是否隐藏控件
            customSetting:customSetting.items, // 自定义设置组菜单
            thumbnails:globals.thumbnails, // 缩略图配置
            contextmenu:[ // 自定义右键菜单
                {
                    name:'share',
                    context:'Share',
                    zIndex:0,
                    show:true,
                    click:function(close) {
                        globals.mp.showToast('Trigger Click！');
                        close();
                    }
                },
            ],
        }) : {}
    ],
    
    // --------------------- 自定义播放器配置 ---------------------
    // lang:'en', // 语言，可选值: en | zh-cn | zh-tw
    // themeColor:'#55c612', // 主题颜色，默认为 #1e98d4 
    showMiniProgress:true, // 是否显示底部迷你进度条控件，当视图操纵控件隐藏时显示。当配置项 live=true 时无效。
    pageHead:true, // 非全屏模式下，是否显示头部操作控件。头部操作控件通常包括返回按钮，标题、菜单操作按钮等
    custom:{
        headControls:[ //自定义播放器头控件列表，参数接受一个数组配置选项，最大可配置对象为5个.
            {
                slot:'castScreen',
                click:function(e) {
                    console.log('The head first custom button is clicked >>>');
                }
            },
            {
                slot:'likeButton',
                click:function(e) {
                    console.log('The head second custom button is clicked >>>');
                    globals.mp.showRightSidebar('HD');
                }
            }
        ],
        footerControls:[ // 自定义播放器页脚控件列表，参数接受一个数组配置选项，最大可配置对象为5个.
            {
                slot:'nextMedia',
                position:'left', // 显示的位置，可选 left、right
                tooltip:'下一集', // 鼠标悬浮在控件上显示的文字提示
                oftenShow:false, // 是否常显示。默认为false，表示在mobile环境下横屏状态下隐藏，pc环境判下视频容器大小小于500px时隐藏
                style:{},
                click:function(e) {
                    console.log('The footer first custom button is clicked >>>');
                }
            },
            {
                slot:'toggleleProgram',
                position:'right',
                tooltip:'切换选集',
                oftenShow:false,
                style:{
                    padding: 0,
                },
                click:function(e) {
                    console.log('The footer second custom button is clicked >>>');
                },
            },
        ],
        rightSidebar:[ // 自定义播放器弹出右侧栏，参数接受一个配置数组，最大可配置对象为5个
            { slot:'HD',width:'200px' }
        ],
    },
}