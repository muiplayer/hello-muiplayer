export default {
    container:'#mui-player',
    src:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/subtitleSource.mp4',
    title:'',
    poster:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/subtitle_poster.jpg',
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
    subtitle:{
        tracks:[
            {
                kind:'subtitles',
                src:'/subtitle/sintel-en.vtt',
                label:'English',
                srclang:'en',
                default:true,
            },
            {
                kind:'subtitles',
                src:'/subtitle/sintel-de.vtt',
                label:'Deutsch',
                srclang:'de',
            },
            {
                kind:'subtitles',
                src:'/subtitle/sintel-es.vtt',
                label:'Español',
                srclang:'es',
            }
        ],
    },
    plugins:[
        typeof MuiPlayerDesktopPlugin != 'undefined' ? new MuiPlayerDesktopPlugin({
        }) : {},
    ],
}