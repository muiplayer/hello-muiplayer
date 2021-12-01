import globals from './global'

export function listener() {
    globals.mp.on('error',function(event, data) {
        console.error(event);
    });

    globals.mp.on('volume-change',function(e) {
        if(window.plus) {
            plus.device.setVolume(e.size);
        }else {
            globals.mp.video().volume = e.size;
        }
    });
    
    globals.mp.on('share',function(e) {
        globals.mp.showToast('Type：' + e.type)
    });
}

