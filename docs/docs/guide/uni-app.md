# Use in uni-app

::: tip

mui-player.js handles plus api by default, then the player runs on [H5+](http://www.html5plus.org/doc/zh_cn/runtime.html)The environment will be compatible with the playback of mobile devices by default, such as playback control device volume, full-screen horizontal and vertical screen, immersive playback, etc.

:::



### Load MuiPlayer in UniApp WebView

To use in uni-app, you only need to use the [Webview](https://uniapp.dcloud.io/component/web-view) component in the framework. It is actually very simple to use, you only need to copy the downloaded mui-player.min.js and mui-player.min.css files to the hybrid folder of the corresponding project, and the webviw src is correspondingly linked to our HTML file.



### Related HTML5 + API in the player application

#### [plus device management](http://www.html5plus.org/doc/zh_cn/device.html)

```javascript
// Set device sound
plus.device.setVolume(volume);
```



#### [plus screen management](http://www.html5plus.org/doc/zh_cn/device.html#plus.screen)

```javascript
// Set screen brightness
plus.screen.setBrightness(brightness);

// Lock screen orientation
plus.screen.lockOrientation(orientation);
```



#### [plus browser environment](http://www.html5plus.org/doc/zh_cn/navigator.html)

```javascript
// Set whether the application is displayed in full screen. Full screen display will hide the system status bar
plus.navigator.setFullscreen(Boolean);

// Determine whether the setting is Liu Haiping
plus.navigator.hasNotchInScreen();
```
