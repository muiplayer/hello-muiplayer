import Flv from 'flv.js'
import Hls from 'hls.js'
import dashjs from 'dashjs'

import globals from './global'

var customKernelFun = function(video,src) {
    let _destory = (kernel) => {
        setTimeout(() => {
            globals.mp.on('destory',function() {
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

        // observe destory
        _destory(hls)
    }

    // flv decode
    let flvDecodeAction = () => {
        console.log('custom flv create...');
        let flvConfig = {
            type:'flv',
            url:src,
        }
        let flv = Flv.createPlayer(flvConfig);
        flv.attachMediaElement(video);
        flv.load();

        flv.on(Flv.Events.ERROR,function(errMes) {
            console.error(errMes);
            // 发送错误报告
            globals.mp.sendError(errMes);
        });

        // observe destory
        _destory(flv)
    }

    // dash decode
    let dashDecodeAction = () => {
        let dashMedia = dashjs.MediaPlayer().create();
        dashMedia.initialize(video, src,false);
        dashMedia.on(dashjs.MediaPlayer.events.ERROR,function(errMes) {
            console.error(errMes);
            // 发送错误报告
            globals.mp.sendError(errMes);

            dashMedia.reset();
        })

        // observe destory
        _destory(dashMedia)
    }

    // mp4 decode play
    let mp4DecodeAction = () => {
        console.log('>> mp4 parse medie resource paly');
        video.src = src;
    }

    // execute the appropriate decoder
    src.indexOf('.m3u8') != -1 ? hlsDecodeAction() : '';
    src.indexOf('.flv') != -1 ? flvDecodeAction() : '';
    src.indexOf('.mpd') != -1 ? dashDecodeAction() : '';
    src.indexOf('.mp4') != -1 ? mp4DecodeAction() : '';
}

export default {
    // type:'hls',
    // loader:Hls,
    // config:{
    //     debug:false,
    // },

    // type:'flv',
    // loader:Flv,
    // config:{ 
    //     cors:true
    // },

    customKernel:customKernelFun, // 自定义核心解码加载程序
}