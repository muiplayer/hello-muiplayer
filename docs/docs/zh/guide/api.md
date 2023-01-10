# API
::: tip
mui-player.js 创建了播放器基本使用的控件，包括定义在播放器上的进度条，开始/暂停/全屏切换按钮以及播放器头低部控件。它处理了视频播放以及兼容问题等。	

为了让代码具有较好的模块分离，我们针对性的对移动端和PC端开发出一套适用的插件，开箱即用，在你阅读过这里时就可以选择使用这两类 **扩展插件** 了

[mui-player-desktop-plugin.js](./mui-player-desktop-plugin/)

[mui-player-mobile.plugin.js](./plus-mobile-plugin/)

:::

mui-player.js 是创建播放器的核心库，查看可配置的 api 以及它提供对外的接口：

- [主要配置](#主要配置)
- [自定义配置](#自定义配置)
- [播放事件监听](#播放事件监听)
- [播放器接口](#播放器接口)



## 主要配置

从这里开始，初始化构建播放器实例：

```javascript
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'../media/media.mp4',
    ...
});
```


| 属性名             | 类型           | 默认值             | 说明                                                         |
| :----------------- | :------------- | :----------------- | :----------------------------------------------------------- |
| container          | String/Element | required           | 指定播放器容器                                               |
| src                | String         | required           | 视频播放的资源地址                                           |
| title              | String         |                    | 标题                                                         |
| autoplay           | Boolean        | false              | 是否自动播放，关于 autoplay 属性设置问题请[参考](./other-problem.html) |
| preload            | String         | auto               | 视频是否预加载，可选值 none \| metadata \| auto。如果 autoplay=true，则忽略该属性。 |
| loop               | Boolean        | false              | 是否循环播放                                                 |
| muted              | Boolean        | false              | 是否静音播放                                                 |
| width              | String/Number  | auto               | 初始化播放器宽度                                             |
| height             | String/Number  | 225px              | 初始化播放器高度                                             |
| lang               | String         | navigator.language | 播放器界面语言，可选 en \| zh-cn \| zh-tw                    |
| volume             | Number         | 1                  | 初始化设置视频音量，取值 0 - 1                               |
| autoFit            | Boolean        | true               | 播放器容器是否自适应视频高度                                 |
| poster             | String         |                    | 视频封面的资源地址                                           |
| live               | Boolean        | false              | 是否开启直播模式，直播模式默认菜单配置不允许控制播放速度以及循环播放 |
| initFullFixed      | Boolean        | false              | 初始化是否网页全屏播放                                       |
| autoOrientaion     | Boolean        | true               | 全屏时否自动切换方向，在 [html5+](http://www.html5plus.org/doc/zh_cn/runtime.html) 中全屏时会自动旋转屏幕，部分手机浏览器全屏时自动旋转方向。<br/>Tag：ios 全屏切换时稍有差异，全屏模式时调用系统全屏播放。 |
| dragSpotShape      | String         | circular           | 设置进度条拖动点的形状，可选 circula \| square               |
| objectFit          | String         | contain            | 视频大小与 video 容器的表现形式。可选 contain \| cover       |
| closeControlsTimer | Number         | 3500               | 设置播放器定时隐藏控件的时间，可配合 toggleControls 函数接口使用；`新增` |
| #                  |                |                    |                                                              |
| videoAttribute     | Array          | []                 | 此属性为添加更多 H5 Video 标签的属性，参数为接受每个 key value 键值对象，注意如果该数组中属性值在已有设置中存在，那么会覆盖。<br/><br/>如需配置声明启用同层播放，那么配置如下：videoAttribute:[<br/>{attrKey:'webkit-playsinline',attrValue:'webkit-playsinline'},<br/>{attrKey:'playsinline',attrValue:'playsinline'},<br/>{attrKey:'x5-video-player-type',attrValue:'h5-page'},<br/>] |
| #                  |                |                    |                                                              |
| subtitle           | Object         | {}                 | 添加视频字幕。目前只支持 webvtt 字幕格式，请参考[视频字幕](./subtitle/) |
| parse              | Object         | {}                 | 添加视频解码插件。请参考：[解码播放](./preset/)              |
| plugins            | Object         | {}                 | 添加播放扩展插件，请参考：[移动端扩展](./mui-player-mobile-plugin/)  [PC端扩展](./mui-player-desktop-plugin/) |



## 自定义配置

自定义设置播放器控件，样式：

```javascript
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'../media/media.mp4',

    themeColor:'#55c612', // 自定义主题颜色
    ...
});
```

| 属性名              | 类型    | 默认值  | 说明                                                         |
| :------------------ | :------ | :------ | :----------------------------------------------------------- |
| themeColor         | String  | #1e98d4 | 主题颜色                                    |
| showMiniProgress    | Boolean | true    | 是否显示底部迷你进度条，当视图操纵控件隐藏时显示。当配置项 live=true 时无效。 |
| pageHead            | Boolean | true    | 非全屏模式下，是否显示播放器头部操作控件 |
| # custom            | Object  |         | 自定义播放器控件。请参考： [自定义播放器控件](./custom-control/) |
| custom.headControls | Array   |         | 自定义播放器头部按钮组，参数接受一个配置数组，最大可配置对象为5个，[参考](./custom-control.html#示例一-自定义播放器头按钮) |
| custom.footerControls | Array | | 自定义播放器底部控件组，参数接受一个配置数组，最大可配置对象为5个，[参考](./custom-control.html#示例二-自定义播放器底部按钮) |
| custom.rightSidebar |  | | 自定义播放器右侧弹出栏，参数接受一个配置数组，最大可配置对象为5个，[参考](./custom-control.html#示例三-自定义右侧栏弹出窗口) |



## 播放事件监听

MuiPlayer 管理了部分的播放事件，可通过添加对指定事件的监听来处理适当需要的动作。示例：

```javascript
var mp = new MuiPlayer(option);
    
// 监听播放器已创建完成
mp.on('ready',function(event) {
    console.log(event);
});
```


| 事件名            | 类型        | 函数返回               | 说明                                                         |
| ----------------- | ----------- | ---------------------- | ------------------------------------------------------------ |
| back              | EventHandle |                        | 返回按钮点击时触发，<br />Tag：仅在非全屏模式下触发          |
| duration-change   | EventHandle | {duration}             | 当视频时长已更改时触发，只有当时长大于1时发生，单位为秒（s） |
| seek-progress     | EventHandle | {percentage}           | 当用户在视频寻址时触发                                       |
| fullscreen-change | EventHandle | {direction,fullscreen} | 当视频进入或者退出全屏时触发。初始播放器器时默认触发一次该事件<br />direction：表示当前播放的方向，在手机端适用<br />fullscreen：表示当前在 pc 环境是否为全屏状态播放，只有在 pc 环境返回该属性<br/> |
| controls-toggle   | EventHandle | {show}                 | controls 控件状态变化时触发                                  |
| error             | EventHandle | native event           | 播放发生错误                                                 |
| destroy           | EventHandle |                        | 视频销毁事件                                                 |
| ready             | EventHandle |                        | 播放器已创建完成                                             |



## 播放器接口

MuiPlayer 对外提供了部分接口，该接口实现了播放器内置的函数，示例：

```javascript
// 初始化播放器配置
var mp = new MuiPlayer(option);

// 显示一个消息提示
mp.showToast('提示...');
```


| 方法名           | 传参             | 必填 | 说明                                                         |
| ---------------- | ---------------- | ---- | ------------------------------------------------------------ |
| toggleControls   | true \| false    | -    | 操作播放器控件显示的状态，参数传递一个布尔类型的参数控制隐藏或显示；<br />默认播放控件会根据`closeControlsTimer`定时隐藏，可应用高级函数 `closeTimer | openTimer` 关闭或者打开定时器，示例： <br />`mp.toggleControls(true).closeTimer();`<br /><br />`mp.toggleControls(false).openTimer();` &emsp;`新增` |
| showToast        | String \| Object | -    | 弹出消息提示，参考接收一个字符或串或者对象<br />Ojbect = { message='', duration=1500, style={} }<br />duration 默认等于1500，单位毫秒 |
| video            | -                | -    | 返回当前实例的原生video元素                                  |
| reloadUrl        | Video src        | -    | 指定一个视频地址重新加载资源，不传参则默认重新加载           |
| showRightSidebar | Slot name        |      | 弹出自定义右侧栏窗口，[参考](./custom-control.html#示例三-自定义右侧栏弹出窗口) |
| showLoading      | -                | -    | 显示视频缓冲 loading                                         |
| hideLoading      | -                | -    | 隐藏视频缓冲 loading                                         |
| openFullScreen   | -                |      | 开启全屏播放                                                 |
| closeFullScreen  | -                |      | 关闭全屏播放                                                 |
| getControls      | -                |      | 获取所有播放器控件，返回一个数组                             |
| destroy          | -                | -    | 销毁视频播放器                                               |
| sendError        | event            |      | 主动发送错误报告                                             |
