# 快速开始

## 安装

使用 npm 安装：

```
npm i mui-player --save
```

使用 yarn 安装：

```
yarn add mui-player
```



## 使用

1、使用 script 标签引入：


```html
<!-- 引入基础样式文件 mui-player.min.css -->
<link rel="stylesheet" type="text/css" href="css/mui-player.min.css"/>

<!-- 引入基础脚本 mui-player.min.js -->
<script type="text/javascript" src="js/mui-player.min.js"></script>

<!-- 指定播放器容器 -->
<div id="mui-player"></div>
```

或者使用模块管理器引入：

```javascript
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'
```

2、定义播放器容器：

```html
<div id="mui-player"></div>
```

3、初始化构建播放器：

```javascript
// 初始化 MuiPlayer 插件，MuiPlayer 方法传递一个对象，该对象包括所有插件的配置
var mp = new MuiPlayer({
    container:'#mui-player',
    title:'标题',
    src:'./static/media/media.mp4',
})
```



以上就能为初始化构建一个具有默认配置控件的视频播放器，下面你可以阅读关于 MuiPlayer 的一些 API 基础配置选项。前往 [参数API](./api/)

