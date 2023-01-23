var mp = false;

// 【视频 URL 测试链接】
var address = {
    src: 'https://muiplayer.js.org/media/media.mp4',

    // src:'https://mpv.videocc.net/e785b2c81c/5/e785b2c81c9e018296671a1287e99615_2.mp4',
    // src:'https://txmov2.a.yximgs.com/bs2/newWatermark/MjAyMjU2Mzc1MTE_zh_3.mp4',

    // src:'https://cctvwbndbd.a.bdydns.com/cctvwbnd/cctv1_2/index.m3u8?BR=single',
    // src:'http://cctvtxyh5c.liveplay.myqcloud.com/live/cdrmcctv2_1/index.m3u8',

    // src:'https://flvplayer.js.org/assets/video/weathering-with-you.flv',

    // src:'https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd',
}

var addThumbnailRecord = [];
// 视频缩略图配置
var thumbnails = {
    preview:['https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/output_160x90_10x10_001.jpg'],
    tile:[10,10],
    scale:[160,90],
    async(call) {
    }
}

// 视频字幕配置
var subtitle = {
    tracks:[
        {
            kind:'subtitles',
            src:'./static/subtitle/sintel-en.vtt',
            label:'English',
            srclang:'en',
            default:true,
        },
        {
            kind:'subtitles',
            src:'./static/subtitle/sintel-de.vtt',
            label:'Deutsch',
            srclang:'de',
        },
        {
            kind:'subtitles',
            src:'./static/subtitle/sintel-es.vtt',
            label:'Español',
            srclang:'es',
        }
    ],
    styles:{},
}


export default {
    mp,
    address,
    thumbnails,
    subtitle,
}
