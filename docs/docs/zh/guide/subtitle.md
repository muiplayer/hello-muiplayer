# 视频字幕

::: tip

视频字幕使用的是 html5 track 标签，目前只支持使用 webvtt 格式的字幕文件。

你可以配置一个或者多个 vtt 文件，从而可以选择不同的语言。当存在 vtt 字幕时， mui-player-desktop-plugin.js 会默认读取 track 配置添加设置菜单，前提是浏览器支持 webvtt 文档格式。

查看 [webvtt supported](https://caniuse.com/?search=webvtt)。从 [这里](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video) 您可以学习到 webvtt 的知识。

:::


<ClientOnly><Demo-SubtitleExample></Demo-SubtitleExample></ClientOnly>


### API

| 属性名         | 类型    | 默认值    | 说明                                                         |
| -------------- | ------- | --------- | ------------------------------------------------------------ |
| tracks         | Array   | []        | 字幕列表                                                     |
| tracks.kind    | String  | subtitles | 指定相关文字的字幕信息                                       |
| tracks.src     | String  |           | 字幕 vtt 文件地址                                            |
| tracks.default | Boolean | false     | 是否默认显示该字幕                                           |
| tracks.label   | String  |           | 指定字幕使用的语言，该值将出现在用户界面中                   |
| tracks.srclang | String  |           | 指定每个字幕轨道使用的语言，例如：srclang="en"，srclang="zh-cn" 分别表示字幕文件为英语和简体中文。 |
| #              |         |           |                                                              |
| styles         | Object  |           | 自定义字幕样式，[查看支持样式](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video#%E4%B8%BA%E5%AD%97%E5%B9%95%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F) |



### 配置示例

在初始化配置字幕传递 subtitle 对象，接收 tracks 以及 styles 配置

```javascript
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'../media/media.mp4',
    ...
    
    subtitle{
        tracks:[
            {
    			kind:'subtitles',
				src:'./static/subtitle/sintel-en.vtt',
				label:'英语',
				srclang:'en',
				default:true,
            },
            {
				kind:'subtitles',
				src:'./static/subtitle/sintel-de.vtt',
				label:'德语',
				srclang:'de',
            },
            {
				kind:'subtitles',
				src:'./static/subtitle/sintel-es.vtt',
				label:'西班牙语',
				srclang:'es',
            }
        ],
        styles:{ // 字幕默认样式
			color:'#FFFFFF',
			background:'transparent',
			textShadow:'0px 0px 1px #000000',
		},
    }
});
```

