

# PC 端扩展【专业版】

::: tip

PC 端扩展组件，该扩展新增了播放器在桌面端更多的功能性支持，包含弹幕输入、广告悬浮窗、视频水印、小窗口播放、进度位提示点和视频截图等。

插件使用原生 Js 的编写，因此在编写功能接口在代码上并未产生冗余从而导致体积包的增大。扩展插件通常是保持最新的版本，在使用该插件之前请更新到 mui-player 主文件到最新版本。

:::


<ClientOnly><Player-DesktopPlus></Player-DesktopPlus></ClientOnly>


## 下载

::: warning 增值服务
该插件由专业版提供支持，如需获取插件，请 [点击这里](/zh/joinUs/#专业版插件) 查看专业版插件下载。
:::



## 开始使用


在页面引入 **mui-player-desktop-plugin.plus.js**，插件需要在初始化播放器之前加载：

```html
<!-- 使用标签引入专业版扩展组件 -->
<script type="text/javascript" src="js/mui-player-desktop-plugin.plus.min.js"></script>
```

在主配置项 plugins 中传入：

```javascript
var mp = new MuiPlayer({
    container:'#mui-player',
    src:'../media/media.mp4',
    ...
    
    plugins:[
        new MuiPlayerDesktopPlugin({
            key: '配置您插件密文',
            ...
        })
    ]
});
```



## 配置选项 Plus

示例创建一个弹幕输入组件：

```javascript
new MuiPlayerDesktopPlugin({
    key: '配置您插件密文',
    danmakuComponent:{
        open: true, // 是否开启弹幕组件
        growSize: 0.65, // 组件占据容器的宽度比例，取值范围：0 - 1
        buttonText: '发送',
        onSend(text, cleanText) { // 监听文本发送内容的函数回调
            // axtion
        },
    }
})
```



| 属性名                         | 类型     | 默认值           | 说明                                                         |
| ------------------------------ | -------- | ---------------- | ------------------------------------------------------------ |
| danmakuComponent               | Object   | {}               | 创建一个弹幕输入组件                                         |
| danmakuComponent.open          | Object   | true             | 是否开启弹幕组件                                             |
| danmakuComponent.growSize      | Number   | 0.65             | 组件占据容器的宽度比例，取值范围：0 - 1                      |
| danmakuComponent.position      | String   | left             | 组件排列的位置，可取值 left \| right \| center               |
| danmakuComponent.buttonText    | String   | -                | 按钮显示的文字                                               |
| danmakuComponent.placeholder   | String   | -                | 弹幕文本录入框显示的占位符                                   |
| danmakuComponent.onSend        | Function | (text,cleanText) | 监听文本发送内容的函数回调，方法接收两个回调参数：<br />text：String - 表示文本内容<br />cleanText：Function - 调用函数清空文本输入框内容 |
| danmakuComponent.loadIntercept | Function | (Element)        | 在组件加载之前进行拦截，通常这里是做对组件重写的动作，回调函数 Element 返回该控件元素 |
| danmakuComponent.style         | Object   | {}               | 组件的附加样式                                               |
| #                              |          |                  |                                                              |
| prompt                         | Object   |                  | 进度条指示点                                                 |
| prompt.dotColor                | String   | \#F8F8FF         | 颜色                                                         |
| prompt.hoverShow               | Boolean  | false            | 是否只在鼠标悬停时显示                                       |
| prompt.items                   | Array    | {}               | 进度条指示点配置项，数组中元素传入配置对象包括：<br />time: <`Number`> 时间节点/单位秒<br />content: <`String | Element`> 鼠标悬浮提示内容<br />style：<`Object`> 自定义项样式 |
| #                              |          |                  |                                                              |
| seekLine                       | Object   | true             | 显示寻址线                                                   |
| #                              |          |                  |                                                              |



## 接口 Plus

| 方法名                              | 类型                  | 默认值                            | 必填 | 说明                                                         |
| ----------------------------------- | --------------------- | --------------------------------- | ---- | ------------------------------------------------------------ |
| PopupAdvertise                      | Function              |                                   |      | 弹出广告悬浮窗：<br />[示例](#弹出广告悬浮窗)                |
| PopupAdvertise.content              | HTMLElement \| String |                                   | Y    | 广告窗内容                                                   |
| PopupAdvertise.style                | Object                | {}                                |      | 自定义附加弹出窗样式                                         |
| #                                   |                       |                                   |      |                                                              |
| addWatermark                        | Function              |                                   |      | 添加窗口播放水印：[示例](#创建视频贴片水印)                  |
| addWatermark.image                  | String                |                                   | Y    | 嵌入水印的图片路径                                           |
| addWatermark.scale                  | Number                | 1                                 |      | 水印显示的缩放比                                             |
| addWatermark.position               | String                | top-right                         |      | 水印显示的位置，可选：`top-right` `top-left` `bottom-left` `bottom-right` |
| #                                   |                       |                                   |      |                                                              |
| createRolling                       | Function              |                                   |      | 创建一个窗口轮询滚动的内容提示，参数配置：[示例](#创建一个窗口轮询滚动的内容提示-跑马灯效果) |
| createRolling.id                    | String                |                                   | Y    | 滚动播放的ID标识，如需创建多个滚动窗口该参数必须声明         |
| createRolling.scrollamount          | Number                | 6                                 |      | 设置每次滚动时移动的长度（以像素为单位）                     |
| createRolling.scrolldelay           | Number                | 85                                |      | 设置每次滚动时的时间间隔（以毫秒为单位）                     |
| createRolling.loop                  | Number                | -1                                |      | 设置滚动次数，默认值为 −1，表示将连续滚动                    |
| createRolling.style                 | Object                | {}                                |      | 自定义添加内容滚动样式                                       |
| createRolling.onstart               | Function              |                                   |      | 监听函数，当创建开始滚动时触发一次                           |
| createRolling.onfinish              | Function              |                                   |      | 监听函数，滚动结束后触发，当 loop != -1 时有效               |
| createRolling.stop                  | Function              |                                   |      | 暂停滚动                                                     |
| createRolling.start                 | Function              |                                   |      | 开始滚动                                                     |
| #                                   |                       |                                   |      |                                                              |
| screenshot                          | Function              |                                   |      | 截图功能，获取当前播放的视频帧：[示例](#获取当前播放时间的视频帧) |
| screenshot.width                    | Number                | videoWidth                        |      | 视频截图画布的宽度                                           |
| screenshot.height                   | Number                | videoHeight                       |      | 视频画布截图的高度                                           |
| screenshot.quality                  | Number                | 0.92                              |      | 设置 jpegs 图片输出的质量，取值 0 - 1                        |
| screenshot.type                     | String                | image/png                         |      | 输出的图片格式，可选：`image/png` `image/jpeg` `image/webp`  |
| screenshot.scale                    | Number                | devicePixelRatio                  |      | 截图渲染的缩放比例，取值 0 - 1                               |
| screenshot.watermark                |                       | { image, scale, position }        |      | 添加截图水印，参数配置相同于 `addWatermark` 函数接口         |
| screenshot.onDone                   | Function              | { base64, currentTime, download } |      | 完成时回调函数                                               |
| screenshot.onFail                   | Function              | (error)                           |      | 失败时回调函数                                               |
| #                                   |                       |                                   |      |                                                              |
| switchMiniPlayer                    | Function              | (open, option)                    |      | 开启/关闭 小窗口播放，函数传递`open <Boolean>` 表示打开或者关闭小窗播放，`option <Object>` 传递所有小窗可配置参数：[示例](#小窗口播放) |
| switchMiniPlayer.width              | Number \| String      | 400                               |      | 小窗宽度                                                     |
| switchMiniPlayer.height             | Number \| String      | auto                              |      | 小窗高度                                                     |
| switchMiniPlayer.bottom             | Number \| String      | 50                                |      | 定位窗口底部的距离                                           |
| switchMiniPlayer.right              | Number \| String      | 50                                |      | 定位窗口右边的距离                                           |
| switchMiniPlayer.keepPlayerLayer    | Boolean               | true                              |      | 保护播放器父级容器的大小                                     |
| switchMiniPlayer.transition         | Boolean               | true                              |      | 是否开启小窗动画                                             |
| switchMiniPlayer.transitionDuration | Number                | 0.35                              |      | 动画时间                                                     |
| switchMiniPlayer.transitionTiming   | String                | ease                              |      | 动画的过渡效果                                               |
| #                                   |                       |                                   |      |                                                              |
| createSettingPopup                  | Function              |                                   |      | 创建并弹出一个选项设置窗口：[示例](#创建并弹出一个选项设置窗口) |
| createSettingPopup.name             | String                |                                   | Y    | 弹窗标识ID                                                   |
| createSettingPopup.configs          | Array                 |                                   | Y    | 配置项，配置规则参考： [自定义设置组配置](mui-player-desktop-plugin.html#自定义设置组配置) |
| createSettingPopup.offseDistance    | Number                | 0                                 |      | 指定 popup 偏移距离                                          |
| #                                   |                       |                                   |      |                                                              |



#### 弹出广告悬浮窗

```javascript
// 动态创建弹出广告悬浮窗的内容
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



#### 创建视频贴片水印：

```javascript
mp.addWatermark({
    image: 'https://muiplayer.oss-cn-shanghai.aliyuncs.com/static/image/logot.png',
    scale: 0.5,
    position:'top-right',
})
```



#### 创建一个窗口轮询滚动的内容提示（跑马灯效果）

```javascript
var rolling = new mp.createRolling(content ,{
    id: 'warning',
    scrollamount:6, // 设置每次滚动时移动的长度（以像素为单位）
    scrolldelay:85, // 设置每次滚动时的时间间隔（以毫秒为单位）
    loop:2, // 设置滚动次数，默认值为 −1，表示将连续滚动。
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

// rolling.stop(); // 暂停滚动
// rolling.start(); // 开始滚动
```



#### 获取当前播放时间的视频帧

```javascript
/**
* 获取当前播放时间的视频截图
* 注意: 一些 HTML元素设定了对 CORS 的支持，例如：<img>、<audio>、<video> 标签等，这意味着调用 screenshot 截图方法可能会产生跨域从行为不被支持！在同源安全策略才可能被支持，同时设置元素的 crossOrigin 属性
* 参考：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/crossorigin
*/
mp.screenshot({
    quality: 0.92,
    type: 'image/jpeg',
    scale:0.5,
    watermark: { // 添加截图水印
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




#### 小窗口播放

```javascript
// 开启小窗
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

// 关闭小窗
mp.switchMiniPlayer(false);
```



#### 创建并弹出一个选项设置窗口

```javascript
var danmakuConfigs = [
    {
        functions:'弹幕',
        model:'switch',
        selected:true,
        onToggle:(data, selected, back) => { ... },
    },
    {
        functions:'字体大小',
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
    name: 'danmakuConfigs', // 指定的名称，必填
    configs: danmakuConfigs, // 配置项目
    offseDistance: 47, // 指定 popup 偏移距离
});
```


