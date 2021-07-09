# 视频弹幕

::: tip
MuiPlayer 并未开发自有的弹幕功能，但是你依然可以集成三方的弹幕插件到播放器，从 Github 中能检索到很多开源且优秀的 [视频弹幕项目](https://github.com/search?q=danmaku)。

 [CommentCoreLibrary](https://github.com/jabbany/CommentCoreLibrary) 开源构件提供了很多强大的弹幕功能，可配置 API 也较为完善。如下方的播放示例已经完成应用了该构件，从 [这里](https://github.com/muiplayer/hello-muiplayer/blob/master/demo/danmakuExample.html)学习我们是如何将 CCL 应用到 MuiPlayer 的，以便于轻松的应用到自己的项目中。

:::

<ClientOnly><Demo-Danmaku></Demo-Danmaku></ClientOnly>



## 使用 CommentCoreLibrary

1、在 html 文件头引入 ccl：

```html
<!-- 引入 ccl 样式文件 -->
<link rel="stylesheet" type="text/css" href="css/CommentCoreLibrary.min.css"/>
<!-- 引入 ccl 脚本文件 -->
<script type="text/javascript" src="js/CommentCoreLibrary.min.js"></script>
```

2、在相应需要弹幕的位置，放置如下 html dom 结构：

```html
<!-- 注意：为弹幕容器添加类名：container，以及父级容器添加类名：abp -->
<div id="mui-player" class="abp" ref="muiPlayer" style="position: relative;">
	<div id="comment-stage" class='container' style="z-index: 1 !important;height: 325px;width: 100%;"></div>
</div>
```

3、初始化 ccl 实例：

```javascript
var CM = new CommentManager(document.getElementById('comment-stage'));
CM.init(); // 初始化弹幕管理器


var danmakuData = [
    {"mode":1,"text":"请画出受力分析（10分）","stime":200,"size":25,"dur":7000,"color":0xffffff},
	{"mode":5,"text":"这风景太漂亮了吧~","stime":1000,"size":25,"dur":4000,"color":0xFF0000},
	{"mode":5,"text":"前方高能，建议反复观看！！","stime":1500,"size":25,"dur":4000,"color":0xFFFF00},
]
CM.load(danmakuList); // 载入弹幕列表，

// 启动播放弹幕（在未启动状态下弹幕不会移动）
CM.start();

// 停止播放（停止弹幕移动）
CM.stop();

// 更新时间轴时间
CM.time(500);
CM.time(1000);
```

**TIP：** 具体使用请从 [这里](https://github.com/muiplayer/hello-muiplayer/blob/master/demo/danmakuExample.html) 查看实际应用的代码，例如如何设置弹幕文字的样式、位置、存留时间等。这里查阅 [CCL API](https://github.com/jabbany/CommentCoreLibrary/tree/master/docs) 文档