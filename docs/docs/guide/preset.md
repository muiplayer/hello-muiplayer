# MediaSource support

::: tip

mui-player.js default with a [hls](https://github.com/video-dev/hls.js), [Flv](https://github.com/Bilibili/flv.js)Streaming media library, the specified streaming media resource can be played by referencing the library file. At the same time, you can also use it with other mse libraries, and customize the codec media through the [customKernel](#custom-use-mse-library) configuration object, such as playing mpd files with [dash.js](https://github.com/Dash-Industry-Forum/dash.js)

:::



## Use hls.js or flv.js

Use the script tag to introduce:

```html
<script type="text/javascript" src="js/hls.min.js"></script>
<script type="text/javascript" src="js/flv.min.js"></script>
```

Or node uses the module manager to introduce:

```sh
npm install hls.js --save
npm install flv.js --save

import Hls from 'hls.js'
import Flv from 'flv.js'
```



## Configuration

Add the parse statement to the configuration object to specify the video codec library

```js
// Example hls configuration
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
// Example flv configuration
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



## Custom use MSE library

It supports the use of other mse libraries for codec playback, which has no effect, but the codec behavior of the video is fully managed, so muiplayer does not deal with how the video is played.

customKernel provides custom processing video codec behavior. Once this function is defined, the video playback behavior should be completely managed by the customKernel function, and the type attribute definition is deemed invalid. **Therefore, when the video has an error or is destroyed, you need to actively send an error report to muiplayer or destroy mse to release the memory!**

```javascript
import dashjs from 'dashjs'

var dashDecodeAction = function(video,src) {
    let dashMedia = dashjs.MediaPlayer().create();
    dashMedia.initialize(video, address.src,false);
    dashMedia.on(dashjs.MediaPlayer.events.ERROR,function(errMes) {
        console.error(errMes);
        // Send error report
        player.sendError(errMes);
    })
}

// The example uses dash.js to play the mpd file format
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