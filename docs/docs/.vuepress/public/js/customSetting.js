import globals from '../js/global'
import config from './config'

export default [
	{
		functions:'Clarity',
		model:'select',
        show:true,
        zIndex:0,
		childConfig:[
			{functions:'1080P'},
			{functions:'HD',selected:true},
			{functions:'SD'},
		],
		onToggle:onToggleVideo,
	},
]


// 切换清晰度
function onToggleVideo(data,selected,back) {
	let onToggleLoad = function(state) {
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
		})
	}

	let selectIndex = ['SD','HD'].indexOf(data.functions);
	if(selectIndex != -1) {
		selected(function() {
			let _video = globals.mp.video();
			onToggleLoad({
				currentTime:_video.currentTime,
				paused:_video.paused
			});
			delete config['parse'];
			selectIndex == 0 ? globals.mp.reloadUrl(globals.address.src_sd) : globals.mp.reloadUrl(globals.address.src_hd);
		});
	}else {
		globals.mp.showToast('No video source!');
	}
}