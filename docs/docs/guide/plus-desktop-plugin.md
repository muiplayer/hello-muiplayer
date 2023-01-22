# Pc extend【Professional edition】

::: tip

PC side extension component, this extension adds more functional support for the player on the desktop side, including barrage input, ad floating window, video watermark, small window playback, progress point cue points, and video screenshots, etc.

The plugin is written using native Js, so there is no redundancy in the code when writing the functional interface, which leads to an increase in the size of the package. Extension plug-ins are usually kept at the latest version, please update the main file of mui-player to the latest version before using this plugin.

:::


<ClientOnly><Player-DesktopPlus></Player-DesktopPlus></ClientOnly>

## download

::: warning Value added services
This plugin is supported by the professional version, if you want to get the plug-in, please [click href](/joinUs/#value-added-services) to view the professional version plug-in download.
:::



## start using

Introduce **mui-player-desktop-plugin.plus.js** on the page , the plugin needs to be loaded before initializing the player:

```html
<!-- Introducing Pro Extensions Using Tags -->
<script type="text/javascript" src="js/mui-player-desktop-plugin.plus.min.js"></script>
```

Pass in the main configuration item plugins:

```javascript
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'../media/media.mp4',
    ...
    
    plugins:[
        new MuiPlayerDesktopPlugin({
            key: 'Configure your plugin secret key',
            ...
        })
    ]
});
```



## Configuration options plus

Example to create a barrage input component:

```javascript
new MuiPlayerDesktopPlugin({
    key: 'Configure your plugin secret key',
    danmakuComponent:{
        open: true, // Whether to open the barrage component
        growSize: 0.65, // The proportion of the width of the container that the component occupies, value range: 0 - 1
        buttonText: 'Send',
        onSend(text, cleanText) { // Function callback to monitor text sent content
            // axtion
        },
    }
})
```



| **Attributes**                 | **Type** | **Default**      | **Description**                                              |
| ------------------------------ | -------- | ---------------- | ------------------------------------------------------------ |
| danmakuComponent               | Object   | {}               | Create a barrage input component                             |
| danmakuComponent.open          | Object   | true             | Whether to open the barrage component                        |
| danmakuComponent.growSize      | Number   | 0.65             | The proportion of the width of the container that the component occupies, value range: 0 - 1 |
| danmakuComponent.position      | String   | left             | The position of the component arrangement, possible value: left \| right \| center |
| danmakuComponent.buttonText    | String   | -                | The text displayed by the button                             |
| danmakuComponent.placeholder   | String   | -                | The placeholder displayed in the bullet chat text input box  |
| danmakuComponent.onSend        | Function | (text,cleanText) | Function callback to listen to the sent content of the text, the method receives two callback parameters:<br />text：String - text content<br />cleanText：Function - Call the function to clear the content of the text input box |
| danmakuComponent.loadIntercept | Function | (Element)        | Intercept before the component is loaded, usually here is an action to rewrite the component, and the callback function Element returns the control element |
| danmakuComponent.style         | Object   | {}               | Additional styles for components                             |
| #                              |          |                  |                                                              |
| prompt                         | Object   |                  | progress bar pointer                                         |
| prompt.dotColor                | String   | \#F8F8FF         | color                                                        |
| prompt.hoverShow               | Boolean  | false            | whether to show only on mouseover                            |
| prompt.items                   | Array    | {}               | The progress bar indicates the point configuration item, and the elements in the array are passed into the configuration object including:<br />time: <`Number`> Time node/unit second<br />content: <`String | Element`> Hover content on mouse hover<br />style：<`Object`> Custom Item Styles |
| #                              |          |                  |                                                              |
| seekLine                       | Object   | true             | show addressing lines                                        |
| #                              |          |                  |                                                              |



## Interface plus

| Methods                             | Type                  | Default                           | required | Description                                                  |
| ----------------------------------- | --------------------- | --------------------------------- | -------- | ------------------------------------------------------------ |
| PopupAdvertise                      | Function              |                                   |          | pop-up advertising floating window：<br />[example](##popup-advertising-floating-window) |
| PopupAdvertise.content              | HTMLElement \| String |                                   | Y        | Advertising window content                                   |
| PopupAdvertise.style                | Object                | {}                                |          | Customize additional popup styles                            |
| #                                   |                       |                                   |          |                                                              |
| addWatermark                        | Function              |                                   |          | Add window playback watermark: [example](#to-create-a-video-pre-roll-watermark) |
| addWatermark.image                  | String                |                                   | Y        | Image path to embed watermark                                |
| addWatermark.scale                  | Number                | 1                                 |          | Zoom ratio of watermark display                              |
| addWatermark.position               | String                | top-right                         |          | The location where the watermark is displayed, optional:`top-right` `top-left` `bottom-left` `bottom-right` |
| #                                   |                       |                                   |          |                                                              |
| createRolling                       | Function              |                                   |          | Create a window polling scrolling content prompt, parameter configuration:<br />[example](#create-a-window-polling-scrolling-content-prompt-marquee-effect) |
| createRolling.id                    | String                |                                   | Y        | The ID of scrolling playback, if you want to create multiple scrolling windows, this parameter must be declared |
| createRolling.scrollamount          | Number                | 6                                 |          | Sets the length (in pixels) to move on each scroll           |
| createRolling.scrolldelay           | Number                | 85                                |          | Set the time interval (in milliseconds) between each scroll  |
| createRolling.loop                  | Number                | -1                                |          | Set the number of scrolling, the default value is −1, which means continuous scrolling |
| createRolling.style                 | Object                | {}                                |          | Custom add content scroll style                              |
| createRolling.onstart               | Function              |                                   |          | Listener function, triggered once when creation starts scrolling |
| createRolling.onfinish              | Function              |                                   |          | Listening function, triggered after scrolling, valid when loop != -1 |
| createRolling.stop                  | Function              |                                   |          | pause scrolling                                              |
| createRolling.start                 | Function              |                                   |          | start scrolling                                              |
| #                                   |                       |                                   |          |                                                              |
| screenshot                          | Function              |                                   |          | Screenshot function to get the currently playing video frame: [example](#get-the-video-frame-at-the-current-playing-time) |
| screenshot.width                    | Number                | videoWidth                        |          | The width of the video capture canvas                        |
| screenshot.height                   | Number                | videoHeight                       |          | The height of the video canvas screenshot                    |
| screenshot.quality                  | Number                | 0.92                              |          | Set the quality of jpegs image output, the value is 0 - 1    |
| screenshot.type                     | String                | image/png                         |          | Output image format, optional:`image/png` `image/jpeg` `image/webp` |
| screenshot.scale                    | Number                | devicePixelRatio                  |          | The zoom ratio of screenshot rendering, the value is 0 - 1   |
| screenshot.watermark                |                       | { image, scale, position }        |          | Add a screenshot watermark, the parameter configuration is the same as `addWatermark` functional interface |
| screenshot.onDone                   | Function              | { base64, currentTime, download } |          | callback function on completion                              |
| screenshot.onFail                   | Function              | (error)                           |          | callback function on failure                                 |
| #                                   |                       |                                   |          |                                                              |
| switchMiniPlayer                    | Function              | (open, option)                    |          | Open/close small window playback, function delivery`open <Boolean>` Indicates to open or close the small window to play, `option <Object>` Pass all widget configurable parameters: [example](#small-window-play) |
| switchMiniPlayer.width              | Number \| String      | 400                               |          | Small window width                                           |
| switchMiniPlayer.height             | Number \| String      | auto                              |          | Small window height                                          |
| switchMiniPlayer.bottom             | Number \| String      | 50                                |          | Position the distance from the bottom of the window          |
| switchMiniPlayer.right              | Number \| String      | 50                                |          | The distance to the right of the positioning window          |
| switchMiniPlayer.keepPlayerLayer    | Boolean               | true                              |          | Protect the size of the player's parent container            |
| switchMiniPlayer.transition         | Boolean               | true                              |          | Whether to open the small window animation                   |
| switchMiniPlayer.transitionDuration | Number                | 0.35                              |          | animation time                                               |
| switchMiniPlayer.transitionTiming   | String                | ease                              |          | transition effects for animation                             |
| #                                   |                       |                                   |          |                                                              |
| createSettingPopup                  | Function              |                                   |          | Create and pop up an option settings window:[example](#create-and-pop-up-an-option-setting-window) |
| createSettingPopup.name             | String                |                                   | Y        | Popup ID                                                     |
| createSettingPopup.configs          | Array                 |                                   | Y        | Configuration items, configuration rules reference:     <br />[Custom settings group](mui-player-desktop-plugin.html#custom-settings-group-configuration) |
| createSettingPopup.offseDistance    | Number                | 0                                 |          | Specifies the popup offset distance                          |
| #                                   |                       |                                   |          |                                                              |



#### popup advertising floating window

```javascript
// Dynamically create the content of the pop-up advertising floating window
var vnode = document.createElement('img');
vnode.src = '../static/ads.jpg';
vnode.style.width = '100%';
vnode.style.height = '100%';
vnode.onclick = (e) => {
    e.stopPropagation();
    console.log('on click action...');
}

mp.popupAdvertise({
    content: vnode,
    style:{},
});
```



#### To create a video pre-roll watermark

```javascript
mp.addWatermark({
    image: 'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/logot.png',
    scale: 0.5,
    position:'top-right',
})
```



#### Create a window polling scrolling content prompt (marquee effect)

```javascript
var rolling = new mp.createRolling(content ,{
    id: 'warning',
    scrollamount:6, // Sets the length (in pixels) to move on each scroll
    scrolldelay:85, // Set the time interval (in milliseconds) between each scroll
    loop:2, // Set the number of scrolling, the default value is −1, which means continuous scrolling.
    style:{
        paddingBottom: '25px',
        paddingTop: '25px',
        textShadow: '0px 0px 3px rgb(0 0 0)',
    }
});

rolling.onstart(function() {
    console.log('Rolling Start...')
});

rolling.onfinish(function() {
    console.log('Rolling Finish...')
});

// rolling.stop(); // pause scrolling
// rolling.start(); // start scrolling
```



#### Get the video frame at the current playing time

```javascript
/**
* Get a screenshot of the video at the current playing time
* Note: Some HTML elements set support for CORS, such as: <img>, <audio>, <video> tags, etc., which means that calling the screenshot screenshot method may cause cross-domain behaviors that are not supported! The same-origin security policy may be supported, and the crossOrigin attribute of the element is set at the same time
* refer to：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/crossorigin
*/
mp.screenshot({
    quality: 0.92,
    type: 'image/jpeg',
    scale:0.5,
    watermark: { // Add screenshot watermark
        image: 'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/logot.png',
        scale: 0.75,
        position:'top-right',
    },
    onDone:function(data) {
        let { base64, currentTime, download } = data;
        download('File Name');
    },
    onFail:function() {
        console.error('screenshot error...');
    }
});
```




#### small window play

```javascript
// open small window
mp.switchMiniPlayer(true, {
    width: 400,
    height: 'auto',
    bottom: 50,
    right: 50,
    keepPlayerLayer: true,
    transition: true,
    transitionDuration: 0.35,
    transitionTiming: 'ease',
});

// close the window
mp.switchMiniPlayer(false);
```



#### Create and pop up an option setting window

```javascript
var danmakuConfigs = [
    {
        functions:'Danmaku',
        model:'switch',
        selected:true,
        onToggle:(data, selected, back) => { ... },
    },
    {
        functions:'Font size',
        childConfig:[
            { functions:'12 PX' },
            { functions:'16 PX' },
            { functions:'18 PX' },
            { functions:'25 PX',selected:true },
            { functions:'36 PX' },
            { functions:'45 PX' },
            { functions:'64 PX' },
        ],
        onToggle:(data, selected, back) => { ... }
    }
];

mp.createSettingPopup(event, {
    name: 'danmakuConfigs', // Specified name, required
    configs: danmakuConfigs, // configuration items
    offseDistance: 47, // Specifies the popup offset distance
});
```