# Mobile extension

::: tip

mui-player-mobile-plugin.js is an extension plug-in for the player. The plug-in enhances the maneuverability of the player on the mobile terminal, including the touch screen to control the progress and volume, lock the playback, and configure the main menu to switch the playback rate and loop playback. Wait.

**[View Demo](/demo/), For computer access, please use Google browser to open the phone debugging mode:**

<img src="https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/mobile_preview.png" class="zoom-custom-imgs"/>

:::

## Scan QR code
<br/>
<img src="https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/browser_view.png" class="zoom-custom-imgs" style="border: 1px solid #eaecef;" />

<div style="width: 50px;display: inline-block;"></div>
<img src="https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/app_view.png" class="zoom-custom-imgs" style="border: 1px solid #eaecef;"  />


## download

The plugin is supported by the professional version. If you need to get the plugin, <u>[click here](/joinUs/#professional-edition-plugin)</u> View the introduction of the professional version and download it!

## start using

Introduce **mui-player-mobile-plugin.js** on the page , the plugin needs to be loaded before initializing the player:

```html
<!-- Use the script tag to import -->
<script type="text/javascript" src="js/mui-player-mobile-plugin.min.js"></script>
```

Pass in the main configuration item plugins:

```javascript
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'../media/media.mp4',
    ...
    
    plugins:[
        new MuiPlayerMobilePlugin({
            showMenuButton:true,
            ...
        })
    ]
});
```



## Configuration options

Extension plug-in configurable API:

<div class="mobile-api"></div>

| Attribute name                    | Types of | Defaults | Description                                                  |
| --------------------------------- | -------- | -------- | ------------------------------------------------------------ |
| showMenuButton                    | Boolean  | true     | Whether to load the default main menu  <br />Tag: only valid when the phone is in landscape mode |
| showLock                          | Boolean  | true     | Whether to display the play lock button  <br />Tag: only valid when the phone is in landscape mode |
| showBattery                       | Boolean  | auto     | Whether to display the time and power, the default is auto. If the window.navigator.getBattery object is invalid, it will not be displayed, otherwise it will be displayed. |
| pageGetsture                      | Boolean  | true     | Whether to turn on touch screen control gestures in non-full screen state |
| defaultLuminance                  | Number   | 1        | Specify the brightness of the default player, the value range is 0 to 1, and the default is 1. If this parameter setting is invalid in the html5+ environment, the current system brightness will be obtained by default<br /><br />Tag: When hotKeyConfig['luminanceHandle'] != fals is configured with |
| forwardRate                       | Number   | 0.1      | Touch screen slide to control the forward and backward speed of the video, the effective value is 0.1 to 1 |
| #                                 |          |          |                                                              |
| hotKeyConfig                      | Object   | {}       | Hotkey configuration                                         |
| hotKeyConfig.processHandle        | Boolean  | true     | Whether to turn on the left and right touch screen sliding control progress |
| hotKeyConfig.volumeHandle         | Boolean  | true     | Whether to turn on the upper and lower touch screen sliding control volume, the default is the right half of the player, if you set luminanceHandle = false, then the full screen will be triggered |
| hotKeyConfig.luminanceHandle      | Boolean  | false    | Whether to turn on the upper and lower touch screen sliding control brightness, the default is the left half of the player, if you set volumeHandle = false, then the full screen will be triggered |
| #                                 |          |          |                                                              |
| defaultMenuConfig                 | Object   | {}       | Default sidebar main menu configuration                      |
| defaultMenuConfig.showFillSwitch  | Boolean  | true     | Whether to display the full screen switch button             |
| defaultMenuConfig.showLoopSwitch  | Boolean  | true     | Whether to display the switch button for loop playback, this parameter is invalid in live mode |
| defaultMenuConfig.showSpeedSwitch | Boolean  | true     | Whether it is allowed to switch the playback speed, this parameter is invalid in the live mode |
| defaultMenuConfig.showShare       | Array    | []       | Display the type of sharing. If the length of the value is zero or empty, the sharing portal will not be displayed. The parameter accepts 1 \| 2 \| 3 \| 4.  <br />1: WeChat, 2: Moments, 3: QQ, 4: Copy link |
| #                                 |          |          |                                                              |
| thumbnails                        | Object   |          | Thumbnail configuration，[reference](./thumbnails/)          |



## Action event monitoring

mui-player-mobile-plugin provides specific behavior events, you must add the event to handle the specified action:

```javascript
// Trigger when the volume is adjusted
mp.on('volume-change',function(e) {
    mp.video().volume = e.size;
});
```



| Event name       | Types of    | Function returns | Description                                                  |
| ---------------- | ----------- | ---------------- | ------------------------------------------------------------ |
| volume-change    | EventHandle | {size}           | Trigger when the volume is adjusted                          |
| luminance-change | EventHandle | {size}           | Trigger when brightness is adjusted                          |
| share            | EventHandle | {type}           | Default sidebar main menu-triggered when the share button is clicked |