var mp = false;

var CM = null; // CommentCoreLibrary CommentManager Object
var closeDanmaku = false; // whether close danmaku

// 【视频 URL 测试链接】
var address = {
    // src_hd:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/media.mp4',
    // src_sd:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/media_sd.mp4',
    // src_mp4:'https://mpv.videocc.net/e785b2c81c/5/e785b2c81c9e018296671a1287e99615_2.mp4',
    // src_flv:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/media.flv',
    // src_hls:'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/media.m3u8',

    src_hd: '/media/media.mp4',
    src_sd:'/media/media_sd.mp4',
    src_flv:'/media/media.flv',
    src_hls:'/media/media.m3u8',
    src_subtitle:'/media/subtitleSource.mp4',
}

// 视频缩略图配置
var thumbnails = {
    preview:['https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/output_160x90_10x10_001.jpg'],
    tile:[10,10],
    scale:[160,90],
}

export default {
    mp,
    address,
    thumbnails,

    // 弹幕管理对象
    CM,
    closeDanmaku
}
