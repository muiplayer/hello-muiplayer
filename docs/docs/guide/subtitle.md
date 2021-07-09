# Video subtitles

::: tip

Video subtitles use the html5 track tag, currently only subtitle files in webvtt format are supported.

You can configure one or more vtt files to choose different languages. When vtt subtitles exist, mui-player-desktop-plugin.js will read the track configuration and add settings menu by default, provided that the browser supports the webvtt document format.

View [webvtt supported](https://caniuse.com/?search=webvtt). From [here](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)You can learn the knowledge of webvtt.

:::

### API

| Attribute name | Types of | Defaults  | Description                                                  |
| -------------- | -------- | --------- | ------------------------------------------------------------ |
| tracks         | Array    | []        | Subtitle list                                                |
| tracks.kind    | String   | subtitles | Specify subtitle information for related text                |
| tracks.src     | String   |           | Subtitle vtt file address                                    |
| tracks.default | Boolean  | false     | Whether to display the subtitles by default                  |
| tracks.label   | String   |           | Specify the language used by the subtitles, this value will appear in the user interface |
| tracks.srclang | String   |           | Specify the language used by each subtitle track <br />for example: srclang="en", srclang="zh-cn" means that the subtitle file is in English and Simplified Chinese respectively. |
| #              |          |           |                                                              |
| styles         | Object   |           | Custom subtitle styles, [view supported styles](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video#为字幕添加样式) |



### Configuration example

In the initialization configuration subtitles pass subtitle object, receive tracks and styles configuration

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
				label:'English',
				srclang:'en',
				default:true,
            },
            {
				kind:'subtitles',
				src:'./static/subtitle/sintel-de.vtt',
				label:'German',
				srclang:'de',
            },
            {
				kind:'subtitles',
				src:'./static/subtitle/sintel-es.vtt',
				label:'Spanish',
				srclang:'es',
            }
        ],
        styles:{ // Subtitle default style
			color:'#FFFFFF',
			background:'transparent',
			textShadow:'0px 0px 1px #000000',
		},
    }
});
```

