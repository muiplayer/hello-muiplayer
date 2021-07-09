# Video danmaku

::: tip
MuiPlayer has not developed its own barrage function, but you can still integrate three-party barrage plug-ins into the player. Many open source and excellent [video danmaku projects](https://github.com/search?q=danmaku) can be retrieved from Github.

[CommentCoreLibrary](https://github.com/jabbany/CommentCoreLibrary) The open source component provides many powerful barrage functions, and the configurable API is relatively complete. For example, the play example below has completed the application of the component, learn from [here](https://github.com/muiplayer/hello-muiplayer/blob/master/demo/danmakuExample.html) How to apply CCL to MuiPlayer so that it can be easily applied to your own projects.

:::

<ClientOnly><Demo-Danmaku></Demo-Danmaku></ClientOnly>



## Use CommentCoreLibrary

1、Introduce ccl in the html file header:

```html
<!-- import basic style files -->
<link rel="stylesheet" type="text/css" href="css/CommentCoreLibrary.min.css"/>
<!-- import basic script -->
<script type="text/javascript" src="js/CommentCoreLibrary.min.js"></script>
```

2、Place the following html dom structure at the location where the barrage is needed:

```html
<!-- Note: Add the class name for the barrage container: container, and add the class name for the parent container: abp -->
<div id="mui-player" class="abp" ref="muiPlayer" style="position: relative;">
	<div id="comment-stage" class='container' style="z-index: 1 !important;height: 325px;width: 100%;"></div>
</div>
```

3、Initialize the ccl instance:

```javascript
var CM = new CommentManager(document.getElementById('comment-stage'));
CM.init(); // Initialize danmaku manager


var danmakuData = [
    {"mode":1,"text":"请画出受力分析（10分）","stime":200,"size":25,"dur":7000,"color":0xffffff},
	{"mode":5,"text":"这风景太漂亮了吧~","stime":1000,"size":25,"dur":4000,"color":0xFF0000},
	{"mode":5,"text":"前方高能，建议反复观看！！","stime":1500,"size":25,"dur":4000,"color":0xFFFF00},
]
CM.load(danmakuList); // Load the danmaku list

// Start playing the danmaku (the danmaku will not move when it is not activated)
CM.start();

// Stop playing (stop the danmaku moving)
CM.stop();

// Update timeline time
CM.time(500);
CM.time(1000);
```

**TIP：** For specific use, please view the actual application code from [here](https://github.com/muiplayer/hello-muiplayer/blob/master/demo/danmakuExample.html), such as how to set the bullet screen text The style, location, retention time, etc. Check the [CCL API](https://github.com/jabbany/CommentCoreLibrary/tree/master/docs) document here