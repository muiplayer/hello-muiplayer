# MediaSource 支持

::: tip

mui-player.js 默认配合了 [hls](https://github.com/video-dev/hls.js)、[flv](https://github.com/Bilibili/flv.js) 流媒体库，引用库文件即可播放指定的流媒体资源。同时你也可以配和其他 mse 库使用，通过 [customKernel](#自定义使用mse库) 配置对象来自定义编解码媒体，例如播放 mpd 文件配合 [dash.js](https://github.com/Dash-Industry-Forum/dash.js)

:::



## 使用 hls.js 或者 flv.js

使用 script 标签引入：

```html
<script type="text/javascript" src="js/hls.min.js"></script>
<script type="text/javascript" src="js/flv.min.js"></script>
```

或者 node 使用模块管理器引入：

```sh
npm install hls.js --save
npm install flv.js --save

import Hls from 'hls.js'
import Flv from 'flv.js'
```



## 配置

在配置对象中添加 parse 声明指定视频编解码库

```js
// 示例 hls 配置
var mp = new MuiPlayer({
    container:document.getElementById("mui-player"),
    src:'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
    ...
    
    parse:{
        type:'hls',
        loader:Hls,
        config:{ // hls config to：https://github.com/video-dev/hls.js/blob/HEAD/docs/API.md#fine-tuning
            debug:false,
        },
    },
});
```

```javascript
// 示例 flv 配置
var mp = new MuiPlayer({
    container:document.getElementById("mui-player"),
    src:'https://flvplayer.js.org/assets/video/weathering-with-you.flv',
    ...
    
    parse:{
        type:'flv',
        loader:Flv, // flv config to：https://github.com/Bilibili/flv.js/blob/HEAD/docs/api.md#flvjscreateplayer
        config:{ 
            cors:true
        },
    },
});
```



## 自定义使用MSE库

支持使用其他 mse 库进行编解码播放，这没有任何影响，只不过视频的编解码行为被完全托管，因此 muiplayer 不处理视频该如何播放。

customKernel 提供自定义处理视频编解码行为，一旦定义该该函数，那么视频的播放行为该完全由 customKernel  函数托管，type 属性定义视为无效。**因此在视频发生错误或者销毁时，需要主动发送错误报告给 muiplayer 或者销毁 mse 释放内存！**

```javascript
import dashjs from 'dashjs'

var dashDecodeAction = function(video,src) {
    let dashMedia = dashjs.MediaPlayer().create();
    dashMedia.initialize(video, address.src,false);
    dashMedia.on(dashjs.MediaPlayer.events.ERROR,function(errMes) {
        console.error(errMes);
        // 发送错误报告
        player.sendError(errMes);
    })
}

// 示例使用 dash.js 播放 mpd 文件格式
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd',
    ...
    
    parse:{
		customKernel:dashDecodeAction
    },
});
```



#### Other Doc：

- [Use Mp4 MediaSource ](https://www.baidu.com/link?url=a9pvrAPtq_HzYS56hzE6D_jTj5gjAcU5zmajuewpCEtSWHu7IOGTMeuVfKfaJFZ_2scuF3rsp2rg71L-_0oypBbcooE1iJbZiRnBMEZzZOm&wd=&eqid=bc9713c000138d07000000045fde0945)
- [MP4 MediaSource Demo](https://nickdesaulniers.github.io/netfix/demo/bufferAll.html)
- [Browser MediaSource Supported](https://caniuse.com/mediasource)