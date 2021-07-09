import globals from '../js/global'

export default {
    container:'#mui-player',
    src:globals.address.src_hd,
    title:'',
    poster:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/poster.jpg',
    autoplay:false,
    autoFit:true,
    live:false,
    objectFit:'contain',
    themeColor:'rgb(62, 175, 124)',
    videoAttribute:[
        {attrKey:'webkit-playsinline',attrValue:''},
        {attrKey:'playsinline',attrValue:''},
        {attrKey:'x5-playsinline',attrValue:''},
        {attrKey:'t7-video-player-type',attrValue:'inline'},
        {attrKey:'x5-video-player-type',attrValue:'h5-page'},
        {attrKey:'x-webkit-airplay',attrValue:'allow'},
        {attrKey:'controlslist',attrValue:'nodownload'},
    ],
    plugins:[
        typeof MuiPlayerDesktopPlugin != 'undefined' ? new MuiPlayerDesktopPlugin({
        }) : {},
    ],
}