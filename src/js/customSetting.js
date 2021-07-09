import { onToggleVideo,onSetVideoObjectFit } from './util'

var items = [
	{
		functions:'清晰度',
		model:'select',
        show:true,
        zIndex:0,
		childConfig:[
			{functions:'蓝光1080P'},
			{functions:'超清'},
			{functions:'高清',selected:true},
			{functions:'标清'},
		],
		onToggle:onToggleVideo,
	},
	{
		functions:'视频显示尺寸',
		model:'select',
        show:true,
        zIndex:0,
		childConfig:[
			{functions:'50%'},
			{functions:'75%'},
			{functions:'100%',selected:true},
			{functions:'填充'},
		],
		onToggle:onSetVideoObjectFit,
	},
]

export default {
	items
}