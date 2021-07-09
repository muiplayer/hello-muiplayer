import globals from './global'
import { initExample } from './example'
import { onToggleVideo } from './util'

export function listener() {
    // --------------------- mui-player.js ---------------------
    // 播放器创建完成
    globals.mp.on('ready',function() {
        // var controls = globals.mp.getControls();
        // console.log(controls);
        // controls[6].remove();

        initExample();
        
        var th = document.querySelectorAll('[type="toggleHD"]');
        for(var i = 0;i < th.length;i++) {
            th[i].onclick = (e) => {
                onToggleVideo({ functions:e.currentTarget.innerHTML });
            }
        }
    });

    // 当视频时长已更改时触发
    globals.mp.on('duration-change',function(data) {
    });

    // 当用户在视频寻址时触发
    globals.mp.on('seek-progress',function(data) {
    });

    // 返回按钮点击时触发，注意该回调函数仅在非全屏模式下触发
    globals.mp.on('back',function() {
    });

    // 切换 controls 显示隐藏时触发
    globals.mp.on('controls-toggle',function(data) {
    });

    // 视频播放发生错误
    globals.mp.on('error',function(e) {
        console.error(e);
    });

    // 视频销毁事件触发
    globals.mp.on('destory',function() {
    })

    // 监听视频播放方向发生改变时触发
    globals.mp.on('fullscreen-change',function(event) {
        var setHeaderStyle = function() {
            var isImmersedStatusbar = plus.navigator.isImmersedStatusbar();
            if(!isImmersedStatusbar) { return };
            
            if(event.direction == 'landscape') {
                document.getElementById("mplayer-header").style.paddingTop = '16px';
            }else {
                var statusHeight = plus.navigator.getStatusbarHeight();
                document.getElementById("mplayer-header").style.paddingTop = Math.round(statusHeight) + 'px';
            }
        };

        // window.plus ? setHeaderStyle() : '';
    });


    // --------------------- mui-player-mobile-plugin.js ---------------------
    // 监听音量调节回调触发
    globals.mp.on('volume-change',function(e) {
        if(window.plus) {
            plus.device.setVolume(e.size);
        }else {
            globals.mp.video().volume = e.size;
        }
    });
    
    // 监听亮度调节回调触发
    globals.mp.on('luminance-change',function(e) {
        console.log(e);
        if(window.plus) {
            plus.screen.setBrightness(e.size);
        }
    });
    
    // 监听分享事件
    globals.mp.on('share',function(e) {
        console.log(e);
    });
}

