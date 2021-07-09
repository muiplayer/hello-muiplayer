import globals from './global'

export function initExample() {
    document.getElementById('mpVideo').onclick = () => {
        var video = globals.mp.video();
        console.log(video);
    }
    
    document.getElementById('mpToggleControls').onclick = () => {
        globals.mp.toggleControls();
    }
    
    document.getElementById('mpShowToast').onclick = () => {
        globals.mp.showToast('消息提示！');
    }
    
    document.getElementById('mpReloadUrl').onclick = () => {
        // globals.mp.reloadUrl('https://mpv.videocc.net/e785b2c81c/5/e785b2c81c9e018296671a1287e99615_2.mp4?pid=1572452188483X1227211');
        globals.mp.reloadUrl('https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/media.m3u8');
    }
    
    document.getElementById('mpShowLoading').onclick = () => {
        globals.mp.showLoading();
    }
    
    document.getElementById('mpHideLoading').onclick = () => {
        globals.mp.hideLoading();
    }
    
    document.getElementById('mpOpenFullScreen').onclick = () => {
        globals.mp.openFullScreen();
    }
    
    document.getElementById('mpDestory').onclick = () => {
        globals.mp.destory();
    }
    
    document.getElementById('mpGetControlsRemove').onclick = () => {
        var controls = globals.mp.getControls();
        controls[3].remove();
    }



    document.getElementById('playerTest').onclick = () => {
    }
}