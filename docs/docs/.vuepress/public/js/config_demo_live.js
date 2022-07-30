import Hls from 'hls.js'
import globals from '../../public/js/global'

export default {
    container:'#mui-player',
    src:'https://cctvwbndbd.a.bdydns.com/cctvwbnd/cctv1_2/index.m3u8?BR=single',
    title:'',
    autoplay:true,
    autoFit:true,
    live:true,
    objectFit:'contain',
    themeColor:'rgb(62, 175, 124)',
    parse:{
        customKernel:function(video,src) {
            let _destroy = (kernel) => {
                globals.parseKernel = kernel;

                setTimeout(() => {
                    globals.mp.on('error',function() {
                        kernel.destroy();
                    })
                },500);
            }

            // hls decode
            let hlsDecodeAction = () => {
                console.log('custom hls create...');
                let hlsConfig = {
                    autoStartLoad:true,
                    debug:false,
                }
                let hls = new Hls(hlsConfig);
                hls.attachMedia(video);

                hls.on(Hls.Events.MEDIA_ATTACHED,function() {
                    hls.loadSource(src);
                })

                hls.on(Hls.Events.ERROR,function(errMes) {
                    console.error(errMes);
                    // 发送错误报告
                    globals.mp.sendError(errMes);
                });

                // observe destroy
                _destroy(hls)
            }

            src.indexOf('.m3u8') != -1 ? hlsDecodeAction() : video.src = src;
        }
    },
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