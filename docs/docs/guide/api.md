# API
::: tip

mui-player.js creates the basic controls used by the player, including the progress bar defined on the player, the start/pause/full-screen switch button, and the lower part of the player head control. It handles video playback and compatibility issues.

In order to make the code has good separation module, we targeted the mobile terminal and PC terminal to develop a suitable plug out of the box, when you read this you can choose to use these two types of **extensions** of the

[mui-player-mobile.plugin.js](./mui-player-mobile-plugin/)

[mui-player-desktop.plugin.js](./mui-player-desktop-plugin/)

:::

mui-player.js is the core library for creating players, check the configurable api and its external interface:

- [Main configuration](#main-configuration)
- [Custom configuration](#custom-configuration)
- [Play event monitoring](#play-event-monitoring)
- [Player interface](#player-interface)



## Main configuration

From here, initialize the player instance:

```javascript
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'../media/media.mp4',
    ...
});
```



| Attribute name | Types of       | Defaults           | Description                                                  |
| :------------- | :------------- | :----------------- | :----------------------------------------------------------- |
| container      | String/Element | required           | Specify the player container                                 |
| src            | String         | required           | Resource address for video playback                          |
| title          | String         |                    | title                                                        |
| autoplay       | Boolean        | false              | Whether to play automatically, please [reference](./other-problem.html) for the setting of autoplay attribute |
| preload        | String         | auto               | Whether the video is preloaded, the optional value is none \| metadata \| auto. If autoplay=true, this attribute is ignored. |
| loop           | Boolean        | false              | Whether to loop                                              |
| muted          | Boolean        | false              | Whether to play muted                                        |
| width          | String/Number  | auto               | Initialize the player width                                  |
| height         | String/Number  | 225px              | Initialize the player height                                 |
| lang           | String         | navigator.language | Player interface language, optional en \| zh-cn \| zh-tw     |
| volume         | Number         | 1                  | Initially set the video volume, the value is 0-1             |
| autoFit        | Boolean        | true               | Whether the player container height is adaptive to the video height |
| poster         | String         |                    | Resource address of video cover                              |
| live           | Boolean        | false              | Whether to enable the live broadcast mode, the default menu configuration of the live broadcast mode does not allow controlling the playback speed and loop playback |
| initFullFixed  | Boolean        | false              | Initialize whether the web page is played in full screen     |
| autoOrientaion | Boolean        | true               | Whether to switch the direction automatically when full screen, in [html5+](http://www.html5plus.org/doc/zh_cn/runtime.html)The screen will automatically rotate when the screen is in full screen, and some mobile browsers automatically rotate the direction when the screen is full.  <br />Tag: There is a slight difference when switching to full screen in ios. In full screen mode, the system is called to play in full screen. |
| dragSpotShape  | String         | circular           | Set the shape of the drag point of the progress bar, optional circula \| square |
| objectFit      | String         | contain            | The size of the video and the representation of the video container.Optional contain \| cover |
| #              |                |                    |                                                              |
| videoAttribute | Array          | []                 | This attribute is to add more H5 Video tags. The parameter is to accept each key value object. Note that if the attribute value in the array exists in the existing setting, it will be overwritten.  <br /><br /> If you need to configure the declaration to enable the same layer playback, the configuration is as follows: videoAttribute:[  {attrKey:'webkit-playsinline',attrValue:'webkit-playsinline'},  {attrKey:'playsinline',attrValue:'playsinline'}, {attrKey :'x5-video-player-type',attrValue:'h5-page'},  ] |
| #              |                |                    |                                                              |
| subtitle       | Object         | {}                 | Add video subtitles. Currently only supports webvtt subtitle format, please refer to [video subtitles](./subtitle/) |
| parse          | Object         | {}                 | Add video decoding plug-in. Please refer to: [Decoding Play](./preset/) |
| plugins        | Object         | {}                 | Add playback extension plug-in, please refer to: [mobile extension ](./mui-player-mobile-plugin/)[PC extension](./mui-player-desktop-plugin/) |



## Custom configuration

Customize the player controls and styles:

```javascript
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'../media/media.mp4',

    themeColor:'#55c612', // Custom theme color
    ...
});
```



| Attribute name        | Types of | Defaults | Description                                                  |
| :-------------------- | :------- | :------- | :----------------------------------------------------------- |
| themeColor            | String   | #1e98d4  | Theme color                                                  |
| showMiniProgress      | Boolean  | true     | Whether to display the mini progress bar at the bottom, which is displayed when the view manipulation control is hidden. It is invalid when the configuration item live=true. |
| pageHead              | Boolean  | true     | In non-full-screen mode, whether to display the head operation controls of the player |
| # custom              | Object   |          | Customize player controls.Please refer to: [custom player controls](./custom-control/) |
| custom.headControls   | Array    |          | Customize the player head button group, the parameter accepts a configuration array, the maximum configurable object is 5,[reference](./custom-control.html#example-1-customize-the-player-header-button) |
| custom.footerControls | Array    |          | Customize the control group at the bottom of the player, the parameter accepts a configuration array, the maximum configurable object is 5, [reference](./custom-control.html#example-2-customize-the-buttons-at-the-bottom-of-the-player) |
| custom.rightSidebar   |          |          | Customize the pop-up bar on the right side of the player, the parameter accepts a configuration array, the maximum configurable object is 5,[reference](./custom-control.html#example-3-customize-the-pop-up-window-on-the-right-sidebar) |



## Play event monitoring

MuiPlayer manages part of the playback events, and can handle the appropriate required actions by adding a listener to the specified event. Example:

```javascript
var mp = new MuiPlayer(option);
    
// The monitor player has been created
mp.on('ready',function(event) {
    console.log(event);
});
```

<div class="api-event"></div>

| Event name        | Types of    | Function returns       | Description                                                  |
| ----------------- | ----------- | ---------------------- | ------------------------------------------------------------ |
| back              | EventHandle |                        | Triggered when the back button is clicked.<br />Tag: Trigger only in non-full screen mode |
| duration-change   | EventHandle | {duration}             | Triggered when the video duration has been changed, only occurs when the duration is greater than 1, the unit is second (s) |
| seek-progress     | EventHandle | {percentage}           | Triggered when the user is addressing the video              |
| fullscreen-change | EventHandle | {direction,fullscreen} | Triggered when the video enters or exits the full screen. When the player is initialized, this event will be triggered once by default<br /><br />direction: indicates the direction of the current playback, applicable on the mobile phone<br /><br />fullscreen: Indicates whether the current playback is in full screen in the pc environment, this attribute is only returned in the pc environment |
| controls-toggle   | EventHandle | {show}                 | controls Triggered when the state of the control changes     |
| error             | EventHandle | native event           | An error occurred during playback                            |
| destroy           | EventHandle |                        | Video destruction event                                      |
| ready             | EventHandle |                        | The player has been created                                  |



## Player interface

MuiPlayer provides some external interfaces, which implement the built-in functions of the player. Examples:

```javascript
// Initialize the player configuration
var mp = new MuiPlayer(option);

// Show a message prompt
mp.showToast('prompt...');
```

<div class="api-inteface"></div>

| Method name      | Transfer parameters | Required | Description                                                  |
| ---------------- | ------------------- | -------- | ------------------------------------------------------------ |
| toggleControls   | true \| false       | -        | Actively hide/show player controls. The parameter can be passed a boolean value and can be forced to show or hide |
| showToast        | String \| Object    | -        | Pop-up message prompt, refer to receiving a character or string or object<br/>Ojbect = { message='', duration=1500, style={} }<br/>duration is equal to 1500 by default, in milliseconds |
| video            | -                   | -        | Returns the native video element of the current instance     |
| reloadUrl        | Video Src           | -        | Specify a video address to reload the resource, if no parameter is passed, it will reload by default |
| showRightSidebar | Slot name           |          | pop up Customize the right sidebar window, [reference](./custom-control.html#example-3-customize-the-pop-up-window-on-the-right-sidebar) |
| showLoading      | -                   | -        | Display video buffer loading                                 |
| hideLoading      | -                   | -        | Hidden video buffer loading                                  |
| openFullScreen   | -                   |          | Turn on full screen playback                                 |
| closeFullScreen  | -                   |          | Turn off full screen playback                                |
| getControls      | -                   |          | Get all the player controls and return an array              |
| destroy          | -                   | -        | Destroy the video player                                     |
| sendError        | event               |          | Proactively send error reports                               |

