import customSetting from './customSetting'
import globals from '../js/global'

export default {
    container:'#mui-player',
    src:globals.address.src_hd,
    title:'',
    poster:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/poster.jpg',
    autoplay:false,
    autoFit:true,
    live:false,
    objectFit:'cover',

    videoAttribute:[
        {attrKey:'webkit-playsinline',attrValue:''},
        {attrKey:'playsinline',attrValue:''},
        {attrKey:'x5-playsinline',attrValue:''},
        {attrKey:'t7-video-player-type',attrValue:'inline'},
        {attrKey:'x5-video-player-type',attrValue:'h5-page'},
        {attrKey:'x-webkit-airplay',attrValue:'allow'},
        {attrKey:'controlslist',attrValue:'nodownload'},
    ],
    custom:{
        headControls:[
            {
                slot:'github',
                click:function(e) {
                    window.open('https://github.com/muiplayer/hello-muiplayer')
                },
                style:{},
            },
            {
                slot:'gitee',
                click:function(e) {
                    window.open('https://gitee.com/muiplayer/hello-muiplayer')
                },
                style:{},
            },
        ]
    },
    plugins:[
        typeof MuiPlayerDesktopPlugin != 'undefined' ? new MuiPlayerDesktopPlugin({
            customSetting:customSetting, // 自定义设置组菜单
            thumbnails:globals.thumbnails, // 缩略图配置
            contextmenu:[],  // 自定义右键菜单
        }) : {},
    ],
}