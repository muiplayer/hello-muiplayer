

# PC 端扩展

::: tip

mui-player-desktop-plugin.js 是播放器扩展插件，该扩展插件增强了播放器在pc端应用场景的使用，提供了包括鼠标以及键盘对播放器的控制能力，设置组，音量调节，视频缩略图配置等功能组件。

:::



## 安装

使用 npm 安装：

```
npm i mui-player-desktop-plugin
```

使用 yarn 安装：

```
yarn add mui-player-desktop-plugin
```



## 开始使用

在页面引入 **mui-player-desktop-plugin.js**，插件需要在初始化播放器之前加载

```html
<!-- 使用 script 标签引入 -->
<script type="text/javascript" src="js/mui-player-desktop-plugin.min.js"></script>
```

```javascript
// 使用模块管理器引入插件
import MuiPlayerDesktopPlugin from 'mui-player-desktop-plugin'
```

在主配置项 plugins 中传入

```javascript
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'../media/media.mp4',
    ...

    plugins:[
        new MuiPlayerDesktopPlugin({
            customSetting, // 设置组配置
            contextmenu, // 右键菜单组配置
            thumbnails,  // 缩略图配置
        })
    ]
});
```



## 配置选项

扩展插件可配置API

| 属性名                    | 类型     | 默认值                                                       | 说明                                                         |
| ------------------------- | -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| customSetting             | Array    | {functions:'循环播放',<br/>name:'loopPlay'}<br/><br/>{functions:'播放速度',<br/>name:'playbackRate'} | 自定义设置组，[参见](#自定义设置组配置)                      |
| customSetting.functions   | String   |                                                              | 组名称                                                       |
| customSetting.name        | String   |                                                              | 组标识名。如该名称与默认配置组中某个名称相同，那么将重写默认配置组菜单 |
| customSetting.model       | String   | select                                                       | 组选择模式，可选 switch \| select                            |
| customSetting.selected    | Boolean  | false                                                        | 默认是否选中当前选择项                                       |
| customSetting.show        | Boolean  | true                                                         | 是否显示                                                     |
| customSetting.zIndex      | Number   | 0                                                            | 组显示层级，zIndex越大该组排列顺序越靠前                     |
| customSetting.childConfig | Array    | []                                                           | 子设置组配置，配置参数同父级设置组参数                       |
| customSetting.onToggle    | Function | callback(<br/>data,<br/>selected,<br/>back)                  | 组选项点击后的回调函数，接收三个参数可供处理动作：<br />1、data：当前选择配置项<br />2、selected： 函数，必须手动调用该函数来选择项目<br />3、back： 函数，调用该函数触发返回父级设置组，参数可接收一个毫秒单位的数字表示延迟返回 |
| #                         |          |                                                              |                                                              |
| ~~contextmenu~~           | Array    | {name:'shortcuts',<br />context:'快捷键'},<br /><br />{name:'muiplayer',<br />context:'MuiPlayer'} | 自定义右键菜单，[参考](#自定义右键菜单)                      |
| ~~contextmenu.name~~      | String   |                                                              | 菜单标识名，如该名称与右击菜单组中某个名称相同，那么将重写默认菜单组 |
| ~~contextmenu.context~~   | String   |                                                              | 右击菜单名称                                                 |
| ~~contextmenu.zIndex~~    | Number   |                                                              | 组显示层级，zIndex越大该组排列顺序越靠前                     |
| ~~contextmenu.show~~      | Boolean  |                                                              | 是否显示                                                     |
| ~~contextmenu.click~~     | Function | callback(close)                                              | 点击后回调函数。【close：函数，主动调用函数可关闭右击菜单】  |
| #                         |          |                                                              |                                                              |
| thumbnails                | Object   | {}                                                           | 缩略图配置，[参见](./thumbnails/)                            |
| #                         |          |                                                              |                                                              |
| fullScaling               | Number   | 1.2                                                          | 全屏时控件大小缩放比，取值 >= 1                              |
| leaveHiddenControls       | Boolean  | false                                                        | 鼠标指针移出播放器时是否隐藏控件                             |



##  自定义设置组配置 

您可以自定义配置设置组以此来满足需要添加的菜单，设置菜单支持两种选择模式，分别是开关模式（switch）和选择模式（select）。

播放器默认设置组包括循环播放以及播放速度的切换，在直播模式（live）下不支持。通过配置 customSetting Option 可自定义设置组，配置举例说明：

**customSetting.js**

```javascript
export default [
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



##  自定义右键菜单

::: warning 专业版功能
稳定版 PC 端扩展插件暂未支持自定义右键菜单的功能，如需应用该配置，<u>[点这里](/zh/joinUs/#专业版插件)</u> 查看下载专业版插件介绍
:::


```javascript
new MuiPlayerDesktopPlugin({
    contextmenu:[
        {
            name:'copyPlayUrl',
            context:'复制视频链接',
            zIndex:0,
            show:true,
            click:function(close) {
                // Action...
            }
        },
    ],
})
```


## 动作事件监听

mui-player-desktop-plugin 提供如下特定的行为事件：

```javascript
// 网页全屏改变的触发
mp.on('pagefull-change',function(data) {
    console.log(data.pagefull);
});
```


| 事件名          | 类型        | 函数返回     | 说明                   |
| --------------- | ----------- | ------------ | ---------------------- |
| pagefull-change | EventHandle | { pagefull } | 网页全屏模式改变的触发 |
| pip-change      | EventHandle | { size }     | 画中画模式改变时触发   |

