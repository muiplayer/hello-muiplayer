

# PC extension

::: tip

mui-player-desktop-plugin.js is a player extension plug-in. The extension plug-in enhances the use of the player in PC application scenarios. It provides the ability to control the player including the mouse and keyboard, setting groups, volume adjustment, and video Functional components such as thumbnail configuration.

:::

## installation

Install using npm:

```
npm i mui-player-desktop-plugin
```

Install using yarn:

```
yarn add mui-player-desktop-plugin
```



## start using

Introduce **mui-player-desktop-plugin.js** on the page , the plug-in needs to be loaded before initializing the player

```html
<!-- Use the script tag to import -->
<script type="text/javascript" src="js/mui-player-desktop-plugin.min.js"></script>
```

```javascript
// Use the module manager to introduce plugins
import MuiPlayerDesktopPlugin from 'mui-player-desktop-plugin'
```

Pass in the main configuration item plugins

```javascript
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'../media/media.mp4',
    ...

    plugins:[
        new MuiPlayerDesktopPlugin({
            customSetting, // Set up group configuration
            contextmenu, // Right-click menu group configuration
            thumbnails,  // Thumbnail configuration
        })
    ]
});
```



## Configuration options

Extension plug-in configurable API

| Attribute name            | Types of | Defaults                                                     | Description                                                  |
| ------------------------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| customSetting             | Array    | {functions:'Loop play',name:'loopPlay'},<br /><br />{functions:'Playback speed',name:'playbackRate'} | Custom setting group,[see](#custom-settings-group-configuration) |
| customSetting.functions   | String   |                                                              | Group name                                                   |
| customSetting.name        | String   |                                                              | Group distinguished name. If the name is the same as the name in the default configuration group, the default configuration group menu will be overwritten |
| customSetting.model       | String   | select                                                       | Group selection mode, optional switch \| select              |
| customSetting.selected    | Boolean  | false                                                        | Whether the current selection is selected by default         |
| customSetting.show        | Boolean  | true                                                         | Whether to show                                              |
| customSetting.zIndex      | Number   | 0                                                            | Group display level, the larger the zIndex, the higher the order of the group |
| customSetting.childConfig | Array    | []                                                           | Child setting group configuration, the configuration parameters are the same as the parent setting group parameters |
| customSetting.onToggle    | Function | callback(  data,  selected,  back)                           | The callback function after the group option is clicked, receives three parameters for processing actions:<br /><br />1. data: currently selected configuration item<br />2. selected: function, you must manually call this function to select the item<br />3. back: function, call this function to trigger the return to the parent setting group, the parameter can receive a number in milliseconds to indicate the delayed return |
| #                         |          |                                                              |                                                              |
| contextmenu               | Array    | {name:'shortcuts',<br />context:'Shortcuts'},<br /><br />{name:'muiplayer',<br />context:'MuiPlayer'} | Customize the right-click menu, [reference](#customize-the-right-click-menu) |
| contextmenu.name          | String   |                                                              | Menu identification name, if the name is the same as a name in the right-click menu group, then the default menu group will be overwritten |
| contextmenu.context       | String   |                                                              | Right-click the menu name                                    |
| contextmenu.zIndex        | Number   |                                                              | Group display level, the larger the zIndex, the higher the order of the group |
| contextmenu.show          | Boolean  |                                                              | Whether to show                                              |
| contextmenu.click         | Function | callback(close)                                              | Callback function after click. [Close: function, call the function actively to close the right-click menu] |
| #                         |          |                                                              |                                                              |
| thumbnails                | Object   | {}                                                           | Thumbnail configuration, [see](/thumbnails/)                 |
| #                         |          |                                                              |                                                              |
| fullScaling               | Number   | 1.2                                                          | The zoom ratio of the control size in full screen, the value is >= 1 |
| leaveHiddenControls       | Boolean  | false                                                        | Whether to hide the controls when the mouse pointer moves out of the player |



## Custom settings group configuration

You can customize the configuration setting group to meet the need to add the menu. The setting menu supports two selection modes, namely switch mode and select mode.

The default setting group of the player includes loop playback and switching of the playback speed, which are not supported in live mode (live). The setting group can be customized by configuring the customSetting Option, configuration examples illustrate:

**customSetting.js**

```javascript
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
		onToggle:function(data,selected,back) {
            // Action
        }
	},
]

```



```javascript
import customSetting from './customSetting.js'

......
new MuiPlayerDesktopPlugin({
    customSetting,
})
```



## Customize the right click menu

```javascript
new MuiPlayerDesktopPlugin({
    contextmenu:[
        {
            name:'share',
            context:'Share',
            zIndex:0,
            show:true,
            click:function(close) {
                // Action...
            }
        },
    ],
})
```

## Action event monitoring

mui-player-desktop-plugin Provide the following specific behavior events：

```javascript
// page fullscreen change when the trigger
mp.on('pagefull-change',function(data) {
    console.log(data.pagefull);
});
```


| 事件名          | 类型        | 函数返回     | 说明                                          |
| --------------- | ----------- | ------------ | --------------------------------------------- |
| pagefull-change | EventHandle | { pagefull } | Page fullscreen change when the trigger       |
| pip-change      | EventHandle | { pip }      | Paint in picture mode toggle when the trigger |