import globals from '../js/global'
import customSetting from './customSetting'

// 切换视频
export function onToggleVideo(data,selected) {
    let onToggleLoad = (state) => {
        globals.mp.once('ready',function() {
            let _video = globals.mp.video();
			let _execute = function() {
				_video.currentTime = state.currentTime;
				state.paused ? _video.pause() : _video.play();
			}

			if(_video.readyState == 0) {
				_video.addEventListener('durationchange',function(e) {
					_execute();
				},{ once:true })
			}else {
				_execute();
			}

			// init video default size
			for(var item of customSetting.items[1].childConfig) {
				item.functions == '100%' ? item.selected = true : delete item.selected;
            }
            
            // init setting video origin select item
            for(var item of customSetting.items[0].childConfig) {
				item.functions == data.functions ? item.selected = true : delete item.selected;
            }
		})
    }

    let selectIndex = ['标清','高清'].indexOf(data.functions);
    if(selectIndex != -1) {
        selected instanceof Function ? selected() : '';
        
        let _video = globals.mp.video();
        onToggleLoad({
            currentTime:_video.currentTime,
            paused:_video.paused
        });

        selectIndex == 0 ? globals.mp.reloadUrl('https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/media_sd.mp4') : globals.mp.reloadUrl('https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/media/media.mp4');
	}else {
		globals.mp.showToast('没用可用的视频源');
	}
}

// 设置视频显示尺寸
export function onSetVideoObjectFit(data,selected,back) {
    var videoEl = globals.mp.video();
	videoEl.classList.remove('covered');
	switch (data.functions) {
		case '50%':
			videoEl.style.width = '50%';
			break;
		case '75%':
			videoEl.style.width = '70%';
			break;
		case '100%':
			videoEl.style.width = '100%';
			break;
		case '填充':
			videoEl.classList.add('covered');
			videoEl.style.width = videoEl.getAttribute('width');
		break;
	}
	selected();
}