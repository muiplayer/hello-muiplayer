# 在 uni-app 中使用

::: tip

mui-player.js 默认处理了 plus api，那么播放器运行在 [H5+](http://www.html5plus.org/doc/zh_cn/runtime.html) 环境时将会默认兼容移动设备的播放，例如播放控制设备音量、全屏时横竖屏，沉浸式播放等。

:::



### 在 UniApp WebView 中加载 MuiPlayer

在 uni-app 中使用你只需要使用到框架里的 [Webview](https://uniapp.dcloud.io/component/web-view) 组件。使用它实际也非常简单，你只需要将下载的 mui-player.min.js 以及 mui-player.min.css 文件复制到对应工程的 hybrid 文件夹内，webviw src 对应链接到我们的 HTML 文件。

### 在 UniApp Renderjs 中加载 MuiPlayer（推荐）
利用 [Renderjs](http://localhost:8080/zh/guide/uni-app.html#%E5%9C%A8-uni-app-%E4%B8%AD%E4%BD%BF%E7%94%A8) 技术在视图层加载 js 来创建播放器更方便，为此不需要再新建 HTML 文件，在 vue 组件内即可使用；


### 相关 HTML5 + API 在播放器的应用

#### [plus 设备管理](http://www.html5plus.org/doc/zh_cn/device.html)

```javascript
// 设置设备声音
plus.device.setVolume(volume);
```



#### [plus 屏幕管理](http://www.html5plus.org/doc/zh_cn/device.html#plus.screen)

```javascript
// 设置屏幕亮度
plus.screen.setBrightness(brightness);

// 锁定屏幕方向
plus.screen.lockOrientation(orientation);
```



#### [plus 浏览器环境](http://www.html5plus.org/doc/zh_cn/navigator.html)

```javascript
// 设置应用是否全屏显示。全屏显示将隐藏系统状态栏
plus.navigator.setFullscreen(Boolean);

// 判断设置是否为刘海屏
plus.navigator.hasNotchInScreen();
```
