# 移动端扩展

::: tip

MuiPlayer 提供了一套样式统一，可观且响应式的移动端皮肤插件，该插件增强了播放器在移动端的可操纵能力，包含可触屏控制进度、音量，锁定播放，主菜单配置切换播放速率、循环播放等。

该扩展插件处理了大部分手机端播放的兼容性问题，如播放事件触发的时机冲突，浏览器全屏等等，以及兼容了包括 **Iphone**、**Android** 等各种机型。

如果您的应用是运行在 [html5 plus](http://www.html5plus.org/doc/zh_cn/runtime.html) 环境中，那么使用该播放插件将会默认得到更多原生 api 的支持，例如播放控制设备音量、全屏时横竖屏播放、沉浸式播放等。你也可以使用原生与网页交互的方式来控制视频以及设备功能，MuiPlayer 提供了所有事件触发的回调函数。查看在 [uni-app 中的使用。](./uni-app/)

**[查看演示](/zh/demo/)，电脑访问请使用Google浏览器打开手机调试模式：**

<img src="https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/mobile_preview.png" class="zoom-custom-imgs" alt="MuiPlayer 移动端扩展插件预览图" />

:::


## 扫码演示
<br/>
<img src="https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/browser_view.png" class="zoom-custom-imgs" style="border: 1px solid #eaecef;" />

<div style="width: 50px;display: inline-block;"></div>
<img src="https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/app_view.png" class="zoom-custom-imgs" style="border: 1px solid #eaecef;"  />



## 下载

::: warning 增值服务
该插件由专业版提供支持，如需获取插件，请 [点击这里](/zh/joinUs/#专业版插件) 查看专业版插件下载及介绍。
:::



## 开始使用


在页面引入 **mui-player-mobile-plugin.js**，插件需要在初始化播放器之前加载：

```html
<!-- 使用 script 标签引入 -->
<script type="text/javascript" src="js/mui-player-mobile-plugin.min.js"></script>
```

在主配置项 plugins 中传入：

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



## 配置选项

扩展插件可配置 API：

<div class="mobile-api" />


| 属性名                            | 类型    | 默认值 | 说明                                                         |
| --------------------------------- | ------- | ------ | ------------------------------------------------------------ |
| showMenuButton                    | Boolean | true   | 是否加载默认的主菜单<br/>Tag：只有在手机横屏状态有效         |
| showLock                          | Boolean | true   | 是否显示播放锁定按钮<br/>Tag：只有在手机横屏状态有效         |
| showBattery                       | Boolean | auto   | 是否显示时间电量，默认为 auto。如果window.navigator.getBattery 对象无效那么不显示，反之显示。 |
| pageGetsture                      | Boolean | true   | 非全屏状态是否开启触屏控制手势                               |
| defaultLuminance                  | Number  | 1      | 指定默认播放器的亮度，取值范围为 0 至 1，默认为 1。如果在 html5+ 环境下，该参数设置无效，将会默认获取当前系统亮度<br/>Tag：当 hotKeyConfig['luminanceHandle'] != fals 时配置有效 |
| forwardRate                       | Number  | 0.1    | 触屏滑动控制视频的进退速率，有效取值 0.1 至 1                |
| #                                 |         |        |                                                              |
| hotKeyConfig                      | Object  | {}     | 热键配置                                                     |
| hotKeyConfig.processHandle        | Boolean | true   | 是否开启左右触屏滑动控制进度                                 |
| hotKeyConfig.volumeHandle         | Boolean | true   | 是否开启上下触屏滑动控制音量，默认为播放器右半屏，如果设置 luminanceHandle = false，那么将全屏触发 |
| hotKeyConfig.luminanceHandle      | Boolean | false  | 是否开启上下触屏滑动控制亮度，默认为播放器左半屏，如果设置 volumeHandle = false，那么将全屏触发 |
| #                                 |         |        |                                                              |
| defaultMenuConfig                 | Object  | {}     | 默认侧栏主菜单配置                                           |
| defaultMenuConfig.showFillSwitch  | Boolean | true   | 是否显示铺满全屏切换按钮                                     |
| defaultMenuConfig.showLoopSwitch  | Boolean | true   | 是否显示循环播放切换按钮，直播模式下该参数无效               |
| defaultMenuConfig.showSpeedSwitch | Boolean | true   | 是否允许切换播放速度，直播模式下该参数无效                   |
| defaultMenuConfig.showShare       | Array   | []     | 显示分享的类型，如果该值的长度为零或者为空则不显示分享入口。参数接受 1 \| 2 \| 3 \| 4。<br /> 1：微信、2：朋友圈、3：QQ、4：复制链接 |
| #                                 |         |        |                                                              |
| thumbnails                        | Object  |        | 缩略图配置，[参考](./thumbnails/)                            |



## 动作事件监听

mui-player-mobile-plugin 提供特定的行为事件，你必须通过添加该事件来处理指定的动作：

```javascript
// 音量调节时触发
mp.on('volume-change',function(e) {
    mp.video().volume = e.size;
});
```

| 事件名           | 类型        | 函数返回 | 说明                                |
| ---------------- | ----------- | -------- | ----------------------------------- |
| volume-change    | EventHandle | { size } | 音量调节时触发                      |
| luminance-change | EventHandle | { size } | 亮度调节时触发                      |
| share            | EventHandle | { type } | 默认侧栏主菜单 - 分享按钮点击时触发 |


